import React, { useState } from 'react';
import { signup } from '../../api/auth';

export default function SignupPage({ onShowLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [error, setError] = useState('');

  const allSubjects = ['econ', 'stats', 'calc', 'bio'];

  const handleSubjectToggle = (subject) => {
    setSubjects(prev => 
      prev.includes(subject) 
        ? prev.filter(s => s !== subject) 
        : [...prev, subject]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!username || !password || !name) {
      setError('아이디, 비밀번호, 이름은 필수입니다.');
      return;
    }
    try {
      const profileData = { username, name, gender, age: Number(age), subjects };
      await signup(username, password, profileData);
      // 성공 시 AuthContext가 감지하므로 자동 로그인됨
    } catch (err) {
      setError('회원가입에 실패했습니다. 아이디가 이미 사용 중일 수 있습니다.');
      console.error(err);
    }
  };
  
  // (스타일 코드는 이전과 유사하게 정의)
  const formStyle = { display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px', margin: 'auto' };
  const inputStyle = { padding: '12px', backgroundColor: '#2d3748', border: '1px solid #4a5568', color: '#e2e8f0', borderRadius: '5px' };
  const buttonStyle = { padding: '12px', backgroundColor: 'var(--accent-color)', border: 'none', color: 'white', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' };
  const subjectBtnStyle = (subject) => ({
    ...buttonStyle,
    backgroundColor: subjects.includes(subject) ? 'var(--accent-color)' : '#4a5568',
  });

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h2>회원가입</h2>
      <input type="text" placeholder="아이디" value={username} onChange={(e) => setUsername(e.target.value)} style={inputStyle} />
      <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
      <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
      <input type="number" placeholder="나이" value={age} onChange={(e) => setAge(e.target.value)} style={inputStyle} />
      <select value={gender} onChange={(e) => setGender(e.target.value)} style={inputStyle}>
        <option value="">성별 선택</option>
        <option value="남성">남성</option>
        <option value="여성">여성</option>
      </select>
      <div>
        <p>수강 과목 (중복 선택 가능)</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          {allSubjects.map(s => <button type="button" key={s} onClick={() => handleSubjectToggle(s)} style={subjectBtnStyle(s)}>{s.toUpperCase()}</button>)}
        </div>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" style={buttonStyle}>가입하기</button>
      <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={onShowLogin}>이미 계정이 있으신가요? 로그인</p>
    </form>
  );
}
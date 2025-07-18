import React, { useState } from 'react';
import { login } from '../../api/auth';

// 👈 onShowSignup prop을 받습니다.
export default function LoginPage({ onShowSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
    } catch (err) {
      setError('로그인에 실패했습니다. 아이디 또는 비밀번호를 확인하세요.');
    }
  };

  // (스타일 코드는 SignupPage와 유사하게 정의)
  const formStyle = { display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: '50px auto' };
  const inputStyle = { padding: '10px', backgroundColor: '#2d3748', border: '1px solid #4a5568', color: '#e2e8f0', borderRadius: '4px' };
  const buttonStyle = { padding: '10px', backgroundColor: 'var(--accent-color)', border: 'none', color: 'white', borderRadius: '4px', cursor: 'pointer' };

  return (
    <form style={formStyle} onSubmit={handleLogin}>
      <h2>로그인</h2>
      <input type="text" placeholder="아이디" value={username} onChange={(e) => setUsername(e.target.value)} style={inputStyle} />
      <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" style={buttonStyle}>로그인</button>
      <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={onShowSignup}>계정이 없으신가요? 회원가입</p>
    </form>
  );
}
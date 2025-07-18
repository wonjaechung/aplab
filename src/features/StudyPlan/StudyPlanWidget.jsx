import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { getStudyPlan, saveStudyPlan } from '../../api/studyPlan';

const Widget = ({ title, children, style }) => (
  <div style={{ height: '100%', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '20px', display: 'flex', flexDirection: 'column', ...style }}>
    <h3 style={{ marginTop: 0, marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 600 }}>{title}</h3>
    {children}
  </div>
);

export default function StudyPlanWidget() {
  const { currentUser } = useAuth();
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (currentUser) {
      setStatus('로딩 중...');
      getStudyPlan(currentUser.uid).then(savedNotes => {
        setNotes(savedNotes);
        setStatus('');
      });
    }
  }, [currentUser]);

  const handleSave = () => {
    setStatus('저장 중...');
    saveStudyPlan(currentUser.uid, notes)
      .then(() => setStatus('저장 완료!'))
      .catch(() => setStatus('저장 실패.'))
      .finally(() => setTimeout(() => setStatus(''), 2000));
  };

  const textareaStyle = { flexGrow: 1, width: '100%', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', borderRadius: '4px', padding: '10px', resize: 'none', minHeight: '200px' };
  const buttonStyle = { marginTop: '10px', padding: '10px', backgroundColor: 'var(--accent-color)', border: 'none', color: 'white', borderRadius: '4px', cursor: 'pointer' };

  return (
    <Widget title="Study Plan">
      <textarea style={textareaStyle} value={notes} onChange={e => setNotes(e.target.value)} placeholder="이번 주 학습 계획을 기록해보세요..." />
      <button onClick={handleSave} style={buttonStyle}>계획 저장하기</button>
      {status && <p style={{ textAlign: 'right', margin: '10px 0 0', color: 'var(--text-secondary)' }}>{status}</p>}
    </Widget>
  );
}
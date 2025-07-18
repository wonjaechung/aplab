import React, { useState, useEffect } from 'react';
import { getLiveClasses } from '../../api/liveClasses';

const Widget = ({ title, children, style }) => (
  <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '20px', ...style }}>
    <h3 style={{ marginTop: 0, marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 600 }}>{title}</h3>
    {children}
  </div>
);

export default function LiveClassesWidget() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLiveClasses()
      .then(data => setClasses(data))
      .finally(() => setLoading(false));
  }, []);

  const classItemStyle = { display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border-color)' };

  return (
    <Widget title="Live Online Classes">
      {loading ? <p>수업 목록을 불러오는 중...</p> : classes.map(cls => (
        <div key={cls.id} style={classItemStyle}>
          <span>{cls.title}</span>
          <span>{cls.date.toLocaleDateString('ko-KR')}</span>
        </div>
      ))}
    </Widget>
  );
}
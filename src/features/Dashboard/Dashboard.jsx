import React from 'react';
import { Link } from 'react-router-dom'; // 페이지 이동을 위해 Link 컴포넌트를 import 합니다.
import LiveClassesWidget from '../LiveClasses/LiveClassesWidget';
import StudyPlanWidget from '../StudyPlan/StudyPlanWidget';
import { SUBJECTS } from '../../data/subjects'; // 과목 정보를 동적으로 가져옵니다.

const Widget = ({ title, children, style }) => (
    <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '20px', ...style }}>
        <h3 style={{ marginTop: 0, marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 600 }}>{title}</h3>
        {children}
    </div>
);

export default function Dashboard() {
    const dashboardStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gridAutoRows: 'minmax(200px, auto)', gap: '20px' };
    
    // 각 과목 버튼에 적용될 스타일입니다.
    const subjectButtonStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1rem',
        borderRadius: '8px',
        backgroundColor: 'var(--bg-primary)',
        border: '1px solid var(--border-color)',
        textDecoration: 'none',
        color: 'var(--text-primary)',
        transition: 'background-color 0.2s, border-color 0.2s',
    };

    return (
        <div style={dashboardStyle}>
            <div style={{ gridColumn: 'span 1', gridRow: 'span 2' }}>
                <StudyPlanWidget />
            </div>
            
            <Widget title="Drill Engine" style={{ gridColumn: 'span 1' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {Object.entries(SUBJECTS).map(([key, subject]) => (
                        <Link 
                            key={key} 
                            to={`/drill?subject=${key}`} // 클릭 시 /drill 페이지로 이동
                            style={subjectButtonStyle}
                        >
                            <subject.logo style={{ width: '28px', height: '28px' }} className={subject.theme.primary} />
                            <span style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>{subject.name}</span>
                        </Link>
                    ))}
                </div>
            </Widget>

            <LiveClassesWidget />
            <Widget title="Flashcards">
                <p>플래시카드 설정이 여기에 표시됩니다.</p>
            </Widget>
        </div>
    );
}
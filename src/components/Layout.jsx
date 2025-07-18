// src/components/Layout.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { logout } from '../api/auth';
import { Home, LogOut } from 'lucide-react'; // 아이콘은 그대로 사용

export default function Layout({ children }) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };
  
  // 이전의 인라인 스타일 방식으로 돌아옵니다.
  const layoutStyle = { maxWidth: '1400px', margin: '0 auto', padding: '20px' };
  const headerStyle = { padding: '20px 0', borderBottom: `1px solid var(--border-color)`, marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
  const mainTitleStyle = { fontSize: '2rem', color: 'var(--text-primary)', margin: 0, textDecoration: 'none' };
  const navButtonStyle = { padding: '8px 12px', backgroundColor: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px' };

  return (
    <div style={layoutStyle}>
      <header style={headerStyle}>
        <Link to="/" style={mainTitleStyle}>
          Wonjae's AP Lab
        </Link>
        {currentUser && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link to="/" style={navButtonStyle}>
                <Home size={18} />
                <span>Dashboard</span>
            </Link>
            <button onClick={handleLogout} style={navButtonStyle}>
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        )}
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}
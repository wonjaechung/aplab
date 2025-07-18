import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';
import LoginPage from '@/features/Auth/LoginPage';
import SignupPage from '@/features/Auth/SignupPage';
import Dashboard from '@/features/Dashboard/Dashboard';
import DrillPage from '@/features/DrillEngine/DrillPage';
import DrillSessionPage from '@/features/DrillEngine/DrillSessionPage';

/**
 * AppContent 컴포넌트
 * 사용자의 인증 상태에 따라 다른 페이지를 보여주는 라우팅 로직을 담당합니다.
 * @returns {JSX.Element}
 */
function AppContent() {
  // AuthContext에서 현재 사용자 정보와 로딩 상태를 가져옵니다.
  const { currentUser, loading } = useAuth();

  // Firebase에서 인증 상태를 확인하는 동안 로딩 화면을 보여줍니다.
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      {/* 로그인/회원가입 경로: 사용자가 로그인하지 않았을 때만 접근 가능합니다. */}
      <Route path="/login" element={!currentUser ? <LoginPage /> : <Navigate to="/" />} />
      <Route path="/signup" element={!currentUser ? <SignupPage /> : <Navigate to="/" />} />
      
      {/* 기타 모든 경로: 사용자가 로그인했을 때만 접근 가능합니다. */}
      <Route path="/*" element={currentUser ? (
        <Layout>
          <Routes>
            {/* 기본 경로는 대시보드입니다. */}
            <Route path="/" element={<Dashboard />} />
            {/* 드릴 설정 페이지 경로입니다. */}
            <Route path="/drill" element={<DrillPage />} />
            {/*
              드릴 문제 풀이 세션 페이지의 경로입니다.
            */}
            <Route path="/drill/session" element={<DrillSessionPage />} />
          </Routes>
        </Layout>
      ) : (
        // 로그인하지 않은 사용자가 다른 페이지에 접근하려고 하면 로그인 페이지로 보냅니다.
        <Navigate to="/login" />
      )} />
    </Routes>
  );
}

/**
 * 메인 App 컴포넌트
 * @returns {JSX.Element}
 */
export default function App() {
  // AppContent를 렌더링하여 라우팅 로직을 실행합니다.
  return <AppContent />;
}

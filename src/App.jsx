import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { useAuth } from './contexts/AuthContext';
import LoginPage from './features/Auth/LoginPage';
import SignupPage from './features/Auth/SignupPage';
import Dashboard from './features/Dashboard/Dashboard';
import DrillPage from './features/DrillEngine/DrillPage';
import DrillSessionPage from './features/DrillEngine/DrillSessionPage';

function AppContent() {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // 인증 상태 확인 중 로딩 화면
  }

  return (
    <Routes>
      <Route path="/login" element={!currentUser ? <LoginPage /> : <Navigate to="/" />} />
      <Route path="/signup" element={!currentUser ? <SignupPage /> : <Navigate to="/" />} />
      <Route path="/*" element={currentUser ? (
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/drill" element={<DrillPage />} />
          </Routes>
        </Layout>
      ) : (
        <Navigate to="/login" />
      )} />
    </Routes>
  );
}

export default function App() {
  return <AppContent />;
}
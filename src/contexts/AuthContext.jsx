import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../api/firebase'; // 우리가 만든 firebase 설정 파일

// 1. Context 생성
const AuthContext = createContext();

// 2. Context를 편하게 사용하기 위한 커스텀 훅
export function useAuth() {
  return useContext(AuthContext);
}

// 3. Context를 제공하는 부모 컴포넌트 (Provider)
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged: Firebase에서 제공하는 인증 상태 리스너
    // 로그인, 로그아웃 등 상태가 변할 때마다 자동으로 호출됨
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false); // 로딩 완료
    });

    // 컴포넌트가 언마운트될 때 리스너를 정리합니다.
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
  };

  // 로딩 중일 때는 아무것도 렌더링하지 않고, 로딩이 끝나면 자식 컴포넌트를 보여줍니다.
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
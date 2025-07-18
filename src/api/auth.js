// src/api/auth.js

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
// 👈 './firebase'에서 auth와 db를 올바르게 불러옵니다.
import { auth, db } from './firebase';

// 회원가입 함수 (Firestore 연동)
export const signup = async (username, password, profileData) => {
  // 1. Firebase Auth에 가상 이메일로 유저 생성
  const userCredential = await createUserWithEmailAndPassword(auth, `${username}@myapp.com`, password);
  const user = userCredential.user;

  // 2. Firestore에 추가 정보 저장
  await setDoc(doc(db, 'users', user.uid), {
    uid: user.uid,
    ...profileData, // username, name, gender, age, subjects
    email: user.email // 가상 이메일도 저장
  });
  
  return userCredential;
};

// 로그인 함수 (아이디 기반)
export const login = (username, password) => {
  return signInWithEmailAndPassword(auth, `${username}@myapp.com`, password);
};

// 로그아웃 함수
export const logout = () => {
  return signOut(auth);
};

// 사용자 프로필 정보 가져오는 함수
export const getUserProfile = (uid) => {
    if (!uid) return null;
    return getDoc(doc(db, "users", uid));
}
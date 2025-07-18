import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

export const saveDrillResult = (uid, questionId, isCorrect) => {
  if (!uid) return Promise.reject("User not logged in");
  // 문서 경로를 /users/{사용자ID}/drill_results/{문제ID} 로 변경하여 각 사용자별로 결과를 저장
  const resultRef = doc(db, 'users', uid, 'drill_results', questionId);
  return setDoc(resultRef, {
    questionId,
    isCorrect,
    lastAttempt: new Date()
  }, { merge: true }); // merge: true 옵션으로 기존 데이터를 덮어쓰지 않고 필드만 업데이트
};

export const getDrillResults = async (uid) => {
    if (!uid) return {};
    const resultsRef = collection(db, 'users', uid, 'drill_results');
    const snapshot = await getDocs(resultsRef);
    const results = {};
    snapshot.forEach(doc => {
        results[doc.id] = doc.data();
    });
    return results;
};
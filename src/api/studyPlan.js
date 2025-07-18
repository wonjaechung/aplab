import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export const getStudyPlan = async (uid) => {
  if (!uid) return null;
  const docRef = doc(db, 'study_plans', uid);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data().notes : "";
};

export const saveStudyPlan = (uid, notes) => {
  if (!uid) return;
  const docRef = doc(db, 'study_plans', uid);
  return setDoc(docRef, { notes });
};





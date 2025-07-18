import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';

export const getLiveClasses = async () => {
  const q = query(collection(db, 'live_classes'), orderBy('date', 'desc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    date: doc.data().date.toDate(),
  }));
};
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
    authDomain: 'pal-basketballtournament.firebaseapp.com',
    projectId: 'pal-basketballtournament',
    storageBucket: 'pal-basketballtournament.appspot.com',
    messagingSenderId: '60874061939',
    appId: '1:60874061939:web:6e9885e25eb2cf26b71206',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore();

export default app;

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Log the environment variables (remove this in production)
console.log('Firebase Config:', {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ? 'exists' : 'missing',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ? 'exists' : 'missing',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ? 'exists' : 'missing',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ? 'exists' : 'missing',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ? 'exists' : 'missing',
  appId: import.meta.env.VITE_FIREBASE_APP_ID ? 'exists' : 'missing'
});

// Your web app's Firebase configuration
// Replace these with your Firebase project configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app; 
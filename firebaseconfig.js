import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBBdLBifA3NswdKaHYyi6Ixd38pCrxUBb4",
  authDomain: "todosample-7c6ff.firebaseapp.com",
  projectId: "todosample-7c6ff",
  storageBucket: "todosample-7c6ff.appspot.com",
  messagingSenderId: "878946386037",
  appId: "1:878946386037:web:b7ccee5988503cbc3c383c",
  measurementId: "G-29E9P72VYD"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export { firebaseConfig };

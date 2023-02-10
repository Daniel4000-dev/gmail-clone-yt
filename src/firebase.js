import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
        apiKey: "AIzaSyDp0HoUNm6f6AG3X_CrPCkOcpaAEwy_sb0",
        authDomain: "gmial-clone-yt.firebaseapp.com",
        projectId: "gmial-clone-yt",
        storageBucket: "gmial-clone-yt.appspot.com",
        messagingSenderId: "375275534134",
        appId: "1:375275534134:web:c3a5474958ea4046836597"
      };

      const app = initializeApp(firebaseConfig);
      export const db = getFirestore(app);
      export const auth = getAuth();
      export const provider = new GoogleAuthProvider();

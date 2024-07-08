// trong file config thì sẽ đi cấu hình với fire-base
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_KEY_FIREBASE,
  authDomain: "lan-anh-f6a8a.firebaseapp.com",
  projectId: "lan-anh-f6a8a",
  storageBucket: "lan-anh-f6a8a.appspot.com",
  messagingSenderId: "478575183002",
  appId: "1:478575183002:web:0bf1c1eee127d7ba6f8b23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
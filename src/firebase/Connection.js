// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp0YHFIEHHwk0cxxm7qJt2LmqIoIObyjU",
  authDomain: "accounting-8ff9a.firebaseapp.com",
  projectId: "accounting-8ff9a",
  storageBucket: "accounting-8ff9a.appspot.com",
  messagingSenderId: "86951154708",
  appId: "1:86951154708:web:115b8d591d29d33ae04301"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
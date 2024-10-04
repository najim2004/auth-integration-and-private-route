// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0gxGzLVcFiopsn9_OIgC11sSMf3OHmNo",
  authDomain: "auth-integration-ad3f1.firebaseapp.com",
  projectId: "auth-integration-ad3f1",
  storageBucket: "auth-integration-ad3f1.appspot.com",
  messagingSenderId: "38058862459",
  appId: "1:38058862459:web:6aeaf42096251414b0bfde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
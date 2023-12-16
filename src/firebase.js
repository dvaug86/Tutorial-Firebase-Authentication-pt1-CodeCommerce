// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxUBxnfkkzNni3cPX6csVO2l-1pn2bEEc",
  authDomain: "codecomm-firebase-auth.firebaseapp.com",
  projectId: "codecomm-firebase-auth",
  storageBucket: "codecomm-firebase-auth.appspot.com",
  messagingSenderId: "48642854131",
  appId: "1:48642854131:web:395327fd49d773be983b86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app
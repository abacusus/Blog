// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyBiFGNiv2aIEwxgMk7QueELxc2AtLnBU84",
  authDomain: "blog-1a687.firebaseapp.com",
  projectId: "blog-1a687",
  storageBucket: "blog-1a687.firebasestorage.app",
  messagingSenderId: "345255215818",
  appId: "1:345255215818:web:e5056cf03a0ba8950aea33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth , provider}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
 
  apiKey: "AIzaSyDCjf053WxUjxC5_l1FDc29P6uNLw-M8T8",
  authDomain: "thakarparahighschoolclient.firebaseapp.com",
  projectId: "thakarparahighschoolclient",
  storageBucket: "thakarparahighschoolclient.appspot.com",
  messagingSenderId: "351284078200",
  appId: "1:351284078200:web:1e74ba1cedcfb782c02f8d",
  measurementId: "G-Z7D7VJVTCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
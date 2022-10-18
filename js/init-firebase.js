// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ6Bgbfd8-pQLYioAcChbtJbvhYIQ9NzM",
  authDomain: "docs-50858.firebaseapp.com",
  projectId: "docs-50858",
  storageBucket: "docs-50858.appspot.com",
  messagingSenderId: "672562885365",
  appId: "1:672562885365:web:7fdf3497b277e76cf78bbc",
  measurementId: "G-4TMDMGM6KL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
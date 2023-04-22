// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAz52ss4EZrWOrW5nfasPPsgJfZQATQzco",
	authDomain: "curator-a7d8b.firebaseapp.com",
	projectId: "curator-a7d8b",
	storageBucket: "curator-a7d8b.appspot.com",
	messagingSenderId: "712177123728",
	appId: "1:712177123728:web:0f630f4afbf8e111a5f315",
	measurementId: "G-QF72BWC0NV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

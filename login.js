// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG_cb-IBf2wkRrphDd7xhXmp4E9o_dCKU",
  authDomain: "epicure-s-escape.firebaseapp.com",
  databaseURL: "https://epicure-s-escape-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "epicure-s-escape",
  storageBucket: "epicure-s-escape.firebaseapp.com",
  messagingSenderId: "875442731780",
  appId: "1:875442731780:web:15d89e4a892137d30e6e51",
  measurementId: "G-81TFP9M688"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Sign Up functionality
const submit = document.getElementById('submit');
submit.addEventListener("click", function(event){
    event.preventDefault();
    // Input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert("Account created successfully!Please Sign in Now!");
        // Redirect to Sign In page
        document.getElementById('login').click();
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
});

// Sign In functionality
const signInButton = document.querySelector('.sign-in button');
signInButton.addEventListener("click", function(event){
    event.preventDefault();
    // Input values
    const email = document.querySelector('.sign-in input[type="email"]').value;
    const password = document.querySelector('.sign-in input[type="password"]').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("Signed in successfully!");
        // Redirect to Home page
        window.location.href = "Home.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Incorrect username or password");
    });
});

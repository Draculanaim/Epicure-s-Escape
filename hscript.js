// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG_cb-IBf2wkRrphDd7xhXmp4E9o_dCKU",
  authDomain: "epicure-s-escape.firebaseapp.com",
  databaseURL: "https://epicure-s-escape-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "epicure-s-escape",
  storageBucket: "epicure-s-escape.appspot.com",
  messagingSenderId: "875442731780",
  appId: "1:875442731780:web:15d89e4a892137d30e6e51",
  measurementId: "G-81TFP9M688"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Function to update the UI based on user authentication state
function updateUI(user) {
  const profileIcon = document.querySelector('.profile-icon');
  const profileDropdown = document.getElementById('profile-dropdown');
  const registrationButton = document.querySelector('.lnb_button a[href="index.html"]');

  if (user) {
    // User is logged in
    profileIcon.style.display = 'block';
    registrationButton.style.display = 'none'; // Hide registration button
    profileDropdown.style.display = 'none'; // Ensure dropdown is hidden initially
    document.getElementById('profile-name').innerText = `Name: ${user.name || "Anonymous"}`;
    document.getElementById('profile-email').innerText = `Email: ${user.email}`;
  } else {
    // User is not logged in
    profileIcon.style.display = 'none';
    registrationButton.style.display = 'inline-block'; // Show registration button
    profileDropdown.style.display = 'none';
  }
}

// Event listener for profile icon click
document.querySelector('.profile-icon').addEventListener('click', (e) => {
  e.preventDefault();
  const dropdown = document.getElementById('profile-dropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Logout functionality
document.getElementById('logout-button').addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      alert("Logged out successfully!");
      window.location.href = 'Home.html'; // Redirect to home page
    })
    .catch((error) => {
      alert("Error logging out: " + error.message);
    });
});

// Check if user is logged in and update UI
document.addEventListener('DOMContentLoaded', () => {
  onAuthStateChanged(auth, (user) => {
    updateUI(user);
  });
});

const firebaseConfig = {
  apiKey: "AIzaSyBG_cb-IBf2wkRrphDd7xhXmp4E9o_dCKU",
  authDomain: "epicure-s-escape.firebaseapp.com",
  databaseURL: "https://epicure-s-escape-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "epicure-s-escape",
  storageBucket: "epicure-s-escape.firebasestorage.app",
  messagingSenderId: "875442731780",
  appId: "1:875442731780:web:8687281f6af832ae0e6e51",
  measurementId: "G-5CJCG7B3FZ"
};
//initialize firebase 
firebase.initializeApp(firebaseConfig);

//refference database
var reservFormDB =firebase.database().ref('Epicures_Escape');

document.getElementById('reservationForm').addEventListener("submit", submitForm);

function submitForm(e){
  e.preventDefault();

  var name = getElementval('name');
  var phone = getElementval('phone');
  var date = getElementval('date');
  var time = getElementval('time');
  var guests = getElementval('guests');
  var requests = getElementval('requests');

  saveMessage(name,phone,date,time,guests,requests);

  // console.log(name,phone,date,time,guests,requests);
}

const saveMessage = (name,phone,date,time,guests,requests) => {
  var newReservForm = reservFormDB.push();
  newReservForm.set({
    name : name,
    phone : phone,
    date : date,
    time : time,
    guests : guests,
    requests : requests,

  })
};


const getElementval = (id) => {
  return document.getElementById(id).value;
}
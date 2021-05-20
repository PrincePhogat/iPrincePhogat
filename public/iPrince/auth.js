var firebaseConfig = {
    apiKey: "AIzaSyDIMXIIyzSECdwQ4yR4tJFmgx0zxK7lY_o",
    authDomain: "iphogat.firebaseapp.com",
    databaseURL: "https://iphogat-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "iphogat",
    storageBucket: "iphogat.appspot.com",
    messagingSenderId: "887961620478",
    appId: "1:887961620478:web:763f55fd19fc581a0cbaaf",
    measurementId: "G-MW9CXH02D7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.auth();


  // Listen for form submit
  document.getElementById('loginForm').addEventListener('submit', login);

  function login(e) {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
  
    authenticate(email, pass);
  }

  function authenticate(email, pass) {
    firebase.auth().signInWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        console.log("user logged in");

      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      location.replace('dashboard.html');
    } else {
      // User is signed out
    }
  });


//Función que hace desaparecer mi imagen principal
$(document).ready(function() {
  setTimeout(function() {
      $("#view-splash").fadeOut(1500);
    },2000);
});

//Función que hace aparecer la siguiente pantalla
$(document).ready(function() {
    setTimeout(function() {
      $("#second-section").fadeIn(1500);
    },2000);
});


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCTW_CuGxkifIrSOyH3aHrDhvouWe2Mt0s",
    authDomain: "sykkel-38222.firebaseapp.com",
    databaseURL: "https://sykkel-38222.firebaseio.com",
    projectId: "sykkel-38222",
    storageBucket: "sykkel-38222.appspot.com",
    messagingSenderId: "100214826901"
  };
  firebase.initializeApp(config);

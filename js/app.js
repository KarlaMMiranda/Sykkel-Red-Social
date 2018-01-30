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

// Función que inicializa FIREBASE
  
  var config = {
    apiKey: "AIzaSyCTW_CuGxkifIrSOyH3aHrDhvouWe2Mt0s",
    authDomain: "sykkel-38222.firebaseapp.com",
    databaseURL: "https://sykkel-38222.firebaseio.com",
    projectId: "sykkel-38222",
    storageBucket: "sykkel-38222.appspot.com",
    messagingSenderId: "100214826901"
  };
  firebase.initializeApp(config);

$('#buttonGoogle').click(function(){
  authGoogle();
})
function authGoogle(){
  var provider = new firebase.auth.GoogleAuthProvider(); 
  authentication(provider);
}

function authentication(provider){
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
});
}
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAMg5ALVWNDSLux3yI-P9ftZYXCt4_4ViM",
    authDomain: "vh7-preregistration.firebaseapp.com",
    databaseURL: "https://vh7-preregistration.firebaseio.com",
    projectId: "vh7-preregistration",
    storageBucket: "vh7-preregistration.appspot.com",
    messagingSenderId: "70446224469",
    appId: "1:70446224469:web:a66c6be57c125245d8f0dc"
};
// // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//references email collection
var emailRef = firebase.database().ref('emails');

// Listen for form submit
var emailField = document.getElementById('email')
emailField.addEventListener('keyup', e => {
    if (e.keyCode === 13) {

        e.preventDefault();

        var label = document.getElementById('form__label');
        // Validate email address
        if (emailField.validity.typeMismatch) {
            label.innerHTML = "please enter a valid email address";
        } else {
            // Send to firebase
            saveEmail();
            // Feedback to user that submission was successful
            emailField.value = '';
            label.innerHTML = "thank you for subscribing!";
        }
    }
});

// Save message to firebase
function saveEmail() {
    var email = document.getElementById('email').value;
    var newEmailRef = emailRef.push();
    newEmailRef.set({
        email: email
    });
}

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDdLHuotCYia2O3TQMH5EqDZhEzE8lkPJQ",
    authDomain: "vh-placeholder-test.firebaseapp.com",
    databaseURL: "https://vh-placeholder-test.firebaseio.com",
    projectId: "vh-placeholder-test",
    storageBucket: "vh-placeholder-test.appspot.com",
    messagingSenderId: "797653730750",
    appId: "1:797653730750:web:6ba8e27da8d3ac3694e5ef"
};
// // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//references email collection
var emailRef = firebase.database().ref('emails');

// Listen for form submit
document.getElementById('email').addEventListener('keyup', e => {
    if (e.keyCode === 13) {
        
        e.preventDefault();
        // Send input to Firebase
        saveEmail()
        // Feedback to user that submission was successful
        document.getElementById('email').value = '';
        document.getElementById('form__label').innerHTML = "thank you for subscribing!"
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

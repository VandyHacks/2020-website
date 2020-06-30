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

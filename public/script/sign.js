var email = document.getElementById('email');
var pass = document.getElementById('pass');

function store() {
    localStorage.setItem('email', email.value);
    localStorage.setItem('pass', pass.value);
}

function check() {

    var storedEmail = localStorage.getItem('email');
    var storedPass = localStorage.getItem('pass');

    var userEmail = document.getElementById('userEmail');
    var userPass = document.getElementById('userPass');

    if (userEmail.value == storedEmail && userPass.value == storedPass) {
        alert('You are logged in.');
        window.location.href = "index.html";
    } else {
        alert('ERROR.');
    }
}

function Validate() {
    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("repeat-pass").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}

function submit() {
    alert("Complain sent");
}
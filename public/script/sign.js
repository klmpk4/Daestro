var email = document.getElementById('email');
var pass = document.getElementById('pass');
var pass2 = document.getElementById('pass2');
function store() {
    localStorage.setItem('email', email.value);
    localStorage.setItem('pass', pass.value);
    validate();
}

function check() {

    var storedEmail = localStorage.getItem('email');
    var storedPass = localStorage.getItem('pass');

    var userEmail = document.getElementById('userEmail');
    var userPass = document.getElementById('userPass');

    if(userEmail.value == storedEmail && userPass.value == storedPass) {
        alert('You are logged in.');
        window.location.href = "index.html";
    }else {
        alert('ERROR.');
    }
}

function validate(){
  if(pass.value != pass2.value) {
    alert('Password does not match.');
  } else {
    window.location.href = "index.html";
  }
}

function submit() {
    alert("Complain sent");
}


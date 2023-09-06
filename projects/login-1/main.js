let showPasswordBtn = document.querySelector('#showPassword');
let warnEmail= document.querySelector('#warnEmail');
let warnPassword= document.querySelector('#warnPassword');



function login() {
    let emailInput = document.querySelector('#email');
    let passwordInput = document.querySelector('#password');
    let emailStatus;
    let passwordStatus;

    if (emailInput.value != '') {
        emailStatus = true;
        if (!warnEmail.hasAttribute('hidden')) {
            warnEmail.setAttribute('hidden','');
        }
    }else{
        emailStatus = false;
    }

    if (passwordInput.value != '') {
        passwordStatus = true;
        if (!warnPassword.hasAttribute('hidden')) {
            warnPassword.setAttribute('hidden','');
        }
    }else{
        passwordStatus = false;
    }

    if (emailStatus == true && passwordStatus == true) {
        alert('Login Success')
    } else {
        if (emailStatus == false) {
            warnEmail.removeAttribute('hidden');
        }
        if (passwordStatus == false) {
            warnPassword.removeAttribute('hidden');
        }
    }

}
function register() {
    alert('Register button clicked')
}
function loginGoogle() {
    alert('Google button clicked')
}
function loginGithub() {
    alert('Github button clicked')
}
function loginFacebook() {
    alert('Facebook button clicked')
}

showPasswordBtn.onclick = showPassword;

function showPassword(event) {
    event.preventDefault();

    let passwordInput = document.querySelector('#password');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
});

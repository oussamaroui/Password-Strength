let pass = document.getElementById('password'),
    eye = document.getElementsByTagName('img')[0],
    strengthBar = document.getElementById('strengthBar'),
    rules = document.getElementById('rules'),
    signup = document.getElementById('signup');

function testPasswordStrength() {
    var passwordStrength = 0;

    var regex = {
        lowercase: /[a-z]/,
        uppercase: /[A-Z]/,
        digits: /[0-9]/,
        specialChars: /[!@#$%^&*(),.?":{}|<>]/,
        length: /.{8,}/
    };
    var p = rules.getElementsByTagName('p');

    if (regex.lowercase.test(pass.value)) {
        passwordStrength++;
        p[1].style.color = '#00d700';
    } else { p[1].style.color = 'white'; }

    if (regex.uppercase.test(pass.value)) {
        passwordStrength++;
        p[2].style.color = '#00d700';
    } else { p[2].style.color = 'white'; }

    if (regex.digits.test(pass.value)) {
        passwordStrength++;
        p[3].style.color = '#00d700';
    } else { p[3].style.color = 'white'; }

    if (regex.specialChars.test(pass.value)) {
        passwordStrength++;
        p[4].style.color = '#00d700';
    } else { p[4].style.color = 'white'; }

    if (regex.length.test(pass.value)) {
        passwordStrength++;
        p[0].style.color = '#00d700';
    } else { p[0].style.color = 'white'; }


    if (passwordStrength === 5) {
        strengthBar.style.width = '100%';
        strengthBar.style.backgroundColor = "green";
        signup.style.opacity = '1';
    } else if (passwordStrength >= 3) {
        strengthBar.style.width = '50%';
        strengthBar.style.backgroundColor = "orange";
        signup.style.opacity = '.4';
    } else {
        strengthBar.style.width = '10%';
        strengthBar.style.backgroundColor = "red";
        signup.style.opacity = '.4';
    }

}

function showPass() {
    if (pass.type === "password") {
        pass.type = "text";
        eye.src = "https://img.icons8.com/material-sharp/900/ffffff/hide.png";
    } else {
        pass.type = "password";
        eye.src = "https://img.icons8.com/material-rounded/900/ffffff/visible.png";
    }
}
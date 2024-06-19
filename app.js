document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;


    setTimeout(() => {
        let agecount = document.getElementById('#ageSmall').value;
        document.getElementById('#ageSmall').innerText = agecount
    },1000)



    const username = document.getElementById('username').value;
    const usernameError = document.getElementById('usernameError');
    if (!/^[a-zA-Z0-9_]{3,16}$/.test(username)) {
        usernameError.textContent = 'Username must be 3-16 characters long and contain only letters, numbers, and underscores.';
        usernameError.style.visibility = 'visible';
        isValid = false;
    } else {
        usernameError.style.visibility = 'hidden';
    }

    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        emailError.textContent = 'Invalid email format.';
        emailError.style.visibility = 'visible';
        isValid = false;
    } else {
        emailError.style.visibility = 'hidden';
    }
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
        passwordError.textContent = 'Password must be at least 8 characters long and contain at least one letter and one number.';
        passwordError.style.visibility = 'visible';
        isValid = false;
    } else {
        passwordError.style.visibility = 'hidden';
    }

    if (isValid) {
        document.getElementById('successMessage').textContent = 'Registration successful!';
        document.getElementById('successMessage').style.visibility = 'visible';
    } else {
        document.getElementById('successMessage').style.visibility = 'hidden';
    }
});

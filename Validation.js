document.getElementById('loginForm').addEventListener('submit', function (event) {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    let valid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
        email.classList.add('is-invalid');
        valid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    if (!password.value) {
        password.classList.add('is-invalid');
        valid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    if (!valid) {
        event.preventDefault();
    }
});

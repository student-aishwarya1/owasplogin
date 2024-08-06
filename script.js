document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');

    // Show login form by default
    loginForm.classList.add('active');

    switchToRegister.addEventListener('click', (event) => {
        event.preventDefault();
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    });

    switchToLogin.addEventListener('click', (event) => {
        event.preventDefault();
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
    });

    // Login form validation
    document.getElementById('loginFormElement').addEventListener('submit', (event) => {
        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value.trim();
        if (username === '' || password === '') {
            event.preventDefault();
            alert('Please fill in all fields.');
        }
    });

    // Register form validation
    document.getElementById('registerFormElement').addEventListener('submit', (event) => {
        const username = document.getElementById('registerUsername').value.trim();
        const email = document.getElementById('registerEmail').value.trim();
        const password = document.getElementById('registerPassword').value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (username === '' || email === '' || password === '') {
            event.preventDefault();
            alert('Please fill in all fields.');
        } else if (!emailPattern.test(email)) {
            event.preventDefault();
            alert('Please enter a valid email address.');
        }
    });
});

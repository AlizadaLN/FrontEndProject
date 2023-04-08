let loginLink = document.querySelector('.login-link');
let registerLink = document.querySelector('.register-link');
let loginForm = document.querySelector('.login-form');
let registerForm = document.querySelector('.register-form');

loginLink.addEventListener('click', () => {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});

registerLink.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});
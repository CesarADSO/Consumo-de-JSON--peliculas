
const form_login = document.querySelector('#form_login');

form_login.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = 'dashboard.html';
});
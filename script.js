const form = document.getElementById('form');
const password1El = document.getElementById('password1El');
const password2El = document.getElementById('password2El');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
    // Use Contraint API
    isValid = form.checkValidity();
    // Style main message for error
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
}

function processFormData(e) {
    e.preventDefault();
    // validate Form
    validateForm();
}

// Event Listeners
form.addEventListener('submit', processFormData);
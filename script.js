function submitForm() {
    var handbrakeChecked = document.getElementById('handbrake').checked;
    var gearChecked = document.getElementById('gear').checked;

    // Your logic to send data to the server (Flask backend) goes here
    // For now, let's just display a notification
    if (gearChecked && handbrakeChecked)
        displayNotification("Form submitted successfully!");
}

function displayNotification(message) {
    var notificationElement = document.getElementById('notification');
    notificationElement.innerText = message;
    notificationElement.style.display = 'block';

    // Hide the notification after 3 seconds
    setTimeout(function () {
        notificationElement.style.display = 'none';
    }, 3000);
}

function toggleDarkMode() {
    var body = document.body;
    var container = document.querySelector('.container');

    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode-container');
}

function validateForm() {
    var handbrakeChecked = document.getElementById('handbrake').checked;
    var gearChecked = document.getElementById('gear').checked;

    if (handbrakeChecked && gearChecked) {
        return true; // Submit the form
    } else {
        displayNotification('Please check both checkboxes before submitting.');
        return false; // Do not submit the form
    }
}
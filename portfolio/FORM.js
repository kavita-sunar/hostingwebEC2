const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});


function validateUsername(input) {
    var username = input.value.trim();
    var regex = /^[A-Za-z0-9_]+$/;
    
    if (!regex.test(username)) {
        document.getElementById('usernameError').textContent = "Username can only contain alphanumeric characters and underscores (_).";
        input.setCustomValidity('Invalid characters found.');
    } else {
        document.getElementById('usernameError').textContent = "";
        input.setCustomValidity('');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('username').addEventListener('input', function() {
        validateUsername(this);
    });
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Example: Use fetch API to send form data to server
    fetch('signin.php', {
        method: 'POST',
        body: new FormData(this)
    })
    .then(response => {
        if (response.ok) {
            // Successful sign-in
            window.location.href = 'welcome.php'; // Redirect to success page
        } else {
            // Handle error or display error message
            console.error('Sign-in failed.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });


    // Example: Use fetch API to send form data to server
    fetch('signup.php', {
        method: 'POST',
        body: new FormData(this)
    })
    .then(response => {
        if (response.ok) {
            // Successful sign-up
            window.location.href = 'welcome.php'; // Redirect to success page
        } else {
            // Handle error or display error message
            console.error('Sign-up failed.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});








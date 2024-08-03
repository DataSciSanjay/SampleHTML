document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    if (username === 'Student' && password === 'Vsb@1') {
        window.location.href = 'study.html';
    } else {
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});

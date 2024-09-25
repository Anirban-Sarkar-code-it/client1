document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'student_school' && password === 'GU@12345') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

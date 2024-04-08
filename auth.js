const fs = require('fs'); // If using Node.js for file system operations

// JSON file path
const dbPath = './users.json';

// Function to authenticate user
function authenticateUser(username, password) {
    // Read users from JSON file
    const users = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

    // Find user by username
    const user = users.find(user => user.username === username);

    // Check if user exists and password matches
    if (user && user.password === password) {
        console.log('Login successful');
    } else {
        console.log('Invalid username or password');
    }
}

// Event listener for form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get username and password from form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Authenticate user
    authenticateUser(username, password);
});

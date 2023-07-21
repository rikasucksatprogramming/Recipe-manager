// Sign Up Form Submit Event
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
  
    // Create user account object
    const userAccount = { username, email, password };
  
    // Save user account to LocalStorage
    localStorage.setItem('userAccount', JSON.stringify(userAccount));
  
    // Clear form values
    document.getElementById('signup-username').value = '';
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';
  
    alert('Sign up successful! Please log in.');
  });
  
  // Log In Form Submit Event
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    // Retrieve user account from LocalStorage
    const userAccount = JSON.parse(localStorage.getItem('userAccount'));
  
    if (userAccount && userAccount.username === username && userAccount.password === password) {
      // Log in successful
      alert('Log in successful!');
      // Clear form values
      document.getElementById('login-username').value = '';
      document.getElementById('login-password').value = '';
    } else {
      // Log in failed
      alert('Invalid username or password.');
    }
  });
  
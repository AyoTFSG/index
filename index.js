const btn = document.querySelector('.login-button')

btn.addEventListener('click', function() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  if (email === 'appclick@gmail.com' && password === '1234AppClick') {
    alert('Login successful!');

    const welcome = document.getElementById('welcome-text');
    welcome.innerText = "Welcome Ayo!";

    const container = document.getElementById('container');
    container.remove();

  } else {
    alert('Incorrect email or password.');
  }
});
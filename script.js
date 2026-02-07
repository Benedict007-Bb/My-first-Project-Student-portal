// Dummy login credentials
const accounts = [
  { email: "student@bsu.com", password: "password123" },
  { email: "benedict@bsu.com", password: "benedict123" }
];

// Login functionality
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
loginForm.addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const user = accounts.find(acc => acc.email === email && acc.password === password);
  if(user){
    loginError.textContent = "";
    alert(`Login successful! Welcome ${email}`);
    window.location.href = "dashboard.html";
  } else {
    loginError.textContent = "Email or password is incorrect!";
  }
});

// Scroll animation for info section
const infoSection = document.querySelector('.info-container');
window.addEventListener('scroll', () => {
  const sectionTop = infoSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;
  if(sectionTop < screenHeight - 100){
    infoSection.classList.add('fade-in');
  }
});
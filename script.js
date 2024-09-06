// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form validation and submission
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Basic form validation
    if (name && email && message) {
      formStatus.textContent = "Thank you for your message!";
      formStatus.style.color = "green";
      form.reset();
    } else {
      formStatus.textContent = "Please fill in all fields!";
      formStatus.style.color = "red";
    }
  });
  
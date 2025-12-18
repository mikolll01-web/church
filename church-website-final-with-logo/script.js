
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  const errorBox = document.getElementById('error');
  const successBox = document.getElementById('success');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    errorBox.innerText = '';
    successBox.innerText = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if(name.length < 2){ errorBox.innerText = 'Please enter your full name.'; return; }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){ errorBox.innerText = 'Please enter a valid email address.'; return; }
    if(message.length < 5){ errorBox.innerText = 'Please enter a longer message.'; return; }

    // Simulate successful send (replace with real POST in production)
    successBox.innerText = 'Thank you! Your message has been sent.';
    form.reset();
    
  });
});


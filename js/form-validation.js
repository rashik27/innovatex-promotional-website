// InnovateX Promotional Website
// Contact Form Validation

document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('contactForm');
  if (!form) return;

  const status = document.getElementById('formStatus');

  const fullName = document.getElementById('fullName');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    clearStatus();

    const nameValue = fullName ? fullName.value.trim() : '';
    const emailValue = email ? email.value.trim() : '';
    const messageValue = message ? message.value.trim() : '';

    // Check required fields
    if (!nameValue) {
      showStatus('Please enter your full name.', 'error');
      fullName.focus();
      return;
    }

    if (!emailValue) {
      showStatus('Please enter your email address.', 'error');
      email.focus();
      return;
    }

    if (!isValidEmail(emailValue)) {
      showStatus('Please enter a valid email address.', 'error');
      email.focus();
      return;
    }

    if (!messageValue) {
      showStatus('Please enter your message.', 'error');
      message.focus();
      return;
    }

    // Successful submission
    showStatus('Thank you for your message. We will get back to you shortly.', 'success');
    form.reset();

    // Clear the success message after a few seconds
    setTimeout(function () {
      clearStatus();
    }, 6000);
  });

  function showStatus(text, type) {
    if (!status) return;
    status.textContent = text;
    status.className = 'form-status ' + type;
  }

  function clearStatus() {
    if (!status) return;
    status.textContent = '';
    status.className = 'form-status';
  }

  function isValidEmail(value) {
    // Simple email format check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

});
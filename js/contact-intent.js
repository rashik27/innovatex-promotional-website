// InnovateX Promotional Website
// Contact Page Intent Detection

document.addEventListener('DOMContentLoaded', function () {

  const label = document.getElementById('contactLabel');
  const heading = document.getElementById('contactHeading');
  const subtitle = document.getElementById('contactSubtitle');

  // Exit if the elements are not on this page
  if (!label || !heading || !subtitle) return;

  // Read the intent parameter from the URL
  const params = new URLSearchParams(window.location.search);
  const intent = params.get('intent');

  if (intent === 'demo') {
    label.textContent = 'REQUEST A DEMO';
    heading.textContent = 'Request a Demo';
    subtitle.textContent = "Fill in the form and we'll be in touch to schedule a demo.";
  } else if (intent === 'contact') {
    label.textContent = 'CONTACT US';
    heading.textContent = 'Send us a message';
    subtitle.textContent = 'How can we help?';
  } else {
    // Default content when no intent is provided
    label.textContent = 'CONTACT US';
    heading.textContent = 'Send us a message';
    subtitle.textContent = 'How can we help?';
  }

});
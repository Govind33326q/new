// script.js
document.addEventListener('DOMContentLoaded', function() {
  const contactBtn = document.getElementById('contactBtn');
  const contactSection = document.getElementById('contactSection');
  let isOpen = false;

  // Toggle contact section with smooth animation
  contactBtn.addEventListener('click', function() {
    isOpen = !isOpen;
    
    if (isOpen) {
      contactSection.style.maxHeight = contactSection.scrollHeight + 'px';
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      contactSection.style.maxHeight = '0';
    }
  });

  // Close contact section when clicking outside
  document.addEventListener('click', function(event) {
    if (!contactSection.contains(event.target) && 
        event.target !== contactBtn &&
        isOpen) {
      contactSection.style.maxHeight = '0';
      isOpen = false;
    }
  });
});
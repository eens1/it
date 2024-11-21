document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navLinkItems = document.querySelectorAll('.nav-links li a'); // Select all nav link items

  // Toggle hamburger menu
  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    
    // Toggle aria-expanded attribute for accessibility
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);

    // Lock or unlock body scroll when menu is open/closed
    document.body.classList.toggle('no-scroll', navLinks.classList.contains('active'));
  });

  // Close the menu when a link is clicked (for mobile)
  navLinkItems.forEach(link => {
    link.addEventListener('click', function () {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
      }
    });
  });
});

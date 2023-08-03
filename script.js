// JavaScript code (script.js)

// Add a click event listener to the navigation links (optional)
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    for (const link of navLinks) {
        link.addEventListener('click', smoothScrollToTarget);
    }
});

// Function to smoothly scroll to the target section when a navigation link is clicked (optional)
function smoothScrollToTarget(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const headerHeight = document.querySelector('header').offsetHeight;
    const smoothScrollOptions = {
        behavior: 'smooth',
        block: 'start'
    };
    window.scrollTo({
        top: offsetTop - headerHeight,
        ...smoothScrollOptions
    });
}

// You can add more JavaScript functionality here if needed

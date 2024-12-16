
// Handle active state on navbar click
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');
const scrollToTopBtn = document.getElementById('scrollToTop');
const banner = document.getElementById('banner');

navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Remove 'active' from all links
        navLinks.forEach(item => item.classList.remove('active'));
        
        // Add 'active' to the clicked link
        this.classList.add('active');

        // Scroll to the section with an offset for the fixed navbar
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        const navbarHeight = navbar.offsetHeight;

        window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight, // Calculate correct scroll position
            behavior: 'smooth' // Smooth scrolling
        });
    });
});

// Show the scroll-to-top button when scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll back to the banner when clicking the scroll-to-top button
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: banner.offsetTop,
        behavior: 'smooth'
    });
});

// Initialize ScrollSpy
const navbarHeight = navbar.offsetHeight;
new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example2',
    offset: navbarHeight // Adjust offset to match navbar height
});
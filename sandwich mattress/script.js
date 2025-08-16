// Toggle Navbar for Mobile
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    const navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.classList.toggle('show');
});

// Close Navbar (cross button)
function closeNavbar() {
    const navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.classList.remove('show'); // Hide the navbar
}


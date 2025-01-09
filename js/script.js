// Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav');

// Humberger menu diklik
document.querySelector('#hamburger-menu').onclick = (event) => {
  event.preventDefault(); // Mencegah refresh jika itu elemen <a> atau <button>
  navbarNav.classList.toggle('active');
};

// Klik Luar Sidebar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

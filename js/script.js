// Toggle Class Active Navbar Hamburger
const navbarNav = document.querySelector('.navbar-nav');

// Hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = (event) => {
  event.preventDefault(); // Mencegah refresh jika itu elemen <a> atau <button>
  navbarNav.classList.toggle('active');
};

// Toggle Class Active Search Form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (event) => {
  event.preventDefault();
  searchForm.classList.toggle('active');
  searchBox.focus();
};

// Toggle Class Active Shopping Cart
const shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-cart-button').onclick = (event) => {
  event.preventDefault(); // Mencegah refresh jika itu elemen <a> atau <button>
  shoppingCart.classList.toggle('active');
};


// Klik Luar elemen
const hamburger = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button');
const shoppingCartButton = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function(e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

   if (!searchButton.contains(e.target) && !navbarNav.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (!shoppingCartButton.contains(e.target) && !navbarNav.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }

});


// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (event) => {
    event.preventDefault();
    itemDetailModal.style.display = 'flex';
  };
});

// Close Button
document.querySelector('.modal .close-icon').onclick = (event) => {
  event.preventDefault();
  itemDetailModal.style.display = 'none';
}


// Close Outside Modal
window.onclick = (event) => {
  if (event.target === itemDetailModal){
    itemDetailModal.style.display = 'none';
  }
};
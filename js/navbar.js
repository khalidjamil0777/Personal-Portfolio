// =========================================
// navbar.js — Scroll effect, active links, hamburger
// =========================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  highlightNav();
});

function highlightNav() {
  var secs = ['hero','about','skills','projects','education','contact'];
  var cur = 'hero';
  secs.forEach(function (id) {
    var el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 100) cur = id;
  });
  document.querySelectorAll('.nav-link').forEach(function (a) {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
}

document.getElementById('hamburger').addEventListener('click', function () {
  document.getElementById('mobileMenu').classList.toggle('open');
});

function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}

highlightNav();

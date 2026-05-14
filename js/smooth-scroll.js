// =========================================
// smooth-scroll.js — Smooth anchor scrolling
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    e.preventDefault();
    var t = document.querySelector(this.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth' });
    if (typeof closeMobile === 'function') closeMobile();
  });
});

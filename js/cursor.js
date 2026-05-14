// =========================================
// cursor.js — Custom dual-layer cursor
// =========================================

const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursor-ring");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;

document.addEventListener("mousemove", function (e) {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + "px";
  cursor.style.top = my + "px";
});

(function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + "px";
  ring.style.top = ry + "px";
  requestAnimationFrame(animRing);
})();

document.querySelectorAll("a, button").forEach(function (el) {
  el.addEventListener("mouseenter", function () {
    ring.style.width = "48px";
    ring.style.height = "48px";
    ring.style.borderColor = "rgba(240,244,248,0.6)";
  });
  el.addEventListener("mouseleave", function () {
    ring.style.width = "32px";
    ring.style.height = "32px";
    ring.style.borderColor = "rgba(240,244,248,0.4)";
  });
});

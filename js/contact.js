// =========================================
// contact.js — Form submit & reset
// =========================================

function submitForm() {
  var n = document.getElementById('fname').value.trim();
  var e = document.getElementById('femail').value.trim();
  if (!n || !e) { alert('Please fill in your name and email.'); return; }
  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('formSuccess').classList.add('show');
}

function resetForm() {
  document.getElementById('contactForm').style.display = 'flex';
  document.getElementById('formSuccess').classList.remove('show');
  document.getElementById('fname').value  = '';
  document.getElementById('femail').value = '';
}

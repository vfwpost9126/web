const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (btn && nav) btn.addEventListener('click', () => nav.classList.toggle('open'));

const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === path) a.classList.add('active');
});

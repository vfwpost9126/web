const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

if (btn && nav) {
  btn.setAttribute('aria-expanded', 'false');
  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }));
}

const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === path) a.classList.add('active');
});

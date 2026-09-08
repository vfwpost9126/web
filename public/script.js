const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

function closeMenu() {
  if (!btn || !nav) return;
  nav.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-label', 'Open navigation');
}

if (btn && nav) {
  btn.setAttribute('aria-expanded', 'false');
  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
    btn.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu();
      btn.focus();
    }
  });

  document.addEventListener('click', event => {
    if (nav.classList.contains('open') && !nav.contains(event.target) && !btn.contains(event.target)) {
      closeMenu();
    }
  });
}

const normalizePath = value => {
  const pathname = new URL(value, location.origin).pathname
    .replace(/\/index(?:\.html)?$/, '/')
    .replace(/\.html$/, '')
    .replace(/\/$/, '');
  return pathname || '/';
};

const currentPath = normalizePath(location.pathname);
document.querySelectorAll('.nav a').forEach(a => {
  const linkPath = normalizePath(a.href);
  if (linkPath === currentPath) {
    a.classList.add('active');
    a.setAttribute('aria-current', 'page');
  }
});


// v36: Preselect the contact-form reason when a page links to
// contact.html?reason=<matching option text>.
(() => {
  const reasonSelect = document.querySelector('#reason');
  if (!reasonSelect) return;

  const requestedReason = new URLSearchParams(window.location.search).get('reason');
  if (!requestedReason) return;

  const matchingOption = Array.from(reasonSelect.options).find(
    option => option.text.trim() === requestedReason || option.value === requestedReason
  );

  if (matchingOption) {
    reasonSelect.value = matchingOption.value;
  }
})();

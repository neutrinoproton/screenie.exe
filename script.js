const menuToggle = document.getElementById('menuToggle');
const topnav = document.querySelector('.topnav');

if (menuToggle && topnav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = topnav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  topnav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      topnav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

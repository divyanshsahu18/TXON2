const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('nav ul');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menuNav.classList.add('show');
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menuNav.classList.remove('show');
    showMenu = false;
  }
}
const pageBody = document.querySelector('.page-body');
const buttonToggleMenu = document.querySelector('.main-nav__button');
const mainNav = document.querySelector('.main-nav');


buttonToggleMenu.addEventListener('click', function() {
  if (!mainNav.classList.contains('main-nav-open')) {
    mainNav.classList.add('main-nav-open');
    pageBody.classList.add('page-nav');
    buttonToggleMenu.classList.add('main-nav__button-close');
  } else {
    mainNav.classList.remove('main-nav-open');
    pageBody.classList.remove('page-nav');
    buttonToggleMenu.classList.remove('main-nav__button-close');
  }
})


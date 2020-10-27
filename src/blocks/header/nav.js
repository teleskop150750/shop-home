import paddingScroll from '../../js/global/padding-scroll';

export default (() => {
  const { body } = document;
  const buttonNavOpen = document.querySelector('.header__open-nav');
  const buttionNavListBack = document.querySelector('.nav__list-button');
  const nav = document.querySelector('.header__nav');

  const formInput = document.querySelector('.header__form-input');

  const openNav = () => {
    console.log(3);
    paddingScroll.addPadding();
    body.classList.add('page__body--lock');
    nav.classList.add('header__nav--open');
  };

  const closeNav = (e) => {
    nav.classList.remove('header__nav--open');
  };

  const toggleNav = () => {
    if (nav.classList.contains('header__form-wrapper--open')) {
      closeNav();
    } else {
      openNav();
    }
  };

  buttonNavOpen.addEventListener('click', () => {
    openNav();
  });
  buttionNavListBack.addEventListener('click', (e) => {
    closeNav(e);
  });
})();

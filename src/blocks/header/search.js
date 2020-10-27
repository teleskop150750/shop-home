import paddingScroll from '../../js/global/padding-scroll';

export default (() => {
  const { body } = document;
  const buttonSearchToggle = document.querySelector('.header__form-open');
  const form = document.querySelector('.header__form');

  const searchWrapper = document.querySelector('.header__form-wrapper ');
  const formInput = document.querySelector('.header__form-input');

  const openSearchWrapper = () => {
    paddingScroll.addPadding();
    body.classList.add('page__body--lock');
    searchWrapper.classList.add('header__form-wrapper--open');
    form.addEventListener('transitionend', () => {
      if (searchWrapper.classList.contains('header__form-wrapper--open')) {
        formInput.focus();
      }
    });
  };

  const closeSearchWrapper = () => {
    searchWrapper.classList.remove('header__form-wrapper--open');
    searchWrapper.classList.add('header__form-wrapper--close');
    searchWrapper.addEventListener('transitionend', () => {
      searchWrapper.classList.remove('header__form-wrapper--close');
    });
    formInput.blur();
    body.classList.remove('page__body--lock');
    paddingScroll.removePadding();
  };

  const toggleSearchWrapper = () => {
    if (searchWrapper.classList.contains('header__form-wrapper--open')) {
      closeSearchWrapper();
    } else {
      openSearchWrapper();
    }
  };

  buttonSearchToggle.addEventListener('click', toggleSearchWrapper);
  searchWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('header__form-wrapper')) {
      closeSearchWrapper();
    }
  });
})();

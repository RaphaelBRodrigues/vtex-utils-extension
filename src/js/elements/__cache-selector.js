const CacheSelector = {
  header: {
    $menuButton: document.querySelector('.x-header__right--menu-button'),
  },
  menu: {
    $menu: document.querySelector('.x-nav'),
    $menuItems: document.querySelectorAll('.x-nav__menu-item'),
  },
  initial: {
    $buttons: document.querySelectorAll('.x-main__initial button'),
  },
  localLogin: {
    $input: document.querySelector('.x-main__local-login input'),
    $button: document.querySelector('.x-main__local-login button'),
  },
};

export default CacheSelector;

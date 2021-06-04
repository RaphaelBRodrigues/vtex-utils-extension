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
};

export default CacheSelector;

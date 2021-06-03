import CacheSelector from '../__cache-selector';

const { $menuButton, $menu } = {
  ...CacheSelector.header,
  ...CacheSelector.menu,
};

function bindMenuButton() {
  $menuButton.addEventListener('click', () => {
    if ([...$menu.classList].includes('is--active')) {
      $menu.classList.remove('is--active');
      $menuButton.classList.remove('is--active');
    } else {
      $menu.classList.add('is--active');
      $menuButton.classList.add('is--active');
    }
  });
}

export default () => {
  bindMenuButton();
};

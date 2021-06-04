import CacheSelector from '../__cache-selector';
import showElement from '@Elements/content/utils/displayContent';

const { $menuItems, $menu } = {
  ...CacheSelector.header,
  ...CacheSelector.menu,
};

function removeActiveFromMenuItem() {
  [...$menuItems].forEach(($item) => {
    $item.classList.remove('is--active');
  });
}

function bindMenuItem() {
  [...$menuItems].forEach(($item) => {
    $item.addEventListener('click', (e) => {
      if (![...e.target.classList].includes('is--active')) {
        removeActiveFromMenuItem();
        const contentToShow = $item.getAttribute('data-content');
        showElement(contentToShow);
        $item.classList.remove('is--active');
        e.target.classList.add('is--active');
      }
    });
  });
}

export default () => {
  removeActiveFromMenuItem();
  bindMenuItem();
};

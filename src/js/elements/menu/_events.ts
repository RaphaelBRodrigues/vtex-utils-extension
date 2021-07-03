import CacheSelector from '../__cache-selector';
import { activeSection } from '@Utils';

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
    $item?.addEventListener('click', () => {
      if (![...$item?.classList].includes('is--active')) {
        removeActiveFromMenuItem();
        const contentToShow = $item.getAttribute('data-content');
        activeSection(contentToShow);
        $item.classList.remove('is--active');
        $item.classList.add('is--active');
      }
    });
  });
}

export default () => {
  removeActiveFromMenuItem();
  bindMenuItem();
};

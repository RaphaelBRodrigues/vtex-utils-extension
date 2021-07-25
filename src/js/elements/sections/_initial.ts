import CacheSelector from '../__cache-selector';
import { activeSection } from '@Utils';
const { $buttons, $menuItems } = {
  ...CacheSelector.initial,
  ...CacheSelector.menu,
};

function bindButtons() {
  [...$buttons].forEach(($button) => {
    $button.addEventListener('click', () => {
      const selectedSection: string | null =
        $button.getAttribute('data-content');

      [...$menuItems].find(($menuItem) => {
        return $menuItem.getAttribute("data-content") === selectedSection
      })?.classList.add("is--active")

      activeSection(selectedSection);
    });
  });
}

function init() {
  bindButtons();
}

export default init;

import CacheSelector from '../__cache-selector';
import { activeSection } from '@Utils';
const { $buttons } = {
  ...CacheSelector.initial,
};

function bindButtons() {
  [...$buttons].forEach(($button) => {
    $button.addEventListener('click', () => {
      const selectedSection = $button.getAttribute('data-content');
      activeSection(selectedSection);
    });
  });
}

function init() {
  bindButtons();
}

export default init;

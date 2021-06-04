/**
 * @param {String} selectedSection  - Selected content
 * @description Show the selected content on main element
 */

function showElement(selectedSection) {
  const $sections = document.querySelectorAll('section');

  $sections.forEach(($section) => {
    $section.classList.remove('is--active');
  });

  const $selectedSection = [...$sections].find(($section) => {
    return $section.getAttribute('data-section') === selectedSection;
  });

  $selectedSection?.classList.add('is--active');
}

export default showElement;

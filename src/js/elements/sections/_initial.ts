import CacheSelector from '../__cache-selector';
import {
	activeSection, isPDP, isVTEX
} from '@Utils';
const {
	$buttons, $menuItems, $menu, $menuButton
} = {
	...CacheSelector.initial,
	...CacheSelector.header,
	...CacheSelector.menu,
};

function bindButtons() {
	[...$buttons].forEach(($button) => {
		$button.addEventListener('click', () => {
			const selectedSection: string | null =
				$button.getAttribute('data-content');

			[...$menuItems].find(($menuItem) => {
				return $menuItem.getAttribute('data-content') === selectedSection;
			})?.classList.add('is--active');

			$menu?.classList.remove('is--active');
			$menuButton?.classList.remove('is--active');

			activeSection(selectedSection);
		});
	});
}

async function availableButtons() {
	const $productButton = [...$buttons]
		.find(($button) => $button.getAttribute('data-content') === 'product');
	const $productItem = [...$menuItems]
		.find(($item) => $item.getAttribute('data-content') === 'product');


	if (await isVTEX()) {
		if (await isPDP()) {
			$productButton?.removeAttribute('disabled');
			$productButton?.removeAttribute('title');

			$productItem?.removeAttribute('data-disabled');
			$productItem?.removeAttribute('title');
		} else {
			$productButton?.setAttribute('disabled', 'true');
			$productButton?.setAttribute('title', 'Disponível apenas na PDP');

			$productItem?.setAttribute('data-disabled', 'true');
			$productItem?.setAttribute('title', 'Disponível apenas na PDP');
		}
	} else {
		[...$menuItems]
			.filter($item => $item.getAttribute('data-content') !== 'custom_fetch')
			.forEach($item => {
				$item.setAttribute('title', 'Disponível apenas em VTEX Stores');
				$item.setAttribute('data-disabled', 'true');
			});

		[...$buttons]
			.filter($item => $item.getAttribute('data-content') !== 'custom_fetch')
			.forEach($item => {
				$item.setAttribute('disabled', 'true');
				$item.setAttribute('title', 'Disponível apenas em VTEX Stores');
			});
	}
}

function init() {
	try {
		bindButtons();
		availableButtons();
	} catch (err) {
		console.error(err)
	}
}

export default init;

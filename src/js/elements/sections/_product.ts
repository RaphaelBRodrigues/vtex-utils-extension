import { ProductKeysToShow } from '@Constants';
import { ProductKeys } from '@Types';
import {
	createClickListener, cleanNode, createCopyButton, createCSV, getProductData
} from '@Utils';
import CacheSelector from '../__cache-selector';

const {
	$list, $jsonLink, $csvLink
} = { ...CacheSelector.product, };

async function setProductData() {
	getProductData((product) => {
		cleanNode($list);

		ProductKeysToShow.forEach((key) => {
			if (typeof product?.[key] === 'object' || !product![key]) return;

			const $div = document.createElement('div');

			const $inputWrapper = Object.assign(document.createElement('div'), { className: 'x-input__wrapper' });

			const $span = Object.assign(document.createElement('span'), { innerText: ProductKeys[key], });

			const $input = Object.assign(document.createElement('input'), {
				value: product![key],
				disabled: true,
			});


			$inputWrapper.append($input);
			$inputWrapper.append(createCopyButton());

			$div.append($span);
			$div.append($inputWrapper);

			$list?.append($div);
		});

		if (product) setDownloadLinks([product]);
	});
}

function setDownloadLinks(product: Object[]) {
	const csvContent = createCSV(product);

	const csvURL =
    'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);

	const jsonURL =
    'data:text/json;charset=utf-8,' +
    encodeURIComponent(JSON.stringify(product, null, '\t'));

	$jsonLink?.setAttribute('href', jsonURL);
	$csvLink?.setAttribute('href', csvURL);

	$jsonLink?.classList.add('is--active');
	$csvLink?.classList.add('is--active');
}

function recreateProductContent() {
	const selectors = [
		"button[data-content='product']",
		".x-nav__menu-item[data-content='product']"
	].join(",");

	createClickListener(selectors, setProductData);
}
 
function init() {
	setProductData();
	recreateProductContent();
}

export default init;

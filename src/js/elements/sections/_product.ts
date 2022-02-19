import { PRODUCT_KEYS_TO_SHOW } from '@Constants';
import { ProductKeys } from '@Types';
import {
	createClickListener,
	cleanNode,
	createCopyButton,
	getProductData,
	copyToClipboard,
	toggleLoader,
	dispatchProductData,
	getVtexInfo
} from '@Utils';

import CacheSelector from '../__cache-selector';

const {
	$list, $jsonLink, $editProductLink, $copyLink, $content
} = { ...CacheSelector.product, };

async function setProductData() {
	const loaderSelector = ".x-main__product--loading";
	let setProductAgain = true;

	getProductData((product) => {
		cleanNode($list);

		PRODUCT_KEYS_TO_SHOW.forEach((key) => {
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

		if (product?.productId) {
			toggleLoader(loaderSelector);
			createAndSetLinks([product]);
			setProductAgain = false;

			if ($content) $content.value = JSON.stringify(product, null, '\t');
		}
	});

	setTimeout(() => {
		if (setProductAgain) {
			dispatchProductData();
			setProductData();
		}
	}, 10000);
}

function createAndSetLinks([product]: Object[]) {
	const productId = (<any>product).productId;

	getVtexInfo((vtexInfo) => {
		if (!!vtexInfo) {
			const { accountName, account } = vtexInfo;

			const editProductURL = `https://${accountName || account}.myvtex.com/admin/Site/ProdutoForm.aspx?id=${productId}`;

			$editProductLink?.setAttribute('href', editProductURL);
		}
	});

	const jsonURL =
		'data:text/json;charset=utf-8,' +
		encodeURIComponent(JSON.stringify(product, null, '\t'));

	$jsonLink?.setAttribute('href', jsonURL);

	$jsonLink?.classList.add('is--active');
	$editProductLink?.classList.add('is--active');

	if ($content) {
		$copyLink?.addEventListener('click', (e) => {
			const $el = (<HTMLLinkElement>e?.target);

			$el.innerText = "Copied";
			copyToClipboard($content);
			setTimeout(() => {
				$el.innerText = "COPY TO CLIPBOARD";
			}, 2500)
		})
	}
}

function recreateProductContent() {
	const selectors = [
		"button[data-content='product']",
		".x-nav__menu-item[data-content='product']"
	].join(",");

	createClickListener(selectors, setProductData);
}

function init() {
	try {
		setProductData();
		recreateProductContent();
	} catch (err) {
		console.error(err)
	}
}

export default init;

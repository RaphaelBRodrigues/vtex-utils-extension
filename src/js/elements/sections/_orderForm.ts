import { OrderFormKeysToShow } from '@Constants';
import {
	getOrderForm, createCSV, cleanNode, copyToClipboard
} from '@Utils';
import CacheSelector from '../__cache-selector';

const {
	$list, $jsonLink, $csvLink
} = { ...CacheSelector.orderForm, };

async function setOrderForm() {
	getOrderForm((orderForm) => {
		cleanNode($list);

		OrderFormKeysToShow.forEach((key) => {
			if (typeof orderForm?.[key] === 'object') return;

			const $div = document.createElement('div');

			const $span = Object.assign(document.createElement('span'), { innerText: key, });

			const $inputWrapper = Object.assign(document.createElement('div'), { className: 'x-input__wrapper' });

			const $copyButton = Object.assign(document.createElement('button'), {
				innerText: 'Copy',
				onclick: ({ target }: any) => {
					const $currentInput = target.parentElement.querySelector('input');

					copyToClipboard($currentInput);

					target.innerHTML = 'Copied';

					setTimeout(() => {
						target.innerHTML = 'Copy';
					}, 2500);
				}
			});


			const $input = Object.assign(document.createElement('input'), {
				value: orderForm![key],
				disabled: true,
			});

			$inputWrapper.append($input);
			$inputWrapper.append($copyButton);

			$div.append($span);
			$div.append($inputWrapper);

			$list?.append($div);
		});

		if (orderForm) setDownloadLinks([orderForm]);
	});
}

function setDownloadLinks(orderForm: Object[]) {
	const csvContent = createCSV(orderForm);

	const csvURL =
    'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);

	const jsonURL =
    'data:text/json;charset=utf-8,' +
    encodeURIComponent(JSON.stringify(orderForm, null, '\t'));

	$jsonLink?.setAttribute('href', jsonURL);
	$csvLink?.setAttribute('href', csvURL);

	$jsonLink?.classList.add('is--active');
	$csvLink?.classList.add('is--active');
}

function init() {
	setOrderForm();
}

export default init;

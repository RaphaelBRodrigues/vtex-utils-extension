import {
	createCopyButton,
	cleanNode, getDeeplyProp, getVtexInfo
} from '@Utils';
import {
	StoreInfoKeys, StoreInfo, StoreKeysPath
} from '@Types';
import CacheSelector from '../__cache-selector';
import { STORE_KEYS_TO_SHOW } from '@Constants';

const {
	$list, $links
} = { ...CacheSelector.storeInfo, };


async function setStoreData() {
	getVtexInfo<StoreInfo>((vtexInfo) => {
		cleanNode($list);
		STORE_KEYS_TO_SHOW.forEach((key) => {
			if (!vtexInfo![key]) return;
			if (typeof vtexInfo![key] === 'object') {
				Object.values(StoreKeysPath).forEach((keyPath) => {
					const [value, label] = getDeeplyProp(vtexInfo![key], keyPath);
					const innerText = StoreInfoKeys[label as keyof object];
					value && createInputs(innerText, value);
				});
				return;
			}

			const innerText = StoreInfoKeys[key];
			const value = vtexInfo![key];

			createInputs(innerText, value);
		});

		if (vtexInfo) setLinks(vtexInfo);
	});
}

function createInputs(innerText: string, value: any) {
	const $div = document.createElement('div');

	const $span = Object.assign(document.createElement('span'), { innerText });

	const $inputWrapper = Object.assign(document.createElement('div'), { className: 'x-input__wrapper' });

	const $input = Object.assign(document.createElement('input'), {
		value,
		disabled: true,
		readonly: true,
	});


	$inputWrapper.append($input);
	$inputWrapper.append(createCopyButton());

	$div.append($span);
	$div.append($inputWrapper);

	$list?.append($div);
}

function setLinks({
	accountName, account
}: StoreInfo) {
	const URLs = {
		admin: `https://${accountName || account}.myvtex.com/admin`,
		masterdata: `https://${accountName || account}.vtexcrm.com.br`
	};
	[...$links].forEach(($link) => {
		const linkType = <'admin' | 'masterdata'>(
			$link.getAttribute('data-type')
		);
		$link.setAttribute('href', URLs[linkType]);
	});
}

function init() {
	try {
		setStoreData();
	} catch (err) {
		console.error(err)
	}
}

export default init;

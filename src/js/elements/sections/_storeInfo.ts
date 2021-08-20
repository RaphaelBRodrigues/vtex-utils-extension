import {
	cleanNode, getDeeplyProp, getVtexInfo
} from '@Utils';
import {
	StoreInfoKeys, StoreInfo, StoreKeysPath
} from '@Types';
import CacheSelector from '../__cache-selector';
import { StoreKeysToShow } from '@Constants';

const {
	$list, $links
} = { ...CacheSelector.storeInfo, };


async function setStoreData() {
	getVtexInfo((vtexInfo) => {
   	cleanNode($list);
 		StoreKeysToShow.forEach((key) => {
			 if (!vtexInfo![key]) return;


			 if(typeof vtexInfo![key] === 'object' ) {
				 Object.values(StoreKeysPath).forEach((keyPath) => {
					 const [value, label] = getDeeplyProp(vtexInfo![key], keyPath);
					const innerText = StoreInfoKeys[label as keyof object];
					 createInputs(innerText, value);
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

	const $input = Object.assign(document.createElement('input'), {
		value,
		disabled: true,
	});

	$div.append($span);
	$div.append($input);

	$list?.append($div);
}

function setLinks({
	accountName, account
}: StoreInfo) {
	const URLs = {
		admin: `https://${accountName || account}.myvtex.com/admin`,
		stable: `https://${accountName || account}.vtexcommercestable.com.br`,
		beta: `https://${accountName || account}.vtexcommercebeta.com.br`,
	};
	[...$links].forEach(($link) => {
		const linkType = <'admin' | 'stable' | 'beta'>(
      $link.getAttribute('data-type')
    );
		$link.setAttribute('href', URLs[linkType]);
	});
}

function init() {
	setStoreData();
}

export default init;

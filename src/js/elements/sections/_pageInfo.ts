import {
	createCopyButton,
	cleanNode, getDeeplyProp, getVtexInfo, stripURL, toggleLoader
} from '@Utils';
import {
	PageInfoKeys, PageInfo, PAGE_KEYS_PATH
} from '@Types';
import CacheSelector from '../__cache-selector';
import { PAGE_KEYS_TO_SHOW } from '@Constants';

const {
	$list, $links
} = { ...CacheSelector.pageInfo, };


async function setPageData() {
	getVtexInfo<PageInfo>((vtexInfo) => {
		cleanNode($list);
		if (vtexInfo) {
			PAGE_KEYS_TO_SHOW.forEach((key) => {
				if (key in PAGE_KEYS_PATH) {
					const pageKeyPath = (<any>PAGE_KEYS_PATH)[key];

					if (pageKeyPath) {
						const [value, label] = getDeeplyProp(vtexInfo, pageKeyPath);

						const innerText = PageInfoKeys[label as keyof object];
						value && createInputs(innerText, value);
					}
				} else {
					if (key in vtexInfo) {
						createInputs(PageInfoKeys[key], (<any>vtexInfo)[key]);
					}
				}
			});

		}
		if (vtexInfo) {
			const loaderSelector = ".x-main__page-info--loading";

			toggleLoader(loaderSelector);
			createAndSetLinks(vtexInfo);
		}
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

function createAndSetLinks(pageInfo: PageInfo) {
	const { accountName, account, url, route } = pageInfo;
	const { params = "", query = "" } = stripURL(url);

	if (route) {
		const { id } = route;

		const URLs = {
			pages: `https://${accountName || account}.myvtex.com/admin/cms/pages/${id}`,
			siteEditor: `https://${accountName || account}.myvtex.com/admin/cms/site-editor${params}${query}`
		};

		[...$links].forEach(($link) => {
			const linkType = <keyof typeof URLs>(
				$link.getAttribute('data-type')
			);
			$link.setAttribute('href', URLs[linkType]);
		});
	} else {
		[...$links].forEach(($link) => {
			$link.classList.add("disabled");
		})
	}

}

function init() {
	try {
		setPageData();
	} catch (err) {
		console.error(err)
	}
}

export default init;

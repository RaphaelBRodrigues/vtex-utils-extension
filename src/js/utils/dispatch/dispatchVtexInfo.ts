import runOnTab from '../runOnTab';

function dispatchVtexInfo() {
	runOnTab(() => {
		const html = document.documentElement.outerHTML;
		const cookies: any = document.cookie.split(';').reduce((obj, item) => {
			const [key, value] = item.split('=');

			return {
				...obj,
				[key.trim()]: value
			};
		}, {});

		if (!html.match(/(io.vtex.com.br|vtexassets)/)) {
			chrome.runtime.sendMessage({ action: 'isNotVTEX' });
			return;
		}
		const isDevEnviroment = !!window.location.href.match(/--/g);

		let plataformType = 'CMS';
		const SFJCondition = html.match(/gatsby/gi);

		if (isDevEnviroment) {
			plataformType = SFJCondition ? 'SJF' : 'IO';
		} else {
			plataformType =
				SFJCondition
					? 'SFJ'
					: cookies?.VtexWorkspace
						? 'IO'
						: plataformType;

		}


		const googleTagManagerContainerId = html.match(/GTM-(\d|\w)+/)?.[0];

		const vtexCommonInfoInfo = {
			googleTagManagerContainerId,
			url: window.location.href,
			cookies,
			plataformType
		};

		if (window.location.href.includes('checkout')) {
			const $scripts = [...document.querySelectorAll('script')];

			const $vtexInfoScript = $scripts.find(($item) => {

				return !!$item.outerHTML.match(/vtex.accountName/);
			});



			const vtexInfo: any = {
				...vtexCommonInfoInfo,
				account: $vtexInfoScript?.innerHTML.match(/(?<=vtex.accountName = ")(\w|\d)+/g)![0],
				plataformType: plataformType === 'IO' ? 'IO or SFJ' : 'CMS'
			};


			if (['SJF', 'IO'].includes(plataformType)) vtexInfo.workspace = decodeURIComponent(cookies?.VtexWorkspace);


			chrome.runtime.sendMessage({
				action: 'getVtexInfo',
				vtexInfo
			});
		} else {
			if (plataformType === 'SFJ') {
				const accountName = html.match(/(?<=https:\/\/)(\w|\d)+(?=\.vtexassets)/i)?.[0];

				chrome.runtime.sendMessage({
					action: 'getVtexInfo',
					vtexInfo: {
						...vtexCommonInfoInfo,
						accountName,
						plataformType: 'SFJ'
					},
				});
			} else {
				const matchVtexInfo =
					plataformType === 'IO'
						? /__RUNTIME__ ?= ?(?<vtexInfo>{.+)/gi
						: /vtex.events.addData(?<=)\((?<vtexInfo>\{.+\})/gi;

				const content = matchVtexInfo.exec(html)?.groups;

				if (!content?.vtexInfo) return;

				chrome.runtime.sendMessage({
					action: 'getVtexInfo',
					vtexInfo: {
						...JSON.parse(content?.vtexInfo),
						...vtexCommonInfoInfo,
					},
				});
			}
		}
	});
}

export default dispatchVtexInfo;

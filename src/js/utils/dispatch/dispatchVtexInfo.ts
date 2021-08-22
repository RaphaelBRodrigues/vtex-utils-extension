import runOnTab from '../runOnTab';

function dispatchVtexInfo() {
	runOnTab(() => {
		const html = document.documentElement.outerHTML;
		const $links = [...document.querySelectorAll('link')];
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

		const plataformType = html.match(/gatsby/gi) ? 'SFJ' : cookies?.VtexWorkspace ? 'IO' : 'CMS';

		const googleTagManagerContainerId = html.match(/GTM-(\d|\w)+/)![0];


		if(window.location.href.includes('checkout')) {
			const $scripts = [...document.querySelectorAll('script')];

			const $vtexInfoScript = $scripts.find(($item) => {

				return !!$item.outerHTML.match(/vtex.accountName/);
			});



			const vtexInfo: any = {
				account: $vtexInfoScript?.innerHTML.match(/(?<=vtex.accountName = ")(\w|\d)+/g)![0],
				googleTagManagerContainerId,
				cookies,
				url: window.location.href,
				plataformType: plataformType === 'IO' ? 'IO or SFJ' : 'CMS'
			};

			if(['SJF', 'IO'].includes(plataformType)) vtexInfo.workspace = decodeURIComponent(cookies?.VtexWorkspace);


			chrome.runtime.sendMessage({
				action: 'getVtexInfo',
				vtexInfo
			});
 		} else {
			 if(plataformType === 'SFJ') {
				 const accountName = html.match(/(?<=https:\/\/)(\w|\d)+(?=\.vtexassets)/i)?.[0];

				 chrome.runtime.sendMessage({
					action: 'getVtexInfo',
					vtexInfo: {
						cookies,
						accountName,
						url: window.location.href,
						googleTagManagerContainerId,
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

				const vtexInfo = JSON.parse(content?.vtexInfo);

				chrome.runtime.sendMessage({
					action: 'getVtexInfo',
					vtexInfo: {
						...vtexInfo,
						plataformType,
						cookies,
						url: window.location.href,
						googleTagManagerContainerId
					},
				});
			}
		}
	});
}

export default dispatchVtexInfo;

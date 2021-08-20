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

		if (!html.match(/io.vtex.com.br/)) {
			chrome.runtime.sendMessage({ action: 'isNotVTEX' });
			return;
		}



		if(window.location.href.includes('checkout')) {
			const $scripts = [...document.querySelectorAll('script')];

			const $vtexInfoScript = $scripts.find(($item) => {

				return !!$item.outerHTML.match(/vtex.accountName/);
			});

			const plataformType = cookies?.VtexWorkspace ? 'IO' : 'CMS';

			const vtexInfo: any = {
				googleTagManagerContainerId: $vtexInfoScript?.innerHTML.match(/GTM-(\d|\w)+/)![0],
				account: $vtexInfoScript?.innerHTML.match(/(?<=vtex.accountName = ")(\w|\d)+/g)![0],
				cookies,
				url: window.location.href,
				plataformType
			};

			if(plataformType === 'IO') vtexInfo.workspace = decodeURIComponent(cookies?.VtexWorkspace);


			chrome.runtime.sendMessage({
				action: 'getVtexInfo',
				vtexInfo
			});
 		} else {

			const plataformType = $links.some(($link) =>
				$link.href.match(/(\/pwa\/manifest.json)/g) || html.match(/vtex-store-components/),
			)
				? 'IO'
				: 'CMS';

			const matchVtexInfo =
      plataformType === 'IO'
      	? /__RUNTIME__ ?= ?(?<vtexInfo>{.+)/gi
      	: /vtex.events.addData(?<=)\((?<vtexInfo>\{.+\})/gi;

			const content = matchVtexInfo.exec(html)?.groups;

			if (!content?.vtexInfo) return;

			const vtexInfo = JSON.parse(content?.vtexInfo);
			const googleTagManagerContainerId = html.match(/GTM-(\d|\w)+/)![0];

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
	});
}

export default dispatchVtexInfo;

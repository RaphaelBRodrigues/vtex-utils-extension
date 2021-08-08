import { runOnTab } from '@Utils';

chrome.runtime.onMessage.addListener(({ action }) => {
	if (action === 'isNotVTEX') {
		updatingIcon(false);
	} else if (action === 'isVTEX') {
		updatingIcon(true);
	}
});

function isVTEX() {
	runOnTab(() => {
		const html = document.documentElement.outerHTML;
		if (html.match(/io.vtex.com.br/)) {
			chrome.runtime.sendMessage({ action: 'isVTEX' });
		} else {
			chrome.runtime.sendMessage({ action: 'isNotVTEX' });
		}
	});
}



function updatingIcon(isVTEX: boolean) {
	if (isVTEX) {
		chrome.action.setIcon({ path: {
			16: 'images/vtex-16x16.png',
			32: 'images/vtex-32x32.png',
			48: 'images/vtex-48x48.png',
			128: 'images/vtex-128x128.png',
		} });
	} else {
		chrome.action.setIcon({ path: {
			16: 'images/vtex-16x16_disabled.png',
			32: 'images/vtex-32x32_disabled.png',
			48: 'images/vtex-48x48_disabled.png',
			128: 'images/vtex-128x128_disabled.png',
		} });
	}
}

chrome.tabs.onUpdated.addListener(isVTEX);
chrome.tabs.onDetached.addListener(isVTEX);
chrome.tabs.onReplaced.addListener(isVTEX);
chrome.tabs.onActivated.addListener(isVTEX);
chrome.tabs.onAttached.addListener(isVTEX);
chrome.tabs.onCreated.addListener(isVTEX);

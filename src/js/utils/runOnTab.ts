import { Callback } from '@Types';
import currentTab from './currentTab';

function runOnTab(callback: Callback) {
	currentTab((tab) => {
		if (!tab?.id) return;

		chrome.scripting.executeScript({
			target: { tabId: tab.id, },
			function: callback,
		});
	});
}

export default runOnTab;

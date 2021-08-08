import { ChromeCurrentTabCallback } from '@Types';
/**
 * @param {function} callback - The function that the current tab will be passed as a param
 * @description Get current tab data
 */

function currentTab(callback: ChromeCurrentTabCallback): void {
	chrome.tabs.query(
		{ active: true, currentWindow: true },
		([tab]: chrome.tabs.Tab[]) => {
			if (!tab?.id) {
				currentTab(callback);
				return;
			}
			callback(tab);
		},
	);
}

export default currentTab;

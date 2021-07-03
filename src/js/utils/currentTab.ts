import { ChromeCurrentTabCallback } from '@Types';
/**
 * @param {function} callback - The function that the current tab will be passed as a param
 * @description Get current tab data
 */

function currentTab(callback: ChromeCurrentTabCallback): void {
  window.chrome.tabs.query(
    { active: true, currentWindow: true },
    (tabs: chrome.tabs.Tab[]) => {
      callback(tabs[0]);
    },
  );
}

export default currentTab;

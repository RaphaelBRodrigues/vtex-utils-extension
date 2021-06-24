import { ChromeTabQuery, ChromeCurrentTabCallback } from './types';

/**
 * @param {function} callback - The function that the current tab will be passed as a param
 * @description Get current tab data
 */

function currentTab<T>(callback: ChromeCurrentTabCallback): T {
  return window.chrome.tabs.query(
    { active: true, currentWindow: true },
    (tabs: ChromeTabQuery[]) => {
      return callback(tabs[0]);
    },
  );
}

export default currentTab;

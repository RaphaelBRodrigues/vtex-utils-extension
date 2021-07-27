import { Callback } from '@Types';
import currentTab from './currentTab';

function runOnTab(callback: Callback) {
  currentTab((tab) => {
    chrome.scripting.executeScript({
      target: {
        tabId: tab.id || 1,
      },
      function: callback,
    });
  });
}

export default runOnTab;

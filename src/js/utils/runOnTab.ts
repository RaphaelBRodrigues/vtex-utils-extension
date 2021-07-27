import currentTab from './currentTab';

type Callback = () => void;

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

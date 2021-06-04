/**
 * @param {function} callback - The function that the current tab will be passed as a param
 * @description Get current tab data
 */
function currentTab(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    callback(tabs[0]);
  });
}

export default currentTab;

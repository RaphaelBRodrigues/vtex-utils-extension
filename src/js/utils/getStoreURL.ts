import stripURL from './stripURL';
import currentTab from './currentTab';

/**
 * @returns {String} Store url
 */
function getStoreURL(): string {
  let storeURL = '';

  currentTab(({ url }: chrome.tabs.Tab) => {
    const { protocol = '', domain = '' } = stripURL(url);

    storeURL = `${protocol}://${domain}`;
  });

  return storeURL;
}

export default getStoreURL;

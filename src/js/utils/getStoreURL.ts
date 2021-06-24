import { ChromeTabQuery } from './types';
import stripURL from './stripURL';
import currentTab from './currentTab';

/**
 * @returns {String} Store url
 */
function getStoreURL() {
  const url = currentTab<string>((tab: ChromeTabQuery) => tab.url);

  const { protocol = '', domain = '' } = stripURL(url);

  return `${protocol}://${domain}`;
}

export default getStoreURL;

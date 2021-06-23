import stripURL from './stripURL';
import currentTab from './currentTab';

/**
 * @returns {String} Store url
 */
function getStoreURL() {
  const url = currentTab((tab) => tab.url);
  const { protocol, domain } = stripURL(url);
  return `${protocol}://${domain}`;
}

export default getStoreURL;

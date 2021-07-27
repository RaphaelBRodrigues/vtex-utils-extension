import stripURL from './stripURL';
import currentTab from './currentTab';

/**
 * @returns {String} Store url
 */
async function getStoreURL() {
  let storeURL = '';

  await new Promise((resolve) => {
    currentTab(({ url }) => {
      const { protocol = '', domain = '' } = stripURL(url);
      storeURL = `${protocol}://${domain}`;

      resolve(() => {});
    });
  });

  return storeURL;
}

export default getStoreURL;

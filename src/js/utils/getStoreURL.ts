import stripURL from './stripURL';
import currentTab from './currentTab';

/**
 * @returns {String} Store url
 */
async function getStoreURL() {
	const storeURL = await new Promise((resolve) => {
		currentTab(({ url }) => {
			const {
				protocol = '', domain = ''
			} = stripURL(url);

			resolve(`${protocol}://${domain}`);
		});
	});

	return storeURL;
}

export default getStoreURL;

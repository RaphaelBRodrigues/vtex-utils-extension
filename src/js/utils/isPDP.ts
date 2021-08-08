import currentTab from './currentTab';
import stripURL from './stripURL';

async function isPDP() {
	const isProductPage = await new Promise((resolve) => {
		currentTab(({ url }) => {
			const { params } = stripURL(url);
 			resolve(!!params?.match(/\/p$/)?.[0]);
		});
	});

	return isProductPage;
}

export default isPDP;

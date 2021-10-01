import runOnTab from '../runOnTab';

function dispatchProductData() {
	runOnTab(async () => {
		const productTextLink = window.location.pathname;

		if(!!productTextLink?.match(/\/p$/)?.[0]) {
			const resp = await fetch(
				`/api/catalog_system/pub/products/search${productTextLink}`,
			);
			
			const [product] = await resp.json();

			chrome.runtime.sendMessage({
				action: 'getProductData',
				product: {
					...product,
					productClusterIds: Object.keys(product?.productClusters)?.join(', ')
				},
			});
		}
	});
}

export default dispatchProductData;

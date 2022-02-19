import {
	Callback, ProductData
} from '@Types';
import dispatchProductData from '../dispatch/dispatchProductData';

function getProductData(callback: Callback<ProductData>) {
	chrome.runtime.onMessage.addListener(
		({
			action, product
		}: { action: string; product: ProductData }) => {
			if (action == 'getProductData') {
				callback(product);
			}
		},
	);

	dispatchProductData();
}

export default getProductData;

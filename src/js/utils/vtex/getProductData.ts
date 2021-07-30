import { Callback, ProductData } from '@Types';
import dispatchProductData from '../dispatch/dispatchProductData';

function getProductData(callback: Callback<ProductData>) {
  dispatchProductData();

  chrome.runtime.onMessage.addListener(
    ({ action, product }: { action: string; product: ProductData }) => {
      if (action == 'getProductData') {
        console.log({ product });
        callback(product);
      }
    },
  );
}

export default getProductData;

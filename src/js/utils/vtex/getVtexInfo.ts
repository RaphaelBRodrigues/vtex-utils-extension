import {
	Callback, StoreInfo
} from '@Types';
import dispatchVtexInfo from '../dispatch/dispatchVtexInfo';

function getVtexInfo(callback: Callback<StoreInfo>) {
	chrome.runtime.onMessage.addListener(
		({
			action, vtexInfo
		}: { action: string; vtexInfo: StoreInfo }) => {
			if (action === 'getVtexInfo') {
				console.log({ vtexInfo });
				callback(vtexInfo);
			}
		},
	);
	dispatchVtexInfo();
}

export default getVtexInfo;

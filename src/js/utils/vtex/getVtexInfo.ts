import {
	Callback
} from '@Types';
import dispatchVtexInfo from '../dispatch/dispatchVtexInfo';

function getVtexInfo<T>(callback: Callback<T>) {
	chrome.runtime.onMessage.addListener(
		({
			action, vtexInfo
		}: { action: string; vtexInfo: T }) => {
			if (action === 'getVtexInfo') {
				callback(vtexInfo);
			}
		},
	);

	dispatchVtexInfo();
}

export default getVtexInfo;

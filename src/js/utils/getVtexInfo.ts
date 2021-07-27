import { Callback, StoreInfo } from '@Types';
import dispatchVtexInfo from './dispatchVtexInfo';

function getVtexInfo(callback: Callback<StoreInfo>) {
  dispatchVtexInfo();

  chrome.runtime.onMessage.addListener(
    ({ action, vtexInfo }: { action: string; vtexInfo: StoreInfo }) => {
      if (action == 'getVtexInfo') {
        callback(vtexInfo);
      }
    },
  );
}

export default getVtexInfo;

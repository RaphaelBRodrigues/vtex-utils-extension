import { Callback, StoreInfo } from '@Types';
import triggerGetVtexInfo from './triggerGetVtexInfo';

function getVtexInfo(callback: Callback<StoreInfo>) {
  triggerGetVtexInfo();

  chrome.runtime.onMessage.addListener(
    ({ action, vtexInfo }: { action: string; vtexInfo: StoreInfo }) => {
      if (action == 'getVtexInfo') {
        callback(vtexInfo);
      }
    },
  );
}

export default getVtexInfo;

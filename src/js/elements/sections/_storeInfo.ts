import { isPDP, runOnTab } from '@Utils';
import { StoreInfoKeys, StoreInfoKeysT, StoreInfo } from '@Types';
import CacheSelector from '../__cache-selector';
import { keysToShow } from '@Constants';

const { $list } = {
  ...CacheSelector.storeInfo,
};

chrome.runtime.onMessage.addListener(function ({
  action,
  vtexInfo,
}: {
  action: string;
  vtexInfo: StoreInfo;
}) {
  if (action == 'getVtexInfo') {
    keysToShow.forEach((key) => {
      const $div = document.createElement('div');

      const $span = Object.assign(document.createElement('span'), {
        innerText: StoreInfoKeys[key],
      });

      const $input = Object.assign(document.createElement('input'), {
        value: vtexInfo[key],
        disabled: true,
      });

      $div.append($span);
      $div.append($input);

      $list?.append($div);
    });
  }
});

async function setStoreData() {
  if (await isPDP()) {
    runOnTab(() => {
      const html = document.documentElement.outerHTML;
      console.clear();
      const matchData = /vtex.events.addData(?<=)\((?<vtexInfo>\{.+\})/gi;

      const content = matchData.exec(html)?.groups;

      if (!content?.vtexInfo) return;

      const vtexInfo = JSON.parse(content.vtexInfo);

      chrome.runtime.sendMessage({
        action: 'getVtexInfo',
        vtexInfo: {
          ...vtexInfo,
          url: window.location.href,
        },
      });
    });
  }
}

function init() {
  setStoreData();
}

export default init;

import { getVtexInfo } from '@Utils';
import { StoreInfoKeys, StoreInfo } from '@Types';
import CacheSelector from '../__cache-selector';
import { keysToShow } from '@Constants';

const { $list } = {
  ...CacheSelector.storeInfo,
};

async function setStoreData() {
  getVtexInfo((vtexInfo) => {
    keysToShow.forEach((key) => {
      if (!vtexInfo![key]) return;
      const $div = document.createElement('div');

      const $span = Object.assign(document.createElement('span'), {
        innerText: StoreInfoKeys[key],
      });

      const $input = Object.assign(document.createElement('input'), {
        value: vtexInfo![key],
        disabled: true,
      });

      $div.append($span);
      $div.append($input);

      $list?.append($div);
    });
  });
}

function init() {
  setStoreData();
}

export default init;

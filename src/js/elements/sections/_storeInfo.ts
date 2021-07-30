import { cleanNode, getVtexInfo } from '@Utils';
import { StoreInfoKeys, StoreInfo } from '@Types';
import CacheSelector from '../__cache-selector';
import { StoreKeysToShow } from '@Constants';

const { $list, $links } = {
  ...CacheSelector.storeInfo,
};

async function setStoreData() {
  getVtexInfo((vtexInfo) => {
    cleanNode($list);

    StoreKeysToShow.forEach((key) => {
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

    if (!!vtexInfo) setLinks(vtexInfo);
  });
}

function setLinks({ accountName, account }: StoreInfo) {
  const URLs = {
    admin: `https://${accountName || account}.myvtex.com/admin`,
    stable: `https://${accountName || account}.vtexcommercestable.com.br`,
    beta: `https://${accountName || account}.vtexcommercebeta.com.br`,
  };
  [...$links].forEach(($link) => {
    const linkType = <'admin' | 'stable' | 'beta'>(
      $link.getAttribute('data-type')
    );
    $link.setAttribute('href', URLs[linkType]);
  });
}

function init() {
  setStoreData();
}

export default init;

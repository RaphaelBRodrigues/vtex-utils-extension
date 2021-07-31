import { OrderFormKeysToShow } from '@Constants';
import { getOrderForm, createCSV, cleanNode } from '@Utils';
import CacheSelector from '../__cache-selector';

const { $list, $jsonLink, $csvLink } = {
  ...CacheSelector.orderForm,
};

async function setOrderForm() {
  getOrderForm((orderForm) => {
    cleanNode($list);

    OrderFormKeysToShow.forEach((key) => {
      if (typeof orderForm?.[key] === 'object') return;

      const $div = document.createElement('div');

      const $span = Object.assign(document.createElement('span'), {
        innerText: key,
      });

      const $input = Object.assign(document.createElement('input'), {
        value: orderForm![key],
        disabled: true,
      });

      $div.append($span);
      $div.append($input);

      $list?.append($div);
    });

    if (!!orderForm) setDownloadLinks([orderForm]);
  });
}

function setDownloadLinks(orderForm: Object[]) {
  const csvContent = createCSV(orderForm);

  const csvURL =
    'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);

  const jsonURL =
    'data:text/json;charset=utf-8,' +
    encodeURIComponent(JSON.stringify(orderForm, null, '\t'));

  $jsonLink?.setAttribute('href', jsonURL);
  $csvLink?.setAttribute('href', csvURL);

  $jsonLink?.classList.add('is--active');
  $csvLink?.classList.add('is--active');
}

function init() {
  setOrderForm();
}

export default init;
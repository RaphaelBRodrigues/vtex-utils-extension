import CacheSelector from '../__cache-selector';
import { getStoreURL } from '@Utils';

const { $button, $endpointInput } = {
  ...CacheSelector.customFetch,
};

function submitRequest() {
  $button?.addEventListener('click', async () => {
    const endpoint = $endpointInput.value;
    const url = endpoint ?? getStoreURL();
    const options = {
      method: 'GET',
      body: JSON.stringify({}),
    };
    const resp = await fetch(url, options);
    const json = await resp.json();
    console.log({ url, json });
  });
}

function init() {
  submitRequest();
}

export default init;

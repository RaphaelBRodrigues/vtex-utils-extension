import CacheSelector from '../__cache-selector';
import { getStoreURL } from '@Utils';

const { $button, $endpointInput, $methodsRadios, $error, $result } = {
  ...CacheSelector.customFetch,
};

function submitRequest() {
  $button?.addEventListener('click', (async (e) => {
    const method =
      (<HTMLButtonElement>e?.target).getAttribute('data-method') || 'GET';
    const endpoint = $endpointInput.value;
    const url = endpoint ?? getStoreURL();

    const options: RequestInit = {
      method,
    };

    if (method !== 'GET') {
      options.body = JSON.stringify({});
    }

    try {
      const resp = await fetch(url, options);
      const json = await resp.json();
      $error?.classList.remove('is--active');

      if (Array.isArray(json)) {
        showResult(json);
      } else {
        showResult([json]);
      }
    } catch {
      $error?.classList.add('is--active');
    }
  }) as EventListener);
}

function showResult(responseList: Array<Object>) {
  responseList.forEach((response) => {
    const $details = Object.assign(document.createElement('details'), {
      open: true,
    });
    const $summary = document.createElement('summary');

    if (responseList.length === 1) {
      $summary.innerText = 'Response';

      Object.keys(response).forEach((key: string) => {
        const $key = Object.assign(document.createElement('p'), {
          innerHTML: `<span>${key}</span>: <input disabled value="${
            (<any>response)[key]
          }" />`,
        });
        $details.append($key);
      });

      $details.append($summary);
      $result?.append($details);
    } else {
      console.log(response);
    }
  });
}

function changeMethod() {
  [...$methodsRadios].forEach(($methodRadio) => {
    $methodRadio.addEventListener('click', ((e) => {
      const method = (<HTMLInputElement>e.target).value;

      $button?.setAttribute('data-method', method);
    }) as EventListener);
  });
}
function init() {
  submitRequest();
  changeMethod();
}

export default init;

import CacheSelector from '../__cache-selector';
import { stripURL } from '@Utils';

const {
  $button,
  $endpointInput,
  $methodsRadios,
  $error,
  $result,
  $bodyInput,
  $bodyLabel,
  $jsonLink,
  $csvLink,
} = {
  ...CacheSelector.customFetch,
};

function submitRequest() {
  $button?.addEventListener('click', (async (e) => {
    const method =
      (<HTMLButtonElement>e?.target).getAttribute('data-method') || 'GET';
    const endpoint = $endpointInput.value;

    const { protocol = '', domain, params, query = '' } = stripURL(endpoint);

    console.log({ query });
    const url = !!domain
      ? `${protocol}://${domain}${params}${query}`
      : endpoint;

    const options: RequestInit = {
      method,
    };

    if (!['GET', 'DELETE'].includes(method)) options.body = $bodyInput.value;

    try {
      const resp = await fetch(url, options);
      const json = await resp.json();
      $error?.classList.remove('is--active');

      const result = Array.isArray(json) ? json : [json];

      if ($result) $result.innerHTML = '';
      renderResult(result);
      setDownloadButtons(result);

      if (!resp.ok) throw new Error('Error on fetching');
    } catch {
      if ($result) $result.innerHTML = '';
      $error?.classList.add('is--active');
    }
  }) as EventListener);
}

function renderResult(
  responseList: Array<Object>,
  $elementList = $result,
  label = 'Response',
  open = true,
) {
  responseList.forEach((response) => {
    const $details = Object.assign(document.createElement('details'), {
      open,
    });
    const $summary = document.createElement('summary');

    if (responseList.length !== 0 && $elementList) {
      $summary.innerText = label;

      Object.keys(response).forEach((key: string) => {
        const value = (<any>response)[key];
        const isObject = typeof value === 'object';

        if (isObject) {
          const result = Array.isArray(value) ? value : [value];
          renderResult(result, $details, key, false);
        } else {
          const $key = Object.assign(document.createElement('p'), {
            innerHTML: `<span>${key}</span>: <input disabled value="${
              (<any>response)[key]
            }" />`,
          });
          $details.append($key);
        }
      });

      $details.append($summary);
      $elementList.append($details);
    } else {
      console.log(response);
    }
  });
}

function setDownloadButtons(result: Object[]) {
  var jsonURL =
    'data:text/json;charset=utf-8,' +
    encodeURIComponent(JSON.stringify(result));
  let csvURL = '';

  if (typeof result[0] === 'object') {
    const csvHeader = Object.keys(result[0]).join(',');
    const csvBody = result
      .map((item) => {
        return Object.values(item)
          .map((value) => {
            return JSON.stringify(value);
          })
          .join(',');
      })
      .join('\n');

    const csvContent = `${csvHeader}\n${csvBody}`;

    csvURL = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
  }

  $jsonLink?.setAttribute('href', jsonURL);
  $csvLink?.setAttribute('href', csvURL);

  $jsonLink?.classList.add('is--active');
  $csvLink?.classList.add('is--active');
}

function changeMethod() {
  [...$methodsRadios].forEach(($methodRadio) => {
    $methodRadio.addEventListener('click', ((e) => {
      const method = (<HTMLInputElement>e.target).value;

      const showBodyTextArea = ['POST', 'PUT', 'PATCH'].includes(method);

      if (showBodyTextArea) {
        $bodyLabel.classList.add('is--active');
      } else {
        $bodyLabel.classList.remove('is--active');
      }

      $button?.setAttribute('data-method', method);
    }) as EventListener);
  });
}
function init() {
  submitRequest();
  changeMethod();
}

export default init;

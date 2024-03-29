import CacheSelector from '../__cache-selector';
import {
	createCopyButton,
	createCSV, stripURL
} from '@Utils';

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
} = { ...CacheSelector.customFetch, };

function submitRequest() {
	$button?.addEventListener('click', (async (e) => {
		const method =
			(<HTMLButtonElement>e?.target).getAttribute('data-method') || 'GET';
		const endpoint = $endpointInput.value;

		const {
			protocol = '', domain, params, query = ''
		} = stripURL(endpoint);

		const url = domain
			? `${protocol}://${domain}${params}${query}`
			: endpoint;

		const options: RequestInit = { method, };

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
		const $details = Object.assign(document.createElement('details'), { open, });
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
					const $key = Object.assign(document.createElement('div'), {
						innerHTML: `<span>${key}</span>: <div class="x-input__wrapper"> <input  readonly disabled value="${(<any>response)[key]
							}" /></div>`,
					});
					$key.querySelector('div')?.append(createCopyButton());
					$details.append($key);
				}
			});

			$details.append($summary);
			$elementList.append($details);
		} else {
			console.warn(response);
		}
	});
}

function setDownloadButtons(result: Object[]) {
	const jsonURL =
		'data:text/json;charset=utf-8,' +
		encodeURIComponent(JSON.stringify(result, null, '\t'));

	if (typeof result[0] === 'object') {
		const csvContent = createCSV(result);

		const csvURL =
			'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);

		$csvLink?.setAttribute('href', csvURL);
	}

	$jsonLink?.setAttribute('href', jsonURL);

	$jsonLink?.classList.add('is--active');
	$csvLink?.classList.add('is--active');
}

function changeMethod() {
	[...$methodsRadios].forEach(($methodRadio) => {
		$methodRadio.addEventListener('click', ((e) => {
			const method = (<HTMLInputElement>e.target).value;
			const METHODS = ['POST', 'PUT', 'PATCH'];

			const showBodyTextArea = METHODS.includes(method);

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
	try {
		submitRequest();
		changeMethod();
	} catch (err) {
		console.error(err)
	}
}

export default init;

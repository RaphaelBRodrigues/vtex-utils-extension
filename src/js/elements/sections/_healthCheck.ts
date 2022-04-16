// VTEX Health Check API is blocking the request because of CORS policy

import { VTEX_HEALTH_CHECK_URL } from '@Constants';
import CacheSelector from '../__cache-selector';

const {
	$error_status,
	$regular_status
} = CacheSelector.healthCheck;


async function checkIfVTEXIsHealthy() {
	const pageContent = await (await fetch(VTEX_HEALTH_CHECK_URL)).text();
	console.log(pageContent);
	return !pageContent.match(/unhealthy/ig);
}

async function displayStatus() {
	const isHealthy = await checkIfVTEXIsHealthy();

	if (isHealthy) {
		$regular_status?.classList.add('is--active');
	} else {
		$error_status?.classList.add('is--active');
	}
}


function init() {
	displayStatus();
}


export default init;
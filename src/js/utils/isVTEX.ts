import dispatchVtexInfo from './dispatch/dispatchVtexInfo';

async function isVTEX() {
	const isVTEX = await new Promise((resolve) => {
		dispatchVtexInfo();
		chrome.runtime.onMessage.addListener(({ action }) => {
			if (action === 'isNotVTEX') {
				resolve(false);
			}
			resolve(true);
		});
	});
	return isVTEX;
}

export default isVTEX;
import CacheSelector from '../__cache-selector';
import {
	setCookie, currentTab, stripURL
} from '@Utils';

const {
	$input, $button
} = { ...CacheSelector.localLogin };

function bindLoginButton() {
	$button?.addEventListener('click', () => {
		const token = $input.value;
		login(token);
	});
}

function login(token: string) {
	currentTab((tab) => {
		const stripedURL = stripURL(tab.url);
		const rootURL = `${stripedURL.protocol}://${stripedURL.domain}`;

		setCookie({
			url: rootURL,
			value: token,
			name: 'VtexIdclientAutCookie',
		});

		chrome.tabs.reload();
	});
}

function init() {
	try {
		bindLoginButton();
	} catch (err) {
		console.error(err)
	}
}

export default init;

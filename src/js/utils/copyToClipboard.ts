export function copyToClipboard($input: HTMLInputElement) {
	$input.disabled = false;

	$input.focus();
	$input.select();
	document.execCommand('copy');

	$input.disabled = true;
}


export const createCopyButton = () => Object.assign(document.createElement('button'), {
	innerText: 'Copy',
	onclick: ({ target }: any) => {
		const $currentInput = target.parentElement.querySelector('input');

		copyToClipboard($currentInput);

		target.innerHTML = 'Copied';

		setTimeout(() => {
			target.innerHTML = 'Copy';
		}, 2500);
	}
});
function copyToClipboard($input: HTMLInputElement) {
	$input.disabled = false;

	$input.focus();
	$input.select();
	document.execCommand('copy');

	$input.disabled = true;
}

export default copyToClipboard;
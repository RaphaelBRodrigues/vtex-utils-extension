const CacheSelector = {
	header: { $menuButton: document.querySelector('.x-header__right--menu-button'), },
	menu: {
		$menu: document.querySelector<HTMLDivElement>('.x-nav'),
		$menuItems: document.querySelectorAll(
			'.x-nav__menu-item:not([data-disabled])',
		),
	},
	initial: { $buttons: document.querySelectorAll('.x-main__initial button'), },
	localLogin: {
		$input: <HTMLInputElement>(
			document.querySelector('.x-main__local-login input')
		),
		$button: document.querySelector('.x-main__local-login button'),
	},
	customFetch: {
		$methodsRadios: document.querySelectorAll<HTMLInputElement>(
			'.x-main__custom-fetch input[name="methods"]',
		),
		$bodyLabel: document.querySelectorAll<HTMLInputElement>(
			'.x-main__custom-fetch > label',
		)[1],
		$endpointInput: <HTMLInputElement>(
			document.querySelector('.x-main__custom-fetch input[name="endpoint"]')
		),
		$bodyInput: <HTMLTextAreaElement>(
			document.querySelector('.x-main__custom-fetch textarea[name="body"]')
		),
		$queryInput: <HTMLInputElement>(
			document.querySelector('.x-main__custom-fetch input[name="query"]')
		),
		$error: document.querySelector('.x-main__custom-fetch--error'),
		$result: document.querySelector('.x-main__custom-fetch--result'),
		$button: document.querySelector('.x-main__custom-fetch button'),
		$csvLink: document.querySelector(
			'.x-main__custom-fetch a[data-type="csv"]',
		),
		$jsonLink: document.querySelector(
			'.x-main__custom-fetch a[data-type="json"]',
		),
	},
	storeInfo: {
		$list: document.querySelector('.x-main__store-info--list'),
		$links: document.querySelectorAll(
			'.x-main__store-info--links a[data-type]',
		),
	},
	orderForm: {
		$content: document.querySelector<HTMLInputElement>('.x-main__orderForm--raw-content'),
		$addToCartURL: document.querySelector<HTMLInputElement>('.x-main__orderForm--addToCartURL'),
		$list: document.querySelector('.x-main__orderForm--items'),
		$links: document.querySelectorAll(
			'.x-main__orderForm--links a[data-type]',
		),
		$csvLink: document.querySelector(
			'.x-main__orderForm--links a[data-type="csv"]',
		),
		$consoleLink: document.querySelector(
			'.x-main__orderForm--links a[data-type="console"]',
		),
		$copyJsonLink: document.querySelector(
			'.x-main__orderForm--links a[data-type="copy"]',
		),
		$copyAddToCartLink: document.querySelector(
			'.x-main__orderForm--links a[data-type="addToCart"]',
		),
		$jsonLink: document.querySelector(
			'.x-main__orderForm--links a[data-type="json"]',
		),
	},
	product: {
		$content: document.querySelector<HTMLInputElement>('.x-main__product--raw-content'),
		$list: document.querySelector('.x-main__product--result'),
		$links: document.querySelectorAll(
			'.x-main__orderForm--download a[data-type]',
		),
		$editProductLink: document.querySelector(
			'.x-main__product--download a[data-type="edit"]',
		),
		$jsonLink: document.querySelector(
			'.x-main__product--download a[data-type="json"]',
		),
		$copyLink: document.querySelector(
			'.x-main__product--download a[data-type="copy"]',
		)
	},
	vtexAPI: { $list: document.querySelector('.x-main__vtex-api--list'), },
};

export default CacheSelector;

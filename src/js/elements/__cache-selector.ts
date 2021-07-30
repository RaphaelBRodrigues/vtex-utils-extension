const CacheSelector = {
  header: {
    $menuButton: document.querySelector('.x-header__right--menu-button'),
  },
  menu: {
    $menu: document.querySelector<HTMLDivElement>('.x-nav'),
    $menuItems: document.querySelectorAll(
      '.x-nav__menu-item:not([data-disabled])',
    ),
  },
  initial: {
    $buttons: document.querySelectorAll('.x-main__initial button'),
  },
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
    $list: document.querySelector('.x-main__orderForm--items'),
    $links: document.querySelectorAll(
      '.x-main__orderForm--download a[data-type]',
    ),
    $csvLink: document.querySelector(
      '.x-main__orderForm--download a[data-type="csv"]',
    ),
    $jsonLink: document.querySelector(
      '.x-main__orderForm--download a[data-type="json"]',
    ),
  },
  product: {
    $list: document.querySelector('.x-main__product--result'),
    $links: document.querySelectorAll(
      '.x-main__orderForm--download a[data-type]',
    ),
    $csvLink: document.querySelector(
      '.x-main__product--download a[data-type="csv"]',
    ),
    $jsonLink: document.querySelector(
      '.x-main__product--download a[data-type="json"]',
    ),
  },
};

export default CacheSelector;

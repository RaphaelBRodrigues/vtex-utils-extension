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
    $endpointInput: <HTMLInputElement>(
      document.querySelector('.x-main__custom-fetch input[name="endpoint"]')
    ),
    $bodyInput: <HTMLInputElement>(
      document.querySelector('.x-main__custom-fetch input[name="body"]')
    ),
    $queryInput: <HTMLInputElement>(
      document.querySelector('.x-main__custom-fetch input[name="query"]')
    ),
    $error: document.querySelector('.x-main__custom-fetch--error'),
    $result: document.querySelector('.x-main__custom-fetch--result'),
    $button: document.querySelector('.x-main__custom-fetch button'),
  },
};

export default CacheSelector;

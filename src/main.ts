import './main.scss';
import init from './js/index';

declare global {
  interface Window {
    chrome: any;
  }
}

document.addEventListener('DOMContentLoaded', init);

import runOnTab from '../runOnTab';

function dispatchOrderForm() {
  runOnTab(async () => {
    if (!document.documentElement.outerHTML.match(/io.vtex.com.br/)) {
      chrome.runtime.sendMessage({ action: "isNotVTEX" })
      return;
    }
    const resp = await fetch('/api/checkout/pub/orderForm');
    const orderForm = await resp.json();

    if (!orderForm) return;

    chrome.runtime.sendMessage({
      action: 'getOrderForm',
      orderForm,
    });

  });
}

export default dispatchOrderForm;

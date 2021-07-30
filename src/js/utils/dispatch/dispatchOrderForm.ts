import runOnTab from '../runOnTab';

function dispatchOrderForm() {
  runOnTab(async () => {
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

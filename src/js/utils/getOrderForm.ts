import { Callback, OrderForm } from '@Types';
import dispatchOrderForm from './dispatch/dispatchOrderForm';

function getOrderForm(callback: Callback<OrderForm>) {
  dispatchOrderForm();

  chrome.runtime.onMessage.addListener(
    ({ action, orderForm }: { action: string; orderForm: OrderForm }) => {
      if (action == 'getOrderForm') {
        callback(orderForm);
      }
    },
  );
}

export default getOrderForm;

import {
	Callback, OrderForm
} from '@Types';
import dispatchOrderForm from '../dispatch/dispatchOrderForm';

function getOrderForm(callback: Callback<OrderForm>) {
	chrome.runtime.onMessage.addListener(
		({
			action, orderForm
		}: { action: string; orderForm: OrderForm }) => {
			if (action == 'getOrderForm') {
				callback(orderForm);
			}
		},
	);

	dispatchOrderForm();
}

export default getOrderForm;

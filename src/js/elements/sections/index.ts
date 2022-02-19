import Initial from './_initial';
import LocalLogin from './_localLogin';
import CustomFetch from './_customFetch';
import StoreInfo from './_storeInfo';
import OrderForm from './_orderForm';
import Product from './_product';
import PageInfo from './_pageInfo';

function init() {
	Initial();
	LocalLogin();
	CustomFetch();
	StoreInfo();
	OrderForm();
	Product();
	PageInfo();
}

export default init;

import Initial from './_initial';
import LocalLogin from './_localLogin';
import CustomFetch from './_customFetch';
import StoreInfo from './_storeInfo';
import OrderForm from './_orderForm';
import Product from './_product';
import PageInfo from './_pageInfo';
import HealthCheck from './_healthCheck';

function init() {
	Initial();
	LocalLogin();
	CustomFetch();
	StoreInfo();
	OrderForm();
	Product();
	PageInfo();
	HealthCheck();
}

export default init;

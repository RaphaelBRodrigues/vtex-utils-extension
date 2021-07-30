import Initial from './_initial';
import LocalLogin from './_localLogin';
import CustomFetch from './_customFetch';
import StoreInfo from './_storeInfo';
import OrderForm from './_orderForm';

function init() {
  Initial();
  LocalLogin();
  CustomFetch();
  StoreInfo();
  OrderForm();
}

export default init;

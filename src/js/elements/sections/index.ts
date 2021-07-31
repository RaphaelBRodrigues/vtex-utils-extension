import Initial from './_initial';
import LocalLogin from './_localLogin';
import CustomFetch from './_customFetch';
import StoreInfo from './_storeInfo';
import OrderForm from './_orderForm';
import Product from './_product';
import VtexAPI from './_vtexAPI';

function init() {
  Initial();
  LocalLogin();
  CustomFetch();
  StoreInfo();
  OrderForm();
  Product();
  VtexAPI();
}

export default init;

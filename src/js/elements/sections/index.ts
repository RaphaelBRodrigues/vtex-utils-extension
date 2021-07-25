import Initial from './_initial';
import LocalLogin from './_localLogin';
import CustomFetch from './_customFetch';
import StoreInfo from './_storeInfo';

function init() {
  Initial();
  LocalLogin();
  CustomFetch();
  StoreInfo();
}

export default init;

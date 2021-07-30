export enum StoreInfoKeys {
  accountName = 'Nome da Conta',
  account = 'Nome da Conta',
  url = 'URL da Página',
  productBrandName = 'Nome da marca',
  sellerId = 'Seller ID',
  plataformType = 'Tipo',
  workspace = 'Workspace',
}

export type StoreInfoKeysT =
  | 'accountName'
  | 'account'
  | 'url'
  | 'productBrandName'
  | 'plataformType'
  | 'workspace'
  | 'sellerId';

export type StoreInfo = {
  accountName: string;
  account: string;
  url: string;
  productBrandName: string;
  sellerId: string;
  plataformType: string;
  workspace: string;
};

export enum OrderFormKeys {
  orderFormId = '',
  salesChannel = '',
  loggedIn = '',
  isCheckedIn = '',
  storeId = '',
  checkedInPickupPointId = '',
  allowManualPrice = '',
  canEditData = '',
  userProfileId = '',
  userType = '',
  ignoreProfileData = '',
  value = '',
  messages = '',
  items = '',
  selectableGifts = '',
  totalizers = '',
  shippingData = '',
  clientProfileData = '',
  paymentData = '',
  marketingData = '',
  sellers = '',
  clientPreferencesData = '',
  commercialConditionData = '',
  storePreferencesData = '',
  giftRegistryData = '',
  openTextField = '',
  invoiceData = '',
  customData = '',
  itemMetadata = '',
  hooksData = '',
  ratesAndBenefitsData = '',
  subscriptionData = '',
  itemsOrdination = '',
}

export type OrderFormKeysT =
  | 'orderFormId'
  | 'salesChannel'
  | 'loggedIn'
  | 'isCheckedIn'
  | 'storeId'
  | 'checkedInPickupPointId'
  | 'allowManualPrice'
  | 'canEditData'
  | 'userProfileId'
  | 'userType'
  | 'ignoreProfileData'
  | 'value'
  | 'messages'
  | 'items'
  | 'selectableGifts'
  | 'totalizers'
  | 'shippingData'
  | 'clientProfileData'
  | 'paymentData'
  | 'marketingData'
  | 'sellers'
  | 'clientPreferencesData'
  | 'commercialConditionData'
  | 'storePreferencesData'
  | 'giftRegistryData'
  | 'openTextField'
  | 'invoiceData'
  | 'customData'
  | 'itemMetadata'
  | 'hooksData'
  | 'ratesAndBenefitsData'
  | 'subscriptionData'
  | 'itemsOrdination';

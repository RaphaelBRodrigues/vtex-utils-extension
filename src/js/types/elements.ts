/* eslint-disable no-unused-vars */
export enum StoreInfoKeys {
  accountName = 'Account Name',
  account = 'Account Name',
  storeName = 'Store Name',
  url = 'Page URL',
  productBrandName = 'Brand Name',
  googleTagManagerContainerId = 'Tag Manager Container ID',
  sellerId = 'Seller ID',
  plataformType = 'Plataform Type',
  settings = 'Settings',
  workspace = 'Workspace',
}

export enum StoreKeysPath {
  storeName = '(settings){vtex.store}{storeName}'
}


export type StoreInfoKeysT =
  | 'accountName'
  | 'account'
  | 'url'
  | 'productBrandName'
  | 'plataformType'
  | 'workspace'
  | 'googleTagManagerContainerId'
  | 'storeName'
  | 'settings'
  | 'sellerId';

export enum PageInfoKeys {
  accountName = 'Account Name',
  account = 'Account Name',
  storeName = 'Store Name',
  url = 'Page URL',
  productBrandName = 'Brand Name',
  googleTagManagerContainerId = 'Tag Manager Container ID',
  sellerId = 'Seller ID',
  plataformType = 'Plataform Type',
  settings = 'Settings',
  workspace = 'Workspace',
}

export enum PageKeysPath {
  storeName = '(settings){vtex.store}{storeName}'
}

export type PageInfoKeysT =
  | 'accountName'
  | 'account'
  | 'url'
  | 'productBrandName'
  | 'plataformType'
  | 'workspace'
  | 'googleTagManagerContainerId'
  | 'storeName'
  | 'settings'
  | 'sellerId';

export type StoreInfo = {
  accountName: string;
  account: string;
  url: string;
  settings: {
    'vtex.store': {
      storeName: string
    }
  };
  storeName: string;
  productBrandName: string;
  googleTagManagerContainerId: string;
  sellerId: string;
  plataformType: string;
  workspace: string;
};

export type PageInfo = {
  accountName: string;
  account: string;
  url: string;
  settings: {
    'vtex.store': {
      storeName: string
    }
  };
  storeName: string;
  productBrandName: string;
  googleTagManagerContainerId: string;
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

export enum ProductKeys {
  productId = 'Product ID',
  productName = 'Product Name',
  productReference = 'Reference Code',
  categoryId = 'Category ID',
  productClusterIds = 'Product Cluster IDs',
}

export type ProductKeysT =
  | 'productId'
  | 'productName'
  | 'productReference'
  | 'productClusterIds'
  | 'categoryId';

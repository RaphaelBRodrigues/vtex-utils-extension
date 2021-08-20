/* eslint-disable no-unused-vars */
export enum StoreInfoKeys {
  accountName = 'Nome da conta',
  account = 'Nome da conta',
  storeName = 'Nome da loja',
  url = 'URL da Página',
  productBrandName = 'Nome da marca',
  googleTagManagerContainerId = 'ID do GTM',
  sellerId = 'Seller ID',
  plataformType = 'Versão',
  settings = 'Configuração',
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
  productId = 'Id do Produto',
  productName = 'Nome do Produto',
  productReference = 'Código de Referência do Produto',
  categoryId = 'Id da Categoria',
}

export type ProductKeysT =
  | 'productId'
  | 'productName'
  | 'productReference'
  | 'categoryId';

export enum StoreInfoKeys {
  accountName = 'Nome da Conta',
  account = 'Nome da Conta',
  url = 'URL da Página',
  productBrandName = 'Nome da marca',
  sellerId = 'Seller ID',
  plataformType = 'Tipo',
}

export type StoreInfoKeysT =
  | 'accountName'
  | 'account'
  | 'url'
  | 'productBrandName'
  | 'plataformType'
  | 'sellerId';

export type StoreInfo = {
  accountName: string;
  account: string;
  url: string;
  productBrandName: string;
  sellerId: string;
  plataformType: string;
};

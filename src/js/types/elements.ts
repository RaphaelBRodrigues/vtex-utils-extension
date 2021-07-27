export enum StoreInfoKeys {
  accountName = 'Nome da Conta',
  pageUrl = 'URL da Página',
  productBrandName = 'Nome da marca',
  sellerId = 'Seller ID',
}

export type StoreInfoKeysT =
  | 'accountName'
  | 'pageUrl'
  | 'productBrandName'
  | 'sellerId';

export type StoreInfo = {
  accountName: string;
  pageUrl: string;
  productBrandName: string;
  sellerId: string;
};

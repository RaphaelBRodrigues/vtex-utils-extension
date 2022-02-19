import {
	ProductKeysT, OrderFormKeysT, StoreInfoKeysT, PageInfoKeysT
} from '@Types';


export const STORE_KEYS_TO_SHOW: StoreInfoKeysT[] = [
	'accountName',
	'account',
	'url',
	'storeName',
	'settings',
	'googleTagManagerContainerId',
	'productBrandName',
	'sellerId',
	'plataformType',
	'workspace'
];

export const PAGE_KEYS_TO_SHOW: PageInfoKeysT[] = [
	'domain',
	'id'
];

export const ORDER_FORM_KEYS_TO_SHOW: OrderFormKeysT[] = [
	'orderFormId',
	'value',
	'salesChannel',
	'loggedIn',
	'isCheckedIn',
	'storeId',
	'userProfileId',
];

export const PRODUCT_KEYS_TO_SHOW: ProductKeysT[] = [
	'productId',
	'productName',
	'productReference',
	'categoryId',
	'productClusterIds'
];

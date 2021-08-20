import {
	ProductKeysT, OrderFormKeysT, StoreInfoKeysT
} from '@Types';


export const StoreKeysToShow: StoreInfoKeysT[] = [
	'accountName',
	'account',
	'url',
	'storeName',
	'settings',
	'accountName',
	'googleTagManagerContainerId',
	'productBrandName',
	'sellerId',
	'plataformType',
	'workspace',
];

export const OrderFormKeysToShow: OrderFormKeysT[] = [
	'orderFormId',
	'value',
	'salesChannel',
	'loggedIn',
	'isCheckedIn',
	'storeId',
	'userProfileId',
];

export const ProductKeysToShow: ProductKeysT[] = [
	'productId',
	'productName',
	'productReference',
	'categoryId',
];

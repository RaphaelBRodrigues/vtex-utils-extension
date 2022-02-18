import { OrderFormKeysToShow } from "@Constants";
import {
	getOrderForm,
	createCSV,
	cleanNode,
	createCopyButton,
	copyToClipboard,
	getVtexInfo,
} from "@Utils";
import CacheSelector from "../__cache-selector";

const {
	$list,
	$jsonLink,
	$csvLink,
	$copyJsonLink,
	$copyAddToCartLink,
	$content,
	$addToCartURL,
} = { ...CacheSelector.orderForm };

async function setOrderForm() {
	getOrderForm((orderForm) => {
		cleanNode($list);
		OrderFormKeysToShow.forEach((key) => {
			if (typeof orderForm?.[key] === "object") return;

			const $div = document.createElement("div");

			const $span = Object.assign(document.createElement("span"), {
				innerText: key,
			});

			const $inputWrapper = Object.assign(document.createElement("div"), {
				className: "x-input__wrapper",
			});

			const $input = Object.assign(document.createElement("input"), {
				value: orderForm![key],
				disabled: true,
			});

			$inputWrapper.append($input);
			$inputWrapper.append(createCopyButton());

			$div.append($span);
			$div.append($inputWrapper);

			$list?.append($div);
		});

		if ($content) $content.value = JSON.stringify(orderForm, null, "\t");
		if (orderForm) createAndSetLinks([orderForm]);
	});
}

function createAndSetLinks(orderForm: Object[]) {
	const csvContent = createCSV(orderForm);

	const csvURL =
		"data:text/csv;charset=utf-8," + encodeURIComponent(csvContent);

	const jsonURL =
		"data:text/json;charset=utf-8," +
		encodeURIComponent(JSON.stringify(orderForm, null, "\t"));

	getVtexInfo((vtexInfo) => {
		if (!!vtexInfo) {
			const { accountName, account } = vtexInfo;

			const addToCartURL = (<any>orderForm[0]).items.reduce(
				(url: string, item: any) => {
					const { quantity, seller, price, id } = item;

					return (
						url +
						`sku=${id}&qty=${quantity}&seller=${seller}&price=${price}&`
					);
				},
				`https://${accountName || account}.myvtex.com/checkout/cart/add?`
			);

			if ($addToCartURL) $addToCartURL.value = addToCartURL;
		}
	});

	$jsonLink?.setAttribute("href", jsonURL);
	$csvLink?.setAttribute("href", csvURL);

	$jsonLink?.classList.add("is--active");
	$csvLink?.classList.add("is--active");

	const items = [
		[$copyJsonLink, $content],
		[$copyAddToCartLink, $addToCartURL],
	];

	items.forEach(([$link, $value]) => {
		if ($link && $value) {
			$link?.addEventListener("click", (e) => {
				const $el = <HTMLLinkElement>e?.target;

				$el.innerText = "Copied";
				copyToClipboard(<HTMLInputElement>($value));
				setTimeout(() => {
					$el.innerText = "COPY TO CLIPBOARD";
				}, 2500);
			});
		}
	});

}

function init() {
	setOrderForm();
}

export default init;

import runOnTab from '../runOnTab';

function dispatchProductData() {
  runOnTab(async () => {
    const html = document.documentElement.outerHTML;

    const $links = document.querySelectorAll('link');

    const isIO = [...$links].find(($link) =>
      $link.href.match(/\/pwa\/manifest.json/),
    )
      ? 'IO'
      : 'CMS';

    const matchData =
      isIO
        ? /"mpn":"(?<productId>\d+)"/gi
        : /vtex.events.addData(?<=)\((?<productId>\{.+\})/gi;

    const content = matchData.exec(html)?.groups;
    const productId = content?.productId;

    if (!productId) return;

    const resp = await fetch(
      `/api/catalog_system/pub/products/search?fq=productId:${productId}`,
    );
    const [product] = await resp.json();


    chrome.runtime.sendMessage({
      action: 'getProductData',
      product: product,
    });
  });
}

export default dispatchProductData;

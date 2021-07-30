import runOnTab from '../runOnTab';

function dispatchProductData() {
  runOnTab(async () => {
    const html = document.documentElement.outerHTML;
    const $links = document.querySelectorAll('link');

    const plataformType = [...$links].find(($link) =>
      $link.href.match(/\/pwa\/manifest.json/),
    )
      ? 'IO'
      : 'CMS';

    const matchData =
      plataformType === 'IO'
        ? /__RUNTIME__ ?= ?(?<vtexInfo>{.+)/gi
        : /vtex.events.addData(?<=)\((?<vtexInfo>\{.+\})/gi;

    const content = matchData.exec(html)?.groups;
    if (!content?.vtexInfo) return;

    const vtexInfo = JSON.parse(content.vtexInfo);
    const productId =
      plataformType === 'IO' ? vtexInfo.route.params.id : vtexInfo.productId;

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

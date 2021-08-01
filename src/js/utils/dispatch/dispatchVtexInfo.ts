import runOnTab from '../runOnTab';

function dispatchVtexInfo() {
  runOnTab(() => {
    const html = document.documentElement.outerHTML;
    const $links = document.querySelectorAll('link');

    if (!html.match(/io.vtex.com.br/)) {
      chrome.runtime.sendMessage({ action: "isNotVTEX" });
      return;
    }

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


    chrome.runtime.sendMessage({
      action: 'getVtexInfo',
      vtexInfo: {
        ...vtexInfo,
        plataformType,
        cookies: document.cookie,
        url: window.location.href,
      },
    });
  });
}

export default dispatchVtexInfo;

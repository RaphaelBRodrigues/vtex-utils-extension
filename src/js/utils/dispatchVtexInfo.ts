import runOnTab from './runOnTab';

function dispatchChromeEvent() {
  runOnTab(() => {
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

    console.clear();
    console.log({ content, plataformType });

    if (!content?.vtexInfo) return;

    const vtexInfo = JSON.parse(content.vtexInfo);

    chrome.runtime.sendMessage({
      action: 'getVtexInfo',
      vtexInfo: {
        ...vtexInfo,
        plataformType,
        url: window.location.href,
      },
    });
  });
}

export default dispatchChromeEvent;

import runOnTab from './runOnTab';

async function triggerGetVtexInfo() {
  runOnTab(() => {
    const html = document.documentElement.outerHTML;

    const matchData = /vtex.events.addData(?<=)\((?<vtexInfo>\{.+\})/gi;

    const content = matchData.exec(html)?.groups;

    if (!content?.vtexInfo) return;

    const vtexInfo = JSON.parse(content.vtexInfo);

    chrome.runtime.sendMessage({
      action: 'getVtexInfo',
      vtexInfo: {
        ...vtexInfo,
        url: window.location.href,
      },
    });
  });
}

export default triggerGetVtexInfo;

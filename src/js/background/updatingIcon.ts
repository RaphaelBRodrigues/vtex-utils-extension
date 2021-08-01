
import { dispatchVtexInfo } from "@Utils";


chrome.runtime.onMessage.addListener(({ action }) => {
  if (action === "isNotVTEX") {
    updatingIcon(false);
  }
  if (action === "getVtexInfo") {
    updatingIcon(true);
  }
})

function updatingIcon(isVTEX: boolean) {
  if (isVTEX) {
    chrome.action.setIcon({
      path: {
        16: "images/vtex-16x16.png",
        32: "images/vtex-32x32.png",
        48: "images/vtex-48x48.png",
        128: "images/vtex-128x128.png",
      }
    });
  } else {
    chrome.action.setIcon({
      path: {
        16: "images/vtex-16x16_disabled.png",
        32: "images/vtex-32x32_disabled.png",
        48: "images/vtex-48x48_disabled.png",
        128: "images/vtex-128x128_disabled.png",
      }
    });
  }
}


chrome.tabs.onUpdated.addListener(dispatchVtexInfo)
chrome.tabs.onMoved.addListener(dispatchVtexInfo)
chrome.tabs.onHighlighted.addListener(dispatchVtexInfo)
chrome.tabs.onActivated.addListener(dispatchVtexInfo)

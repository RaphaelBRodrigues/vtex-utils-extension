import dispatchVtexInfo from "./dispatch/dispatchVtexInfo"

async function isVTEX() {
  let isVTEX = true;

  await new Promise((resolve) => {
    dispatchVtexInfo()
    chrome.runtime.onMessage.addListener(({ action }) => {
      if (action === "isNotVTEX") {
        isVTEX = false;
      }
      resolve(() => { });
    })
  })

  return isVTEX;
}

export default isVTEX;
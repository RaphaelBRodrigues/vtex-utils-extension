/**
 *
 * @param {*} url
 * @param {*} name
 * @param {*} value
 */
function setCookie(url, name, value) {
  chrome.cookies.set({
    url,
    name,
    value,
    expirationDate: new Date().getTime() / 1000 + 300000,
  });
}

export default setCookie;

/**
 * @description Set a cookie on client browser
 * @param {String} url - The tab url that the cookie will be set
 * @param {String} name - The name of the cookie
 * @param {String} value - The value of the cookit
 */
function setCookie({ url, name, value, expirationDate = null }) {
  chrome.cookies.set({
    url,
    name,
    value,
    expirationDate: expirationDate ?? new Date().getTime() / 1000 + 300000,
  });
}

export default setCookie;

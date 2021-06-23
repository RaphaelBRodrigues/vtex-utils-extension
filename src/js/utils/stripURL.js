/**
 *
 * @param {String} url - The url that will be striped
 * @returns An object with the url in parts
 */
function stripURL(url) {
  const urlPattern =
    /(?<protocol>(\w)+(?=:))(?:\:\/\/)(?<domain>((\w+)(\.?))+)(?<params>((\/)(\w?-?\d?)+)+)?(?<query>\?((\w?_?\d?)+=(\w?_?\d?)+&?)+)?/gi;

  return { ...urlPattern.exec(url).groups };
}

export default stripURL;

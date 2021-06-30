import { Nullish, StripedURL } from './types';

/**
 *
 * @param {String} url - The url that will be striped
 * @returns An object with the url in parts
 */
function stripURL(url: string | Nullish): StripedURL {
  const urlPattern =
    /(?<protocol>(\w)+(?=:))(?:\:\/\/)(?<domain>((\w+)(\.?))+)(?<params>((\/)(\w?-?\d?)+)+)?(?<query>\?((\w?_?\d?)+=(\w?_?\d?)+&?)+)?/gi;

  if (url) {
    const stripedURL = urlPattern.exec(url);

    return {
      ...stripedURL?.groups,
    };
  }

  return {};
}

export default stripURL;

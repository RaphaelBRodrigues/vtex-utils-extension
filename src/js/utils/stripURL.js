function stripURL(url) {
  const urlPattern =
    /(?<protocol>(\w)+(?=:))(?:\:\/\/)(?<domain>((\w+)(\.?))+)(?<params>((\/)(\w?-?\d?)+)+)?(?<query>\?((\w?_?\d?)+=(\w?_?\d?)+&?)+)?/gi;

  const { protocol, domain, params, query } = urlPattern.exec(url).groups;

  return { protocol, domain, params, query };
}

export default stripURL;

function parseCookies(cookies: string): any {

  const cookiesLength = cookies.match(/(;)+/gi)?.length || 0;
  if (cookiesLength < 1) return {};

  const cookieList = cookies.split(';');

  const cookieObject = cookieList.reduce((obj, cookie) => {
    const [key, value] = cookie.split('=');

    if (!key) return obj;
    return {
      ...obj,
      [key.trim()]: value,
    };
  }, {});

  return cookieObject;
}

export default parseCookies;

function parseCookies(cookies: string): any {
  const cookieList = cookies.split(';');

  const cookieObject = cookieList.reduce((obj, cookie) => {
    const [key, value] = cookie.split('=');

    return {
      ...obj,
      [key.trim()]: value,
    };
  }, {});

  return cookieObject;
}

export default parseCookies;

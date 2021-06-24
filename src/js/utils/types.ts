export type StripedURL = {
  protocol?: string;
  domain?: string;
  query?: string;
};

export type Cookie = {
  url: string;
  name: string;
  value: string | boolean | number;
  expirationDate?: number | null | undefined;
};

// Window.chrome types
export type ChromeTabQuery = {
  tab: object;
  url: string;
  id: string;
};

export type ChromeCurrentTabCallback = (obj: ChromeTabQuery) => void;

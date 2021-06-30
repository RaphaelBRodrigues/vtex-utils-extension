export type Nullish = undefined | null;

export type StripedURL = {
  protocol?: string;
  domain?: string;
  query?: string;
};

export type Cookie = {
  url: string;
  name: string;
  value: string | undefined;
  expirationDate?: number | null | undefined;
};

// Window.chrome types
export type ChromeTabQuery = {
  tab: object;
  url: string;
  id: string;
};

export type ChromeCurrentTabCallback = (obj: chrome.tabs.Tab) => void;

export type StripedURL = {
  protocol?: string;
  domain?: string;
  query?: string;
};

// Window.chrome types

export type ChromeTabQuery = {
  tab: object;
  url: string;
  id: string;
};

export type ChromeCurrentTabCallback = (obj: ChromeTabQuery) => void;

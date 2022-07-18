export interface IResponseImages {
  id: string;
  origin: string;
  description: string;
  width: number;
  height: number;
  title: string;
  color: string;
  urls: Urls;
  userName: string;
}

export interface Urls {
  full: string;
  medium: string;
  small: string;
  link: string;
}

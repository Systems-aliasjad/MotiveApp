export interface IPageHeader {
  pageTitle: string;
  singleLine: boolean;
}

export interface ITabTile {
  imageSrc: string;
  case: string; // Success-green | Error-red | Default-grey
  title: string;
}

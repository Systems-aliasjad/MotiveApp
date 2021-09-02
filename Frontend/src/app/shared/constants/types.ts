export interface IPageHeader {
  pageTitle: string;
  singleLine: boolean;
}

export interface ITermsAndConditions {
  termsCheck: boolean;
}

export interface ITabTile {
  imageSrc: string;
  case: string; // Success-green | Error-red | Default-grey
  title: string;
}

export interface IButton {
  title: string;
  clickListener: () => void;
  behaviour: string; // primary | secondary | link
  explanatoryNote?: string;
}

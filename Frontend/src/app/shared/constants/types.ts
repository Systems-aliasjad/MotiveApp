export interface IPageHeader {
  pageTitle: string;
  singleLine: boolean;
  showBackBtn?: boolean;
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
  linkTo?: string;
  customListner?: string;
}

export interface IButtonSize {
  SM: string;
  MD: string;
  LG: string;
}

interface IMessageIssueBody {
  title: string;
  children?: string[];
}
export interface IMessageIssue {
  header: string;
  body: IMessageIssueBody[];
}

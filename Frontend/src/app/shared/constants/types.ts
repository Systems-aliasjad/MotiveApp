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
/**
 * @deprecated - need to be removed, please don't use this
 */
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

export interface ICard {
  title?: string;
  body: string;
  img?: string;
  linkTo: string;
}

export interface ISection2Template {
  title: string;
  type: string;
  objKeyNameEN?: string;
  objKeyNameAR?: string;
}

export interface IMotvieSubscription {
  [key: string]: {
    landingPageCards: ICard[];
    quickLinkCard: ICard[];
  };
}

export interface IPageHeader {
  pageTitle: string;
  singleLine?: boolean;
  showBackBtn?: boolean;
}

export interface ITabTile {
  imageSrc: string;
  case: string; // Success-green | Error-red | Default-grey
  title: string;
}

export interface IMessageIssueBody {
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

//----------------
export interface IDeviceCareContent {
  imgSrc: string;
  header1: string;
  header2?: string;
  body1: string;
  body2?: string;
  bullet1?: string[];
  bullet2?: string[];
}

export interface IMotiveButton {
  type: 'link' | 'primary' | 'secondary' | 'terms';
  title: string;
  explanatoryNote?: string;
  SM?: string;
  MD?: string;
  LG?: string;
}

export interface IMessageIssueBody {
  title: string;
  children?: string[];
}
export interface IMessageSection {
  header: string;
  paragraphs: IMessageIssueBody[];
  span?: string;
  spanListener?: () => void;
}

export interface IMessageSection1 {
  header: string;
  paragraphs: string[];
  span?: string;
  spanListener?: () => void;
}

export interface IResetPinContent {
  header: string;
  subheader: string;
  inputLablel: string;
}

export interface IRestartInstruction {
  title: string;
  steps: string[];
}
export interface IExplainInstruction {
  title: string;
  body: string;
}

export interface ITermsAndConditions {
  head: string;
  body: string[];
}

export interface IOntDetail {
  ontSerial: string;
  ontType: string;
  url: string;
  className: string;
  isReachable: boolean;
  isRebootRequired: boolean;
  isUpgradeRequired: boolean;
}

export interface IRouterDetail {
  routerSerial: string;
  routerModel: string;
  url: string;
  className: string;
  isReachable: boolean;
  isRebootRequired: boolean;
  isUpgradeRequired: boolean;
  isManaged: boolean;
  isResetRequired: boolean;
}

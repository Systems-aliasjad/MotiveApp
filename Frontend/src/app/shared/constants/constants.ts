export interface ICard {
  title?: String;
  body: String;
  img?: String;
  applicableCodes: String[];
  linkTo: String;
}

export interface ISection2Template {
  title: String;
  type: String;
  objKeyName: string;
}

const P3: String = '3P';
const P2: String = '2P';
const P1: String = '1P';
const P0: String = '0P';
const VO: String = 'VO';
const HI: String = 'HI';
const B1: String = 'B1';
const FD: String = 'FD';
const FH: String = 'FH';
const FT: String = 'FT';
const FV: String = 'FV';
const BSP: String = 'BSP';
const BTP: String = 'BTP';
const BDP: String = 'BDP';
const BFXI: String = 'BFXI';
const ALL_PRODUCT_CODES: String[] = [P3, P2, P1, P0, VO, HI, B1, FD, FH, FT, FV, BSP, BTP, BDP, BFXI];
//lANDING PAGE
const TV_ISSUES: String[] = [P3, BTP, FT, P1, P0, BSP];
const RESET_PIN: String[] = [P1, P0, BSP, VO, FV];
const PHONE_ISSUES: String[] = [P3, BTP, FT, P2, BDP, BFXI, FD, VO, FV];
const OTHER_ISSUES: String[] = [P3, BTP, FT, P2, BDP, BFXI, FD];
const INTERNET_ISSUES: String[] = [P3, BTP, FT, P2, BDP, BFXI, FD, HI, B1, FH];
const PASSWORD_ISSUES: String[] = [P3, BTP, FT, P2, BDP, BFXI, FD, HI, B1, FH];
//QUICK LINKS
const INSTALL_NEW_ROUTER: String[] = [P3, P2, HI, B1, BTP, BDP, BFXI, FD, FH, FT];
const FACTORY_RESET_ROUTER: String[] = [P3, P2, HI, B1, BTP, BDP, BFXI, FD, FH, FT];
const FACTORY_RESET_TV: String[] = [P3, P1, BSP, BTP, FT];
const FORGOT_PASSWORD_INTERNET: String[] = [P3, P2, HI, B1, BTP, BDP, BFXI, FD, FH, FT];
const CONNECTION_ISSUE_ROUTER: String[] = [P3, P2, HI, B1, BTP, BDP, BFXI, FD, FH, FT];
const FORGOT_PASSWORD_TV: String[] = [P3, P1, BSP, BTP, FT];
const TRANSFER_PACKAGE_TV: String[] = [P3, P1, BSP, BTP, FT];
const CONNECT_HOME_ZONE: String[] = ALL_PRODUCT_CODES; // TODO: need to change with all applicable rates
const TRACK_COMPLAINT: String[] = ALL_PRODUCT_CODES;
const TRACK_REQUEST: String[] = ALL_PRODUCT_CODES;
const UPGRADE_ROUTER: String[] = [P3, P2, HI, B1, BTP, BDP, BFXI, FD, FH, FT];
const UPGRADE_PACKAGE: String[] = [P3, P2, HI, B1, BTP, BDP, BFXI, FD, FH, FT];

export class ApplicableCodes {
  public static landingPageCards: ICard[] = [
    {
      title: 'LANDING_PAGE.INTERNET_ISSUES_TITLE',
      body: 'LANDING_PAGE.INTERNET_ISSUES_DESCRIPTION',
      img: 'assets/images/duo-tone-icons/icon_internet_issues.svg',
      applicableCodes: INTERNET_ISSUES,
      linkTo: '',
    },
    {
      title: 'LANDING_PAGE.TV_ISSUES_TITLE',
      body: 'LANDING_PAGE.TV_ISSUES_DESCRIPTION',
      img: 'assets/images/duo-tone-icons/icon_tv_issues.svg',
      applicableCodes: TV_ISSUES,
      linkTo: '',
    },
    {
      title: 'LANDING_PAGE.PHONE_ISSUES_TITLE',
      body: 'LANDING_PAGE.PHONE_ISSUES_DESCRIPTION',
      img: 'assets/images/duo-tone-icons/icon_telephone_issues.svg',
      applicableCodes: PHONE_ISSUES,
      linkTo: '',
    },
    {
      title: 'LANDING_PAGE.OTHER_ISSUES_TITLE',
      body: 'LANDING_PAGE.OTHER_ISSUES_DESCRIPTION',
      img: 'assets/images/duo-tone-icons/icon_service_issues.svg',
      applicableCodes: OTHER_ISSUES,
      linkTo: '',
    },
    {
      title: 'LANDING_PAGE.PASSWORD_ISSUES_TITLE',
      body: 'LANDING_PAGE.PASSWORD_ISSUES_DESCRIPTION',
      img: 'assets/images/duo-tone-icons/icon_password_issues.svg',
      applicableCodes: PASSWORD_ISSUES,
      linkTo: '',
    },
    {
      title: 'LANDING_PAGE.RESET_PIN_TITLE',
      body: 'LANDING_PAGE.RESET_PIN_DESCRIPTION',
      img: 'assets/images/duo-tone-icons/icon_password_issues.svg',
      applicableCodes: RESET_PIN,
      linkTo: '',
    },
  ];

  public static quickLinkCards: ICard[] = [
    {
      body: 'I want to install my new router',
      applicableCodes: INSTALL_NEW_ROUTER,
      linkTo: '',
    },
    {
      body: 'I want to factory reset my router',
      applicableCodes: FACTORY_RESET_ROUTER,
      linkTo: '',
    },
    {
      body: 'I want to factory reset my TV box',
      applicableCodes: FACTORY_RESET_TV,
      linkTo: '',
    },
    {
      body: 'I forgot my internet password',
      applicableCodes: FORGOT_PASSWORD_INTERNET,
      linkTo: '',
    },
    {
      body: 'I am unable to connect device(s) to my router’s Wi-Fi',
      applicableCodes: CONNECTION_ISSUE_ROUTER,
      linkTo: '',
    },
    {
      body: 'I forgot my TV box PIN',
      applicableCodes: FORGOT_PASSWORD_TV,
      linkTo: '',
    },
    {
      body: 'I want to transfer eLife TV package to another TV box',
      applicableCodes: TRANSFER_PACKAGE_TV,
      linkTo: '',
    },
    {
      body: 'I am unable to connect to Home Zone',
      applicableCodes: CONNECT_HOME_ZONE,
      linkTo: '',
    },
    {
      body: 'I want to track a recent complaint',
      applicableCodes: TRACK_COMPLAINT,
      linkTo: '',
    },
    {
      body: 'I want to track my request',
      applicableCodes: TRACK_REQUEST,
      linkTo: '',
    },
    {
      body: 'I want to upgrade my router',
      applicableCodes: UPGRADE_ROUTER,
      linkTo: '',
    },
    {
      body: 'I want to upgrade my eLife package',
      applicableCodes: UPGRADE_PACKAGE,
      linkTo: '',
    },
  ];

  public static openServiceRequestTemplate: ISection2Template[] = [
    {
      title: 'Request No.',
      type: 'number',
      objKeyName: 'reqNo',
    },
    {
      title: 'Request Type',
      type: 'text',
      objKeyName: 'reqType',
    },
    {
      title: 'Date of visit',
      type: 'date',
      objKeyName: 'dateVisit',
    },
    {
      title: 'status',
      type: 'text',
      objKeyName: 'status',
    },
  ];
}

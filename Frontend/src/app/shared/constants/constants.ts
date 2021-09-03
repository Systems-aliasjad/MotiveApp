export interface ICard {
  title?: string;
  body: string;
  img?: string;
  applicableCodes: string[];
  linkTo: string;
}

export interface ISection2Template {
  title: string;
  type: string;
  objKeyNameEN?: string;
  objKeyNameAR?: string;
}

export enum ERoutingIds {
  openComplaint,
  osrp,
  appoinmentSuccessfully,
  openSr,
  packageUpgradeRequestSuccessfully,
  routerRebootRequired,
  issueNotFixed,
  internetPasswordReset,
  RouterReset3rdParty,
  packageUpgradeRecommended,
  packageUpgradeRecommendedForm,
  WiFiAlarm,
  bookComplaint,
}

const P3: string = '3P';
const P2: string = '2P';
const P1: string = '1P';
const P0: string = '0P';
const VO: string = 'VO';
const HI: string = 'HI';
const B1: string = 'B1';
const FD: string = 'FD';
const FH: string = 'FH';
const FT: string = 'FT';
const FV: string = 'FV';
const BSP: string = 'BSP';
const BTP: string = 'BTP';
const BDP: string = 'BDP';
const BFXI: string = 'BFXI';
const ALL_PRODUCT_CODES: string[] = [P3, P2, P1, P0, VO, HI, B1, FD, FH, FT, FV, BSP, BTP, BDP, BFXI];
//lANDING PAGE
const TV_ISSUES: string[] = [P3, BTP, FT, P1, P0, BSP];
const RESET_PIN: string[] = [P1, P0, BSP, VO, FV];
const PHONE_ISSUES: string[] = [P3, BTP, FT, P2, BDP, BFXI, FD, VO, FV];
const OTHER_ISSUES: string[] = [P3, BTP, FT, P2, BDP, BFXI, FD];
const INTERNET_ISSUES: string[] = [P3, BTP, FT, P2, BDP, BFXI, FD, HI, B1, FH];
const PASSWORD_ISSUES: string[] = [P3, BTP, FT, P2, BDP, BFXI, FD, HI, B1, FH];
//QUICK LINKS
const INSTALL_NEW_ROUTER: string[] = [P3, P2, HI, B1, BTP, BDP, BFXI, FD, FH, FT];
const FACTORY_RESET_ROUTER: string[] = [P3, P2, HI, B1, BTP, BDP, BFXI, FD, FH, FT];
const FACTORY_RESET_TV: string[] = [P3, P1, BSP, BTP, FT];
const FORGOT_PASSWORD_INTERNET: string[] = [P3, P2, HI, B1, BTP, BDP, BFXI, FD, FH, FT];
const CONNECTION_ISSUE_ROUTER: string[] = [P3, P2, HI, B1, BTP, BDP, BFXI, FD, FH, FT];
const FORGOT_PASSWORD_TV: string[] = [P3, P1, BSP, BTP, FT];
const TRANSFER_PACKAGE_TV: string[] = [P3, P1, BSP, BTP, FT];
const CONNECT_HOME_ZONE: string[] = ALL_PRODUCT_CODES; // TODO: need to change with all applicable rates
const TRACK_COMPLAINT: string[] = ALL_PRODUCT_CODES;
const TRACK_REQUEST: string[] = ALL_PRODUCT_CODES;
const UPGRADE_ROUTER: string[] = [P3, P2, HI, B1, BTP, BDP, BFXI, FD, FH, FT];
const UPGRADE_PACKAGE: string[] = [P3, P2, HI, B1, BTP, BDP, BFXI, FD, FH, FT];

export class ApplicableCodes {
  public static landingPageCards: ICard[] = [
    {
      title: 'LANDING_PAGE.INTERNET_ISSUES_TITLE',
      body: 'LANDING_PAGE.INTERNET_ISSUES_DESCRIPTION',
      img: 'assets/images/duo-tone-icons/icon_internet_issues.svg',
      applicableCodes: INTERNET_ISSUES,
      linkTo: 'info',
    },
    {
      title: 'LANDING_PAGE.TV_ISSUES_TITLE',
      body: 'LANDING_PAGE.TV_ISSUES_DESCRIPTION',
      img: 'assets/images/duo-tone-icons/icon_tv_issues.svg',
      applicableCodes: TV_ISSUES,
      linkTo: '#',
    },
    {
      title: 'LANDING_PAGE.PHONE_ISSUES_TITLE',
      body: 'LANDING_PAGE.PHONE_ISSUES_DESCRIPTION',
      img: 'assets/images/duo-tone-icons/icon_telephone_issues.svg',
      applicableCodes: PHONE_ISSUES,
      linkTo: '#',
    },
    {
      title: 'LANDING_PAGE.OTHER_ISSUES_TITLE',
      body: 'LANDING_PAGE.OTHER_ISSUES_DESCRIPTION',
      img: 'assets/images/duo-tone-icons/icon_service_issues.svg',
      applicableCodes: OTHER_ISSUES,
      linkTo: '#',
    },
    {
      title: 'LANDING_PAGE.PASSWORD_ISSUES_TITLE',
      body: 'LANDING_PAGE.PASSWORD_ISSUES_DESCRIPTION',
      img: 'assets/images/duo-tone-icons/icon_password_issues.svg',
      applicableCodes: PASSWORD_ISSUES,
      linkTo: '#',
    },
    {
      title: 'LANDING_PAGE.RESET_PIN_TITLE',
      body: 'LANDING_PAGE.RESET_PIN_DESCRIPTION',
      img: 'assets/images/duo-tone-icons/icon_password_issues.svg',
      applicableCodes: RESET_PIN,
      linkTo: '#',
    },
  ];

  public static quickLinkCards: ICard[] = [
    {
      body: 'QUICK_LINKS.INSTALL_NEW_ROUTER',
      applicableCodes: INSTALL_NEW_ROUTER,
      linkTo: '',
    },
    {
      body: 'QUICK_LINKS.FACTORY_RESET_ROUTER',
      applicableCodes: FACTORY_RESET_ROUTER,
      linkTo: '',
    },
    {
      body: 'QUICK_LINKS.FACTORY_RESET_TV',
      applicableCodes: FACTORY_RESET_TV,
      linkTo: '',
    },
    {
      body: 'QUICK_LINKS.FORGOT_PASSWORD_INTERNET',
      applicableCodes: FORGOT_PASSWORD_INTERNET,
      linkTo: '',
    },
    {
      body: 'QUICK_LINKS.CONNECTION_ISSUE_ROUTER',
      applicableCodes: CONNECTION_ISSUE_ROUTER,
      linkTo: '',
    },
    {
      body: 'QUICK_LINKS.FORGOT_PASSWORD_TV',
      applicableCodes: FORGOT_PASSWORD_TV,
      linkTo: '',
    },
    {
      body: 'QUICK_LINKS.TRANSFER_PACKAGE_TV',
      applicableCodes: TRANSFER_PACKAGE_TV,
      linkTo: '',
    },
    {
      body: 'QUICK_LINKS.CONNECT_HOME_ZONE',
      applicableCodes: CONNECT_HOME_ZONE,
      linkTo: '',
    },
    {
      body: 'QUICK_LINKS.TRACK_COMPLAINT',
      applicableCodes: TRACK_COMPLAINT,
      linkTo: '',
    },
    {
      body: 'QUICK_LINKS.TRACK_REQUEST',
      applicableCodes: TRACK_REQUEST,
      linkTo: '',
    },
    {
      body: 'QUICK_LINKS.UPGRADE_ROUTER',
      applicableCodes: UPGRADE_ROUTER,
      linkTo: '',
    },
    {
      body: 'QUICK_LINKS.UPGRADE_PACKAGE',
      applicableCodes: UPGRADE_PACKAGE,
      linkTo: '',
    },
  ];

  public static openServiceRequestTemplate: ISection2Template[] = [
    {
      title: 'OPEN_SERVICE_REQUEST.REQUEST_NO',
      type: 'number',
      objKeyNameEN: 'reqNo',
    },
    {
      title: 'OPEN_SERVICE_REQUEST.REQUEST_TYPE',
      type: 'text',
      objKeyNameEN: 'reqType',
    },
    {
      title: 'OPEN_SERVICE_REQUEST.DATE_VISIT',
      type: 'date',
      objKeyNameEN: 'dateVisit',
    },
    {
      title: 'OPEN_SERVICE_REQUEST.STATUS',
      type: 'text',
      objKeyNameEN: 'status',
    },
  ];

  public static openServiceRequestTemplateCompliant: ISection2Template[] = [
    {
      title: 'COMPLAIN_REQUEST.COMPLAINT_NO',
      type: 'number',
      objKeyNameEN: 'complaintNo',
    },
    {
      title: 'COMPLAIN_REQUEST.DATE_VISIT',
      type: 'date',
      objKeyNameEN: 'dateVisit',
    },
    {
      title: 'COMPLAIN_REQUEST.STATUS',
      type: 'text',
      objKeyNameEN: 'status',
    },
  ];

  public static appointBookSuccessfullyTemplate: ISection2Template[] = [
    {
      title: 'APPOINTMENT_BOOKED_SUCCESSFULLY.REFERENCE_NO',
      type: 'number',
      objKeyNameEN: 'referenceNo',
    },
    {
      title: 'APPOINTMENT_BOOKED_SUCCESSFULLY.DATE_VISIT',
      type: 'date',
      objKeyNameEN: 'dateVisit',
    },
    {
      title: 'APPOINTMENT_BOOKED_SUCCESSFULLY.LOCATION',
      type: 'text',
      objKeyNameEN: 'location',
    },
  ];

  public static OpenServiceRequestTemplate: ISection2Template[] = [
    {
      title: 'APPOINTMENT_BOOKED_SUCCESSFULLY.REFERENCE_NO',
      type: 'number',
      objKeyNameEN: 'referenceNo',
    },
    {
      title: 'APPOINTMENT_BOOKED_SUCCESSFULLY.DATE_VISIT',
      type: 'date',
      objKeyNameEN: 'dateVisit',
    },
    {
      title: 'APPOINTMENT_BOOKED_SUCCESSFULLY.LOCATION',
      type: 'text',
      objKeyNameEN: 'location',
    },
  ];
  // needs to be removed
  public static packageUpgradeTemplate: ISection2Template[] = [
    {
      title: 'PACKAGE_UPGRADE_SUCCESSFULLY.REFERENCE_NO',
      type: 'number',
      objKeyNameEN: 'referenceNo',
    },
  ];
}

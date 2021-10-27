import { FormGroup } from '@angular/forms';

import { IMotvieSubscription, ISection2Template } from './types';

export class RoutingPaths {
  public static readonly routerInstallSuccessfully: string = 'router-install-successfully';
  public static readonly installNewRouter: string = 'install-new-router';
}

export const flowCodes = {
  genericError: 'G11E24',
  accountNotActive: 'E2ECRM141',
  CI9: 'CI9',
  openComplaint: 'CI11',
  routerRebootSuccess: 'CI12',
  routerRebootFaliure: 'CI121',
  movingElifeConnection: 'E2ECRM231',
  ElifeCancellationRequest: 'E2ECRM232',
  accountTemporarilyDisconnected: 'E2ECRM141',
  outage: 'E2ENI21',
  issueNotFixed: 'CI71',
  CI72: 'CI72',
  CI73: 'CI73',
  CI71: 'CI71',
  UPSEL1: 'UPSEL1',
  UPSEL2: 'UPSEL2',
  UPSEL3: 'UPSEL3',
  UPSEL4: 'UPSEL4',
  UPSEL5: 'UPSEL5',
  UPSEL6: 'UPSEL6',
  UPSEL7: 'UPSEL7',
  UPSEL8: 'UPSEL8',
  UPSEL9: 'UPSEL9',
};

export const ETISALAT = 'Etisalat';
export const ONT = 'Fiber Box';
export const ROUTER = 'Router';
export const STB = 'STB';
export const PHONE = 'phone';

export const networkDiagramClasses = {
  default: 'default', //Gray
  error: 'error', //Red
  pending: 'pending', //Orange
  okay: 'okay', //Green
};

export const SVGs = {
  etisalat: {
    default: './assets/images/network-map-icons/icon_home_default.svg',
  },
  ont: {
    default: './assets/images/ont/default_ont.PNG',
  },
  router: {
    default: './assets/images/router/default_router.PNG',
  },
  phone: {
    default: '/assets/images/network-map-icons/icon_phone_default.svg',
    okay: '/assets/images/network-map-icons/icon_phone_all_okay.svg',
  },
  stb: {
    default: '/assets/images/STB/DWI211ETI.png', //To do set it to svc as others
  },
};

export const ETISALAT_DEFAULT_CONFIG = {
  url: SVGs.etisalat.default,
  className: networkDiagramClasses.okay,
  title: ETISALAT,
};

export enum ERoutingIds {
  routerNotReachable,
  routerNotReachableOwnRouter,
}

export enum NetWorkDiagramIds {
  ThreeLayer = 1,
  FiveLayer,
  SevenLayer,
  sixLayer,
}

// const P3: string = '3P';
// const P2: string = '2P';
// const P1: string = '1P';
// const P0: string = '0P';
// const VO: string = 'VO';
// const HI: string = 'HI';
// const B1: string = 'B1';
// const FD: string = 'FD';
// const FH: string = 'FH';
// const FT: string = 'FT';
// const FV: string = 'FV';
// const BSP: string = 'BSP';
// const BTP: string = 'BTP';
// const BDP: string = 'BDP';
// const BFXI: string = 'BFXI';
// const ALL_PRODUCT_CODES: string[] = [P3, P2, P1, P0, VO, HI, B1, FD, FH, FT, FV, BSP, BTP, BDP, BFXI];
// //lANDING PAGE
// const TV_ISSUES: string[] = [P3, BTP, FT, P1, P0, BSP];
// const RESET_PIN: string[] = [P1, P0, BSP, VO, FV];
// const PHONE_ISSUES: string[] = [P3, BTP, FT, P2, BDP, BFXI, FD, VO, FV];
// const OTHER_ISSUES: string[] = [P3, BTP, FT, P2, BDP, BFXI, FD];
// const INTERNET_ISSUES: string[] = [P3, BTP, FT, P2, BDP, BFXI, FD, HI, B1, FH];
// const PASSWORD_ISSUES: string[] = [P3, BTP, FT, P2, BDP, BFXI, FD, HI, B1, FH];
// //QUICK LINKS
// const INSTALL_NEW_ROUTER: string[] = [P3, P2, HI, B1, BTP, BDP, BFXI, FD, FH, FT];
// const FACTORY_RESET_ROUTER: string[] = [P3, P2, HI, B1, BTP, BDP, BFXI, FD, FH, FT];
// const FACTORY_RESET_TV: string[] = [P3, P1, BSP, BTP, FT];
// const FORGOT_PASSWORD_INTERNET: string[] = [P3, P2, HI, B1, BTP, BDP, BFXI, FD, FH, FT];
// const CONNECTION_ISSUE_ROUTER: string[] = [P3, P2, HI, B1, BTP, BDP, BFXI, FD, FH, FT];
// const FORGOT_PASSWORD_TV: string[] = [P3, P1, BSP, BTP, FT];
// const TRANSFER_PACKAGE_TV: string[] = [P3, P1, BSP, BTP, FT];
// const CONNECT_HOME_ZONE: string[] = ALL_PRODUCT_CODES; // TODO: need to change with all applicable rates
// const TRACK_COMPLAINT: string[] = ALL_PRODUCT_CODES;
// const TRACK_REQUEST: string[] = ALL_PRODUCT_CODES;
// const UPGRADE_ROUTER: string[] = [P3, P2, HI, B1, BTP, BDP, BFXI, FD, FH, FT];
// const UPGRADE_PACKAGE: string[] = [P3, P2, HI, B1, BTP, BDP, BFXI, FD, FH, FT];

export const MOTIVE_TOKEN = 'M_A_TOK'; //Motive Auth Token
export const warningImgSrc: string = 'assets/images/super-icons/icon_supericon_all_warning_warning_consumer_regular.svg';
export const successImgSrc: string = 'assets/images/super-icons/icon_supericon_consumer_success_success_consumer_regular.svg';
export const infoImgSrc: string = 'assets/images/super-icons/icon_supericon_consumer_regular.svg';
export const eyeShow: string = 'assets/images/action-icons/icon_show.svg';
export const eyeHide: string = 'assets/images/action-icons/icon_hide.svg';

const INTERNET_ISSUES = {
  title: 'MESSAGES.INTERNET_ISSUES',
  body: 'MESSAGES.MY_WIFI_IS_SLOW_OR_CAUSING_PROBLEMS',
  img: 'assets/images/duo-tone-icons/icon_internet_issues.svg',
  linkTo: 'issues/internet',
};

const TV_ISSUES = {
  title: 'MESSAGES.TV_ISSUES',
  body: 'MESSAGES.MY_TV_ISNT_WORKING_PROPERLY',
  img: 'assets/images/duo-tone-icons/icon_tv_issues.svg',
  linkTo: 'issues/tv',
};

const PHONE_ISSUES = {
  title: 'MESSAGES.PHONE_ISSUE',
  body: 'MESSAGES.I_CANT_MAKE_ANY_CALLS',
  img: 'assets/images/duo-tone-icons/icon_telephone_issues.svg',
  linkTo: 'issues/phone',
};

const OTHER_ISSUES = {
  title: 'MESSAGES.OTHER_ISSUES',
  body: 'MESSAGES.I_AM_FACING_ISSUES_WILL_ALL_SERVICE',
  img: 'assets/images/duo-tone-icons/icon_service_issues.svg',
  linkTo: 'issues/other',
};

const PASSWORD_ISSUES = {
  title: 'MESSAGES.PASSWORD_ISSUES',
  body: 'MESSAGES.I_WANT_TO_CHANGE_OR_RESET_MY_PASSWORD',
  img: 'assets/images/duo-tone-icons/icon_password_issues.svg',
  linkTo: 'issues/password',
  customEvent: 'openPasswordIssueDialog',
};

const RESET_PIN = {
  title: 'MESSAGES.RESET_PIN',
  body: 'MESSAGES.I_WANT_TO_RESET_MY_PIN',
  img: 'assets/images/duo-tone-icons/icon_password_issues.svg',
  linkTo: 'reset-pin',
};

const INSTALL_NEW_ROUTER = {
  body: 'QUICK_LINKS.I_WANT_TO_INSTALL_MY_NEW_ROUTER',
  linkTo: '/issues/internet/install-new-router',
};
const FACTORY_RESET_ROUTER = {
  body: 'QUICK_LINKS.I_WANT_TO_FACTORY_RESET_MY_ROUTER',
  linkTo: '/issues/internet/router-reset-factory',
};
const FACTORY_RESET_TV = {
  body: 'QUICK_LINKS.I_WANT_TO_FACTORY_RESET_MY_TV_BOX',
  linkTo: 'issues/tv/tv-box-reset-factory',
};
const ELIFE_ON_PIN_RESET = {
  body: 'QUICK_LINKS.I_WANT_TO_RESET_ELIFE_ON_PIN',
  linkTo: 'issues/tv/pin-reset-failed',
};

const FORGOT_PASSWORD_INTERNET = {
  body: 'QUICK_LINKS.I_FORGOT_MY_INTERNET_PASSWORD',
  linkTo: 'issues/internet/reset-internet-password',
};
const CONNECTION_ISSUE_ROUTER = {
  body: 'QUICK_LINKS.I_AM_UNABLE_TO_CONNECT_DEVICES_TO_MY_ROUTERS_WIFI',
  linkTo: 'unable-connect-newDevice',
};
const FORGOT_PASSWORD_TV = {
  body: 'QUICK_LINKS.I_FORGOT_MY_TV_BOX_PIN',
  linkTo: '/issues/password/reset-tv-admin-pin',
};
const TRANSFER_PACKAGE_TV = {
  body: 'QUICK_LINKS.I_WANT_TO_TRANSFER_ELIFE_TV_PACKAGE_TO_ANOTHER_TV_BOX',
  linkTo: 'issues/tv/no-additional-stb',
};
const CONNECT_HOME_ZONE = {
  body: 'QUICK_LINKS.I_AM_UNABLE_TO_CONNECT_TO_HOME_ZONE',
  linkTo: 'device-connected-homezone',
};
const TRACK_COMPLAINT = {
  body: 'QUICK_LINKS.I_WANT_TO_TRACK_A_RECENT_COMPLAINT',
  linkTo: 'track-complaint/complaint-details-message',
};
const TRACK_REQUEST = {
  body: 'QUICK_LINKS.I_WANT_TO_TRACK_MY_REQUEST',
  linkTo: 'track-request/request-detail',
};
const UPGRADE_ROUTER = {
  body: 'QUICK_LINKS.I_WANT_TO_UPGRADE_MY_ROUTER',
  linkTo: 'issues/internet/router-upgrade',
};
const UPGRADE_PACKAGE = {
  body: 'QUICK_LINKS.I_WANT_TO_UPGRADE_MY_ELIFE_PACKAGE',
  linkTo: 'issues/tv/eLife-upgrade',
};

export const motiveSubscriptions: IMotvieSubscription = {
  '3P': {
    landingPageCards: [INTERNET_ISSUES, TV_ISSUES, PHONE_ISSUES, OTHER_ISSUES, PASSWORD_ISSUES],
    quickLinkCard: [
      INSTALL_NEW_ROUTER,
      FACTORY_RESET_ROUTER,
      FACTORY_RESET_TV,
      ELIFE_ON_PIN_RESET,
      FORGOT_PASSWORD_INTERNET,
      CONNECTION_ISSUE_ROUTER,
      FORGOT_PASSWORD_TV,
      TRANSFER_PACKAGE_TV,
      CONNECT_HOME_ZONE,
      TRACK_COMPLAINT,
      TRACK_REQUEST,
      UPGRADE_ROUTER,
      UPGRADE_PACKAGE,
    ],
  },
  '2P': {
    landingPageCards: [INTERNET_ISSUES, PHONE_ISSUES, OTHER_ISSUES, PASSWORD_ISSUES],
    quickLinkCard: [
      INSTALL_NEW_ROUTER,
      FACTORY_RESET_ROUTER,
      FORGOT_PASSWORD_INTERNET,
      CONNECTION_ISSUE_ROUTER,
      CONNECT_HOME_ZONE,
      TRACK_COMPLAINT,
      TRACK_REQUEST,
      UPGRADE_ROUTER,
      UPGRADE_PACKAGE,
    ],
  },
  '1P': {
    landingPageCards: [TV_ISSUES, RESET_PIN],
    quickLinkCard: [FACTORY_RESET_TV, FORGOT_PASSWORD_TV, TRANSFER_PACKAGE_TV, CONNECT_HOME_ZONE, TRACK_COMPLAINT, TRACK_REQUEST],
  },
  '0P': {
    landingPageCards: [TV_ISSUES, RESET_PIN],
    quickLinkCard: [CONNECT_HOME_ZONE, TRACK_COMPLAINT, TRACK_REQUEST],
  },
  VO: {
    landingPageCards: [PHONE_ISSUES, RESET_PIN],
    quickLinkCard: [CONNECT_HOME_ZONE, TRACK_COMPLAINT, TRACK_REQUEST],
  },
  H1: {
    landingPageCards: [INTERNET_ISSUES, PASSWORD_ISSUES],
    quickLinkCard: [
      INSTALL_NEW_ROUTER,
      FACTORY_RESET_ROUTER,
      FORGOT_PASSWORD_INTERNET,
      CONNECTION_ISSUE_ROUTER,
      CONNECT_HOME_ZONE,
      TRACK_COMPLAINT,
      TRACK_REQUEST,
      UPGRADE_ROUTER,
      UPGRADE_PACKAGE,
    ],
  },
  B1: {
    landingPageCards: [INTERNET_ISSUES, PASSWORD_ISSUES],
    quickLinkCard: [
      INSTALL_NEW_ROUTER,
      FACTORY_RESET_ROUTER,
      FORGOT_PASSWORD_INTERNET,
      CONNECTION_ISSUE_ROUTER,
      CONNECT_HOME_ZONE,
      TRACK_COMPLAINT,
      TRACK_REQUEST,
      UPGRADE_ROUTER,
      UPGRADE_PACKAGE,
    ],
  },
  FD: {
    landingPageCards: [INTERNET_ISSUES, PHONE_ISSUES, OTHER_ISSUES, PASSWORD_ISSUES],
    quickLinkCard: [
      INSTALL_NEW_ROUTER,
      FACTORY_RESET_ROUTER,
      FORGOT_PASSWORD_INTERNET,
      CONNECTION_ISSUE_ROUTER,
      CONNECT_HOME_ZONE,
      TRACK_COMPLAINT,
      TRACK_REQUEST,
      UPGRADE_ROUTER,
      UPGRADE_PACKAGE,
    ],
  },
  FH: {
    landingPageCards: [INTERNET_ISSUES, PASSWORD_ISSUES],
    quickLinkCard: [
      INSTALL_NEW_ROUTER,
      FACTORY_RESET_ROUTER,
      FORGOT_PASSWORD_INTERNET,
      CONNECTION_ISSUE_ROUTER,
      CONNECT_HOME_ZONE,
      TRACK_COMPLAINT,
      TRACK_REQUEST,
      UPGRADE_ROUTER,
      UPGRADE_PACKAGE,
    ],
  },
  FT: {
    landingPageCards: [INTERNET_ISSUES, TV_ISSUES, PHONE_ISSUES, OTHER_ISSUES, PASSWORD_ISSUES],
    quickLinkCard: [
      INSTALL_NEW_ROUTER,
      FACTORY_RESET_ROUTER,
      FACTORY_RESET_TV,
      FORGOT_PASSWORD_INTERNET,
      CONNECTION_ISSUE_ROUTER,
      FORGOT_PASSWORD_TV,
      TRANSFER_PACKAGE_TV,
      CONNECT_HOME_ZONE,
      TRACK_COMPLAINT,
      TRACK_REQUEST,
      UPGRADE_ROUTER,
      UPGRADE_PACKAGE,
    ],
  },
  FV: {
    landingPageCards: [PHONE_ISSUES, RESET_PIN],
    quickLinkCard: [CONNECT_HOME_ZONE, TRACK_COMPLAINT, TRACK_REQUEST],
  },
  BSP: {
    landingPageCards: [TV_ISSUES, RESET_PIN],
    quickLinkCard: [FACTORY_RESET_TV, FORGOT_PASSWORD_TV, TRANSFER_PACKAGE_TV, CONNECT_HOME_ZONE, TRACK_COMPLAINT, TRACK_REQUEST],
  },
  BTP: {
    landingPageCards: [INTERNET_ISSUES, TV_ISSUES, PHONE_ISSUES, OTHER_ISSUES, PASSWORD_ISSUES],
    quickLinkCard: [
      INSTALL_NEW_ROUTER,
      FACTORY_RESET_ROUTER,
      FACTORY_RESET_TV,
      FORGOT_PASSWORD_INTERNET,
      CONNECTION_ISSUE_ROUTER,
      FORGOT_PASSWORD_TV,
      TRANSFER_PACKAGE_TV,
      CONNECT_HOME_ZONE,
      TRACK_COMPLAINT,
      TRACK_REQUEST,
      UPGRADE_ROUTER,
      UPGRADE_PACKAGE,
    ],
  },
  BDP: {
    landingPageCards: [INTERNET_ISSUES, PHONE_ISSUES, OTHER_ISSUES, PASSWORD_ISSUES],
    quickLinkCard: [
      INSTALL_NEW_ROUTER,
      FACTORY_RESET_ROUTER,
      FORGOT_PASSWORD_INTERNET,
      CONNECTION_ISSUE_ROUTER,
      CONNECT_HOME_ZONE,
      TRACK_COMPLAINT,
      TRACK_REQUEST,
      UPGRADE_ROUTER,
      UPGRADE_PACKAGE,
    ],
  },
  BFXI: {
    landingPageCards: [INTERNET_ISSUES, PHONE_ISSUES, OTHER_ISSUES, PASSWORD_ISSUES],
    quickLinkCard: [
      INSTALL_NEW_ROUTER,
      FACTORY_RESET_ROUTER,
      FORGOT_PASSWORD_INTERNET,
      CONNECTION_ISSUE_ROUTER,
      CONNECT_HOME_ZONE,
      TRACK_COMPLAINT,
      TRACK_REQUEST,
      UPGRADE_ROUTER,
      UPGRADE_PACKAGE,
    ],
  },
};

export class ApplicableCodes {
  // public static landingPageCards: ICard[] = [
  //   {
  //     title: 'MESSAGES.INTERNET_ISSUES',
  //     body: 'MESSAGES.MY_WIFI_IS_SLOW_OR_CAUSING_PROBLEMS',
  //     img: 'assets/images/duo-tone-icons/icon_internet_issues.svg',
  //     applicableCodes: INTERNET_ISSUES,
  //     linkTo: 'info',
  //   },
  //   {
  //     title: 'MESSAGES.TV_ISSUES',
  //     body: 'MESSAGES.MY_TV_ISNT_WORKING_PROPERLY',
  //     img: 'assets/images/duo-tone-icons/icon_tv_issues.svg',
  //     applicableCodes: TV_ISSUES,
  //     linkTo: '#',
  //   },
  //   {
  //     title: 'MESSAGES.PHONE_ISSUE',
  //     body: 'MESSAGES.I_CANT_MAKE_ANY_CALLS',
  //     img: 'assets/images/duo-tone-icons/icon_telephone_issues.svg',
  //     applicableCodes: PHONE_ISSUES,
  //     linkTo: '#',
  //   },
  //   {
  //     title: 'MESSAGES.OTHER_ISSUES',
  //     body: 'MESSAGES.I_AM_FACING_ISSUES_WILL_ALL_SERVICE',
  //     img: 'assets/images/duo-tone-icons/icon_service_issues.svg',
  //     applicableCodes: OTHER_ISSUES,
  //     linkTo: '#',
  //   },
  //   {
  //     title: 'MESSAGES.PASSWORD_ISSUES',
  //     body: 'MESSAGES.I_WANT_TO_CHANGE_OR_RESET_MY_PASSWORD',
  //     img: 'assets/images/duo-tone-icons/icon_password_issues.svg',
  //     applicableCodes: PASSWORD_ISSUES,
  //     linkTo: '#',
  //   },
  //   {
  //     title: 'MESSAGES.RESET_PIN',
  //     body: 'MESSAGES.I_WANT_TO_RESET_MY_PIN',
  //     img: 'assets/images/duo-tone-icons/icon_password_issues.svg',
  //     applicableCodes: RESET_PIN,
  //     linkTo: '#',
  //   },
  // ];
  // public static quickLinkCards: ICard[] = [
  //   {
  //     body: 'QUICK_LINKS.I_WANT_TO_INSTALL_MY_NEW_ROUTER',
  //     applicableCodes: INSTALL_NEW_ROUTER,
  //     linkTo: '',
  //   },
  //   {
  //     body: 'QUICK_LINKS.I_WANT_TO_FACTORY_RESET_MY_ROUTER',
  //     applicableCodes: FACTORY_RESET_ROUTER,
  //     linkTo: '',
  //   },
  //   {
  //     body: 'QUICK_LINKS.I_WANT_TO_FACTORY_RESET_MY_TV_BOX',
  //     applicableCodes: FACTORY_RESET_TV,
  //     linkTo: '',
  //   },
  //   {
  //     body: 'QUICK_LINKS.I_FORGOT_MY_INTERNET_PASSWORD',
  //     applicableCodes: FORGOT_PASSWORD_INTERNET,
  //     linkTo: '',
  //   },
  //   {
  //     body: 'QUICK_LINKS.I_AM_UNABLE_TO_CONNECT_DEVICES_TO_MY_ROUTERS_WIFI',
  //     applicableCodes: CONNECTION_ISSUE_ROUTER,
  //     linkTo: '',
  //   },
  //   {
  //     body: 'QUICK_LINKS.I_FORGOT_MY_TV_BOX_PIN',
  //     applicableCodes: FORGOT_PASSWORD_TV,
  //     linkTo: '',
  //   },
  //   {
  //     body: 'QUICK_LINKS.I_WANT_TO_TRANSFER_ELIFE_TV_PACKAGE_TO_ANOTHER_TV_BOX',
  //     applicableCodes: TRANSFER_PACKAGE_TV,
  //     linkTo: '',
  //   },
  //   {
  //     body: 'QUICK_LINKS.I_AM_UNABLE_TO_CONNECT_TO_HOME_ZONE',
  //     applicableCodes: CONNECT_HOME_ZONE,
  //     linkTo: '',
  //   },
  //   {
  //     body: 'QUICK_LINKS.I_WANT_TO_TRACK_A_RECENT_COMPLAINT',
  //     applicableCodes: TRACK_COMPLAINT,
  //     linkTo: '',
  //   },
  //   {
  //     body: 'QUICK_LINKS.I_WANT_TO_TRACK_MY_REQUEST',
  //     applicableCodes: TRACK_REQUEST,
  //     linkTo: '',
  //   },
  //   {
  //     body: 'QUICK_LINKS.I_WANT_TO_UPGRADE_MY_ROUTER',
  //     applicableCodes: UPGRADE_ROUTER,
  //     linkTo: '',
  //   },
  //   {
  //     body: 'QUICK_LINKS.I_WANT_TO_UPGRADE_MY_ELIFE_PACKAGE',
  //     applicableCodes: UPGRADE_PACKAGE,
  //     linkTo: '',
  //   },
  // ];

  public static openServiceRequestTemplate: ISection2Template[] = [
    {
      title: 'MESSAGES.REQUEST_NO',
      type: 'number',
      objKeyNameEN: 'reqNo',
    },
    {
      title: 'MESSAGES.REQUEST_TYPE',
      type: 'text',
      objKeyNameEN: 'requestType',
    },
    {
      title: 'MESSAGES.DATE_VISIT',
      type: 'date',
      objKeyNameEN: 'dateOfVisit',
    },
    {
      title: 'MESSAGES.STATUS',
      type: 'text',
      objKeyNameEN: 'status',
    },
  ];

  public static openServiceRequestTemplateCompliant: ISection2Template[] = [
    {
      title: 'MESSAGES.COMPLAINT_NO',
      type: 'number',
      objKeyNameEN: 'complaintNo',
    },
    {
      title: 'MESSAGES.DATE_VISIT',
      type: 'date',
      objKeyNameEN: 'dateOfVisit',
    },
    {
      title: 'MESSAGES.STATUS',
      type: 'text',
      objKeyNameEN: 'status',
    },
  ];

  public static complaintDetailsTarckComplaintTemplate: ISection2Template[] = [
    {
      title: 'MESSAGES.REFERENCE_NO',
      type: 'number',
      objKeyNameEN: 'referecneNo',
    },
    {
      title: 'MESSAGES.DATE_VISIT',
      type: 'date',
      objKeyNameEN: 'dateOfVisit',
    },
    {
      title: 'MESSAGES.APPOINTMENT_DETAILS',
      type: 'text',
      objKeyNameEN: 'appointmentDetails',
    },
  ];

  public static appointmentSetSuccessfullyTarckRequestTemplate: ISection2Template[] = [
    {
      title: 'MESSAGES.APOINTMENT_DATE',
      type: 'text',
      objKeyNameEN: 'appointmentDate',
    },
    {
      title: 'MESSAGES.APPOINTMENT_TIME_SLOT',
      type: 'text',
      objKeyNameEN: 'appointmentTimeSlot',
    },
  ];

  public static complaintDetailsResolvedTarckComplaintTemplate: ISection2Template[] = [
    {
      title: 'MESSAGES.REFERENCE_NO',
      type: 'number',
      objKeyNameEN: 'referecneNo',
    },

    {
      title: 'MESSAGES.RESOLVED_DATE',
      type: 'date',
      objKeyNameEN: 'resolvedDetails',
    },
  ];

  public static routerNotReachableTemplate: ISection2Template[] = [
    {
      title: 'MESSAGES.ROUTER_NAME',
      type: 'text',
      objKeyNameEN: 'routerName',
    },
    {
      title: 'MESSAGES.ROUTER_MODEL',
      type: 'text',
      objKeyNameEN: 'routerModel',
    },
  ];

  public static appointBookSuccessfullyTemplate: ISection2Template[] = [
    {
      title: 'MESSAGES.REFERENCE_NO',
      type: 'number',
      objKeyNameEN: 'referenceNo',
    },
    {
      title: 'MESSAGES.DATE_OF_VISIT',
      type: 'date',
      objKeyNameEN: 'dateOfVisit',
    },
    {
      title: 'MESSAGES.STATUS',
      type: 'text',
      objKeyNameEN: 'status',
    },
  ];

  public static installNewRouterComplaintBookSuccessfullyTemplate: ISection2Template[] = [
    {
      title: 'MESSAGES.REFERENCE_NO',
      type: 'number',
      objKeyNameEN: 'referenceNo',
    },
    {
      title: 'MESSAGES.DATE_OF_VISIT',
      type: 'date',
      objKeyNameEN: 'dateOfVisit',
    },
    {
      title: 'MESSAGES.STATUS',
      type: 'text',
      objKeyNameEN: 'status',
    },
  ];

  public static requestDetailsTemplate: ISection2Template[] = [
    {
      title: 'MESSAGES.REFERENCE_NO',
      type: 'number',
      objKeyNameEN: 'referenceNo',
    },
    {
      title: 'MESSAGES.DATE_CREATED',
      type: 'date',
      objKeyNameEN: 'dateCreated',
    },
    {
      title: 'MESSAGES.APPOINTMENT_DETAILS',
      type: 'text',
      objKeyNameEN: 'details',
    },
  ];

  public static requestAlreadyExistsTemplate: ISection2Template[] = [
    {
      title: 'MESSAGES.APPOINTMENT_DATE',
      type: 'date',
      objKeyNameEN: 'appointmentDate',
    },
    {
      title: 'MESSAGES.APPOINTMENT_TIME_SLOT',
      type: 'time',
      objKeyNameEN: 'appointmentTime',
    },
  ];

  public static appointmentChangedSuccessTemplate: ISection2Template[] = [
    {
      title: 'MESSAGES.DATE',
      type: 'date',
      objKeyNameEN: 'date',
    },
    {
      title: 'MESSAGES.TIME',
      type: 'time',
      objKeyNameEN: 'time',
    },
  ];

  public static serviceUnavailableTemplate: ISection2Template[] = [
    {
      title: 'MESSAGES.EXPECTED_DATE_OF_COMPLETION',
      type: 'date',
      objKeyNameEN: 'expecDateOfCompletion',
    },
  ];
  public static OpenServiceRequestTemplate: ISection2Template[] = [
    {
      title: 'MESSAGES.REFERENCE_NO',
      type: 'number',
      objKeyNameEN: 'referenceNo',
    },
    {
      title: 'MESSAGES.DATE_OF_VISIT',
      type: 'date',
      objKeyNameEN: 'dateOfVisit',
    },
    {
      title: 'MESSAGES.LOCATION',
      type: 'text',
      objKeyNameEN: 'location',
    },
  ];

  public static packageUpgradeTemplate: ISection2Template[] = [
    {
      title: 'MESSAGES.REFERENCE_NO',
      type: 'number',
      objKeyNameEN: 'referenceNo',
    },
  ];

  public static thirdPartyUpgradeTemplate: ISection2Template[] = [
    {
      title: 'MESSAGES.REFERENCE_NO',
      type: 'number',
      objKeyNameEN: 'referenceNo',
    },
  ];

  public static routerUpgradeTemplate: ISection2Template[] = [
    {
      title: 'MESSAGES.REFERENCE_NO',
      type: 'number',
      objKeyNameEN: 'referenceNo',
    },
  ];

  public static routerPackageUpgradeTemplate: ISection2Template[] = [
    {
      title: 'MESSAGES.REFERENCE_NO',
      type: 'number',
      objKeyNameEN: 'referenceNo',
    },
  ];

  public static thirdPartyRouterUpgradeTemplate: ISection2Template[] = [
    {
      title: 'MESSAGES.REFERENCE_NO',
      type: 'number',
      objKeyNameEN: 'referenceNo',
    },
  ];

  public static userCredentialsTemplate: ISection2Template[] = [
    {
      title: 'MESSAGES.USER_ID',
      type: 'text',
      objKeyNameEN: 'userId',
    },
    {
      title: 'MESSAGES.PIN',
      type: 'text',
      objKeyNameEN: 'pin',
    },
  ];
}

////////For Password Matching with Confirm Passwords
export function ConfirmedValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

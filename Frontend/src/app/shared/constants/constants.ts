import { FormGroup } from '@angular/forms';

import { IMotvieSubscription, ISection2Template } from './types';

export class RoutingPaths {
  public static readonly routerInstallSuccessfully: string = 'router-install-successfully';
  public static readonly installNewRouter: string = 'install-new-router';
}

export const TS_OUTCOME_NO_ISSUE = 'No Issue found';
export const TS_OUTCOME_ISSUE_FOUND_FIXED = 'Issue found and fixed';
export const TS_OUTCOME_ISSUE_FOUND_NOT_FIXED = 'Issue found and not fixed';

export const QUICK_ACTION = {
  RESET_INTERNET_PASSWORD: 'Reset Internet Password',
  UPDATE_WIFI_CONFIGURATION: 'Update Wi Fi Configuration',
  PORT_MIGRATION_AND_NEW_ROUTER_INSTALLATION: 'Port Migration/New Router Installation',
  RESET_STB_ADMIN_PIN: 'Reset STB Admin Pin',
  RESET_ELIFEON_PASSWORD: 'Reset eLifeOn Password',
  TRANSFER_IPTV_PACKAGE: 'Transfer IPTV Package',
  RESET_CCP_PIN_CODE: 'Reset CCP Pin Code',
  SR_FOLLOWUP: 'SR FollowUp',
  COMPLAINT_FOLLOWUP: 'Complaint followup',
  ONT_REBOOT: 'ONT Reboot',
  ROUTER_REBOOT: 'Router Reboot',
  PNP_FACTORY_RESET: 'PnP Factory Reset',
  STB_REBOOT: 'STB Reboot',
  HP_AP_REBOOT: 'HP AP Reboot',
  STB_RESET: 'STB Reset',
};

export const flowCodes = {
  CI14:'CI14',
  CI13: 'CI13',
  QAHSIWIFI: 'QA-HSI-WIFI', //Update Wi Fi Configuration (Success)
  QAHSIWIFI5: 'QA-HSI-WIFI5', //Update Wi Fi Configuration (Failure)
  QAHSIWIFI8: 'QA-HSI-WIFI8', //update wi fi configuration is input required
  QAHSIWIFI1: 'QA-HSI-WIFI1',
  QAHSIWIFI2: 'QA-HSI-WIFI2', // update wi fi configuration  Home zone
  STAGE2IR: 'Stage2 - IR',
  genericError: 'G11E24',
  accountNotActive: 'E2ECRM141',
  CI9: 'CI9',
  CI4: 'CI4',
  openComplaint: 'CI11',
  routerRebootSuccess: 'CI12',
  routerRebootFaliure: 'CI121',
  ontRebootFaliure: 'CI122',
  stbRebootFaliure: 'CI123',
  movingElifeConnection: 'E2ECRM231',
  ElifeCancellationRequest: 'E2ECRM232',
  accountTemporarilyDisconnected: 'E2ECRM141',
  outage: 'E2ENI21',
  issueNotFixed: 'CI71',
  CI72: 'CI72',
  CI73: 'CI73',
  UPSEL1: 'UPSEL1',
  UPSEL2: 'UPSEL2',
  UPSEL3: 'UPSEL3',
  UPSEL4: 'UPSEL4',
  UPSEL5: 'UPSEL5',
  UPSEL6: 'UPSEL6',
  UPSEL7: 'UPSEL7',
  UPSEL8: 'UPSEL8',
  UPSEL9: 'UPSEL9',
  CI122: 'CI122',
  CI123: 'CI123',
  QAIPTVPIN: 'QA-IPTV-PIN', //Forgot TV Admin Pin Success
  QAIPTVPIN3: 'QA-IPTV-PIN3', //Forgot TV Admin Pin Success  //is not reachable, manual reboot is required
  QAIPTVPIN4: 'QA-IPTV-PIN4', //Forgot TV Admin Pin Success // reboot has failed after STB PIN Code reset
  QAIPTVPIN5: 'QA-IPTV-PIN5', //Forgot TV Admin Pin Success //PIN code reset successfully, SMS was not sent successfully
  QAIPTVPIN6: 'QA-IPTV-PIN6', //Forgot TV Admin Pin Success // PIN code reset successfully, SMS was sent successfully
  QAIPTVPIN1: 'QA-IPTV-PIN1', //Forgot TV Admin Pin Failure
  QAIPTVELON: 'QA-IPTV-EL-ON', //  unable to login to elife on Success
  QAIPTVELON1: 'QA-IPTV-EL-ON1', //  unable to login to elife on Failure
  QAIPTVPT3: 'QA-IPTV-PT3', //QA-IPTV-PT3 (stb-detail success screencode)
  QAIPTVPT: 'QA-IPTV-PT', //QA-IPTV-PT (next-step confirm transfer success)
  QAIPTVPT1: 'QA-IPTV-PT1', //QA-IPTV-PT1 (stb-detail and next-step confirm failure)
  QAHSIPnPFR: 'QA-HSI-PnPFR', // reset factory router (Success)
  QAHSIPnPFR5: 'QA-HSI-PnPFR5', // reset factory router (intermediate)
  QAHSIPnPFR1: 'QA-HSI-PnPFR1', // reset factory router (Failure)
  QAHSIPR: 'QA-HSI-PR', // Internet Password Reset (Success)
  QAHSIPR1: 'QA-HSI-PR1', // Internet Password Reset (Failure)
  QAVOICECCB1: 'QA-VOICE-CCB1', // for ccb pin failed
  QAVOICECCB2: 'QA-VOICE-CCB2', // for ccb pin failed
  QAVOICECCB4: 'QA-VOICE-CCB4', // for ccb pin failed TRY AGAIN
  QAVOICECCB: 'QA-VOICE-CCB', //for ccb pin success
  CI11: 'CI11',
  
  QASTBR: 'QA-STBR', //FOR stb rebbot success
  QASTBR1: 'QA-STBR1', //FOR stb rebbot success
  QASTBSR3: 'QA-STBSR3', //STB soft reset successfull
  QASTBSR4: 'QA-STBSR4', //STB soft reset successfull

  QANRINST: 'QA-NR-INST', //Install new router  Success
  QANRINST1: 'QA-NR-INST1', //Install new router failer
  QANRINST8: 'QA-NR-INST8', //Unknown Issue / Error
  QANRINST9: 'QA-NR-INST9', //Install new router  Success
  QANRINST10: 'QA-NR-INST10', //Installing new Router / Had a pending request
  QANRINST11: 'QA-NR-INST11', //Router Installation failed
  QANRINST16: 'QA-NR-INST16', //Router Installation failed
  QANRINST17: 'QA-NR-INST17', //Router Installation Success
  DCSS1: 'DCSS1', //Install new router Device care
  DCSS2: 'DCSS2', //Install new router Device care
  QANRINST12: 'QA-NR-INST12', //		DCSS invokation for manual router installation    App.MotiveH&S.5.1.3

  QACOMFU2: 'QA-COM-FU2', //Track a recent complaint SuCcess
  QACOMFU4: 'QA-COM-FU4',
  QACOMFU3: 'QA-COM-FU3',
  QACOMFU1: 'QA-COM-FU1', //Track a recent complaint failure
  QACOMFU: 'QA-COM-FU',
  OPENED: 'OPENED', //Complain status opened

  QASRFU2: 'QA-SR-FU2', // SR Followup success
  //QACOMFU1: 'QA_COM_FU1', //SR followup failure

  ////motive/troubleshoot/sr-followup?srNo returned cases
  E2ECRM31: 'E2ECRM31',
  E2ECRM32: 'E2ECRM32',
  E2ECRM33: 'E2ECRM33',
  E2ECRM34: 'E2ECRM34',
  E2ECRM35: 'E2ECRM35',
  E2ECRM36: 'E2ECRM36',
  E2ECRM37: 'E2ECRM37',
  E2ECRM38: 'E2ECRM38',
  E2ECRM39: 'E2ECRM39',
  E2ECRM310: 'E2ECRM310',
  E2ECRM311: 'E2ECRM311',
  E2ECRM312: 'E2ECRM312',
  E2ECRM313: 'E2ECRM313',
  E2ECRM314: 'E2ECRM314',
  E2ECRM315: 'E2ECRM315',
  E2ECRM316: 'E2ECRM316',
  E2ECRM317: 'E2ECRM317',
  E2ECRM318: 'E2ECRM318',
  E2ECRM319: 'E2ECRM319',
  E2ECRM320: 'E2ECRM320',
  E2ECRM321: 'E2ECRM321',
  E2ECRM322: 'E2ECRM322',
  E2ECRM323: 'E2ECRM323',
  E2ECRM324: 'E2ECRM324',


///For Stage 3 TV REset tv box stb
STBR1:'STBR1',//soft reset is successful
STBR2:'STBR2',//soft reset is successful
STBR3:'STBR3',//soft reset is unsuccessful
STBR4:'STBR4',//soft reset is unsuccessful

QASTBFR3:'QA-STBFR3',
QASTBFR4:'QA-STBFR4',



E2ECRM11:'E2ECRM11', //For Error

E2ECRM22:'E2ECRM22',
E2ECRM23:'E2ECRM23'


};

export const ETISALAT = 'Etisalat';
export const ONT = 'Fiber Box';
export const ROUTER = 'Router';
export const STB = 'STB';
export const PHONE = 'phone';
export const OWN_ROUTER = 'Etisalat Router';
export const THIRD_PARTY_ROUTER = 'Third Party Router';

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
    default: './assets/images/network-map-icons/icon_phone_default.svg',
    okay: './assets/images/network-map-icons/icon_phone_all_okay.svg',
  },
  stb: {
    default: './assets/images/STB/DWI211ETI.png', //To do set it to svc as others
  },
  desktop: {
    default: './assets/images/network-map-icons/icon_desktop_default.svg',
    okay: './assets/images/network-map-icons/icon_desktop_all_okay.svg',
  }
};

export const ETISALAT_DEFAULT_CONFIG = {
  url: SVGs.etisalat.default,
  className: networkDiagramClasses.default,
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
  //  linkTo: '/issues/internet/install-new-router',
  linkTo: 'install-new-router',
  nextSignal: QUICK_ACTION.PORT_MIGRATION_AND_NEW_ROUTER_INSTALLATION,
};
const FACTORY_RESET_ROUTER = {
  body: 'QUICK_LINKS.I_WANT_TO_FACTORY_RESET_MY_ROUTER',
  linkTo: '/issues/internet/router-reset-factory',
  nextSignal: QUICK_ACTION.PNP_FACTORY_RESET,
  directCall: true,
};
const FACTORY_RESET_TV = {
  body: 'QUICK_LINKS.I_WANT_TO_FACTORY_RESET_MY_TV_BOX',
  linkTo: 'issues/tv/quick-tv-box-package-transfer',
  nextSignal: QUICK_ACTION.STB_REBOOT,
};
const ELIFE_ON_PIN_RESET = {
  body: 'QUICK_LINKS.I_WANT_TO_RESET_ELIFE_ON_PIN',
  linkTo: 'issues/tv/pin-reset-failed',
  nextSignal: QUICK_ACTION.RESET_ELIFEON_PASSWORD,
  directCall: true,
};

const FORGOT_PASSWORD_INTERNET = {
  body: 'QUICK_LINKS.I_FORGOT_MY_INTERNET_PASSWORD',
  linkTo: '/issues/internet/internet-password-reset',
  nextSignal: QUICK_ACTION.RESET_INTERNET_PASSWORD,
  directCall: true,
};
const CONNECTION_ISSUE_ROUTER = {
  body: 'QUICK_LINKS.I_AM_UNABLE_TO_CONNECT_DEVICES_TO_MY_ROUTERS_WIFI',
  linkTo: '/issues/internet/unable-to-connnect-wifi-network',
  nextSignal: QUICK_ACTION.UPDATE_WIFI_CONFIGURATION,
  value: 'quickLinkUnableToConnect',
};
const FORGOT_PASSWORD_TV = {
  body: 'QUICK_LINKS.I_FORGOT_MY_TV_BOX_PIN',
  linkTo: 'issues/tv/quick-reset-admin-pin-package-transfer',
  nextSignal: QUICK_ACTION.RESET_STB_ADMIN_PIN,
};
const TRANSFER_PACKAGE_TV = {
  body: 'QUICK_LINKS.I_WANT_TO_TRANSFER_ELIFE_TV_PACKAGE_TO_ANOTHER_TV_BOX',
  linkTo: 'issues/tv/quick-transfer-channel-to-another-tvBox',
  nextSignal: QUICK_ACTION.TRANSFER_IPTV_PACKAGE,
};
const CONNECT_HOME_ZONE = {
  body: 'QUICK_LINKS.I_AM_UNABLE_TO_CONNECT_TO_HOME_ZONE',
  // linkTo: 'issues/internet/unable-to-connect-to-homezone',
  linkTo: '/issues/internet/stage2/reset-wifi-password',
  nextSignal: QUICK_ACTION.UPDATE_WIFI_CONFIGURATION,
  
};
const TRACK_COMPLAINT = {
  body: 'QUICK_LINKS.I_WANT_TO_TRACK_A_RECENT_COMPLAINT',
  linkTo: 'track-complaint/complaint-details-message',
  nextSignal: QUICK_ACTION.COMPLAINT_FOLLOWUP,
  directCall: true,
};
const TRACK_REQUEST = {
  body: 'QUICK_LINKS.I_WANT_TO_TRACK_MY_REQUEST',
  linkTo: 'track-request/open-srs',
  nextSignal: QUICK_ACTION.SR_FOLLOWUP,
  directCall: true,
};
const UPGRADE_ROUTER = {
  body: 'QUICK_LINKS.I_WANT_TO_UPGRADE_MY_ROUTER',
  linkTo: 'issues/internet/router-upgrade',
  isDeepLink: true,
};
const UPGRADE_PACKAGE = {
  body: 'QUICK_LINKS.I_WANT_TO_UPGRADE_MY_ELIFE_PACKAGE',
  linkTo: 'issues/tv/eLife-upgrade',
  isDeepLink: true,
};

export const motiveSubscriptions: IMotvieSubscription = {
  '3P': {
    landingPageCards: [INTERNET_ISSUES, TV_ISSUES, PHONE_ISSUES, OTHER_ISSUES, PASSWORD_ISSUES],
    quickLinkCard: [
      // INSTALL_NEW_ROUTER,
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
      // UPGRADE_ROUTER,
      // UPGRADE_PACKAGE,
    ],
  },
  '2P': {
    landingPageCards: [INTERNET_ISSUES, PHONE_ISSUES, OTHER_ISSUES, PASSWORD_ISSUES],
    quickLinkCard: [
      // INSTALL_NEW_ROUTER,
      FACTORY_RESET_ROUTER,
      FORGOT_PASSWORD_INTERNET,
      CONNECTION_ISSUE_ROUTER,
      CONNECT_HOME_ZONE,
      TRACK_COMPLAINT,
      TRACK_REQUEST,
      // UPGRADE_ROUTER,
      // UPGRADE_PACKAGE,
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
  'VO': {
    landingPageCards: [PHONE_ISSUES, RESET_PIN],
    quickLinkCard: [CONNECT_HOME_ZONE, TRACK_COMPLAINT, TRACK_REQUEST],
  },
  'HI': {
    landingPageCards: [INTERNET_ISSUES, PASSWORD_ISSUES],
    quickLinkCard: [
      // INSTALL_NEW_ROUTER,
      FACTORY_RESET_ROUTER,
      FORGOT_PASSWORD_INTERNET,
      CONNECTION_ISSUE_ROUTER,
      CONNECT_HOME_ZONE,
      TRACK_COMPLAINT,
      TRACK_REQUEST,
      // UPGRADE_ROUTER,
      // UPGRADE_PACKAGE,
    ],
  },
  'B1': {
    landingPageCards: [INTERNET_ISSUES, PASSWORD_ISSUES],
    quickLinkCard: [
      // INSTALL_NEW_ROUTER,
      FACTORY_RESET_ROUTER,
      FORGOT_PASSWORD_INTERNET,
      CONNECTION_ISSUE_ROUTER,
      CONNECT_HOME_ZONE,
      TRACK_COMPLAINT,
      TRACK_REQUEST,
      // UPGRADE_ROUTER,
      // UPGRADE_PACKAGE,
    ],
  },
  'FD': {
    landingPageCards: [INTERNET_ISSUES, PHONE_ISSUES, OTHER_ISSUES, PASSWORD_ISSUES],
    quickLinkCard: [
      // INSTALL_NEW_ROUTER,
      FACTORY_RESET_ROUTER,
      FORGOT_PASSWORD_INTERNET,
      CONNECTION_ISSUE_ROUTER,
      CONNECT_HOME_ZONE,
      TRACK_COMPLAINT,
      TRACK_REQUEST,
      // UPGRADE_ROUTER,
      // UPGRADE_PACKAGE,
    ],
  },
  'FH': {
    landingPageCards: [INTERNET_ISSUES, PASSWORD_ISSUES],
    quickLinkCard: [
      // INSTALL_NEW_ROUTER,
      FACTORY_RESET_ROUTER,
      FORGOT_PASSWORD_INTERNET,
      CONNECTION_ISSUE_ROUTER,
      CONNECT_HOME_ZONE,
      TRACK_COMPLAINT,
      TRACK_REQUEST,
      // UPGRADE_ROUTER,
      // UPGRADE_PACKAGE,
    ],
  },
  'FT': {
    landingPageCards: [INTERNET_ISSUES, TV_ISSUES, PHONE_ISSUES, OTHER_ISSUES, PASSWORD_ISSUES],
    quickLinkCard: [
      // INSTALL_NEW_ROUTER,
      FACTORY_RESET_ROUTER,
      FACTORY_RESET_TV,
      FORGOT_PASSWORD_INTERNET,
      CONNECTION_ISSUE_ROUTER,
      FORGOT_PASSWORD_TV,
      TRANSFER_PACKAGE_TV,
      CONNECT_HOME_ZONE,
      TRACK_COMPLAINT,
      TRACK_REQUEST,
      // UPGRADE_ROUTER,
      // UPGRADE_PACKAGE,
    ],
  },
  'FV': {
    landingPageCards: [PHONE_ISSUES, RESET_PIN],
    quickLinkCard: [CONNECT_HOME_ZONE, TRACK_COMPLAINT, TRACK_REQUEST],
  },
  'BSP': {
    landingPageCards: [TV_ISSUES, RESET_PIN],
    quickLinkCard: [FACTORY_RESET_TV, FORGOT_PASSWORD_TV, TRANSFER_PACKAGE_TV, CONNECT_HOME_ZONE, TRACK_COMPLAINT, TRACK_REQUEST],
  },
  'BTP': {
    landingPageCards: [INTERNET_ISSUES, TV_ISSUES, PHONE_ISSUES, OTHER_ISSUES, PASSWORD_ISSUES],
    quickLinkCard: [
      // INSTALL_NEW_ROUTER,
      FACTORY_RESET_ROUTER,
      FACTORY_RESET_TV,
      FORGOT_PASSWORD_INTERNET,
      CONNECTION_ISSUE_ROUTER,
      FORGOT_PASSWORD_TV,
      TRANSFER_PACKAGE_TV,
      CONNECT_HOME_ZONE,
      TRACK_COMPLAINT,
      TRACK_REQUEST,
      // UPGRADE_ROUTER,
      // UPGRADE_PACKAGE,
    ],
  },
  'BDP': {
    landingPageCards: [INTERNET_ISSUES, PHONE_ISSUES, OTHER_ISSUES, PASSWORD_ISSUES],
    quickLinkCard: [
      // INSTALL_NEW_ROUTER,
      FACTORY_RESET_ROUTER,
      FORGOT_PASSWORD_INTERNET,
      CONNECTION_ISSUE_ROUTER,
      CONNECT_HOME_ZONE,
      TRACK_COMPLAINT,
      TRACK_REQUEST,
      // UPGRADE_ROUTER,
      // UPGRADE_PACKAGE,
    ],
  },
  'BFXI': {
    landingPageCards: [INTERNET_ISSUES, PHONE_ISSUES, OTHER_ISSUES, PASSWORD_ISSUES],
    quickLinkCard: [
      // INSTALL_NEW_ROUTER,
      FACTORY_RESET_ROUTER,
      FORGOT_PASSWORD_INTERNET,
      CONNECTION_ISSUE_ROUTER,
      CONNECT_HOME_ZONE,
      TRACK_COMPLAINT,
      TRACK_REQUEST,
      // UPGRADE_ROUTER,
      // UPGRADE_PACKAGE,
    ],
  },
};

export class ApplicableCodes {
  public static openServiceRequestTemplate: ISection2Template[] = [
    {
      title: 'MESSAGES.REQUEST_NO',
      type: 'number',
      objKeyNameEN: 'reqNo',
    },
    {
      title: 'MESSAGES.REQUEST_TYPE',
      type: 'text',
      objKeyNameEN: 'reqType',
    },
    // {
    //   title: 'MESSAGES.DATE_VISIT',
    //   type: 'date',
    //   objKeyNameEN: 'dateOfVisit',
    // },
    // {
    //   title: 'MESSAGES.STATUS',
    //   type: 'text',
    //   objKeyNameEN: 'status',
    // },
  ];

  public static openServiceRequestTemplateCompliant: ISection2Template[] = [
    {
      title: 'MESSAGES.COMPLAINT_NO',
      type: 'number',
      objKeyNameEN: 'complaintNo',
    },
    // {
    //   title: 'MESSAGES.DATE_VISIT',
    //   type: 'date',
    //   objKeyNameEN: 'dateOfVisit',
    // },
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
      objKeyNameEN: 'referenceNo',
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
    // {
    //   title: 'MESSAGES.APPOINTMENT_TIME_SLOT',
    //   type: 'text',
    //   objKeyNameEN: 'appointmentTimeSlot',
    // },
  ];

  public static complaintDetailsResolvedTarckComplaintTemplate: ISection2Template[] = [
    {
      title: 'MESSAGES.REFERENCE_NO',
      type: 'number',
      objKeyNameEN: 'referenceNo',
    },

    // {
    //   title: 'MESSAGES.RESOLVED_DATE',
    //   type: 'date',
    //   objKeyNameEN: 'resolvedDetails',
    // },
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
    // {
    //   title: 'MESSAGES.DATE_OF_VISIT',
    //   type: 'date',
    //   objKeyNameEN: 'dateOfVisit',
    // },
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
    // {
    //   title: 'MESSAGES.DATE_OF_VISIT',
    //   type: 'date',
    //   objKeyNameEN: 'dateOfVisit',
    // },
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
    // {
    //   title: 'MESSAGES.DATE_CREATED',
    //   type: 'date',
    //   objKeyNameEN: 'dateCreated',
    // },
  ];

  public static requestAlreadyExistsTemplate: ISection2Template[] = [
    {
      title: 'MESSAGES.APPOINTMENT_DATE',
      type: 'date',
      objKeyNameEN: 'appointmentDate',
    },
    // {
    //   title: 'MESSAGES.APPOINTMENT_TIME_SLOT',
    //   type: 'time',
    //   objKeyNameEN: 'appointmentTime',
    // },
  ];

  public static appointmentChangedSuccessTemplate: ISection2Template[] = [
    // {
    //   title: 'MESSAGES.DATE',
    //   type: 'date',
    //   objKeyNameEN: 'date',
    // },
    {
      title: 'MESSAGES.TIME',
      type: 'time',
      objKeyNameEN: 'time',
    },
  ];

  public static serviceUnavailableTemplate: ISection2Template[] = [
    // {
    //   title: 'MESSAGES.EXPECTED_DATE_OF_COMPLETION',
    //   type: 'date',
    //   objKeyNameEN: 'expecDateOfCompletion',
    // },
  ];
  public static OpenServiceRequestTemplate: ISection2Template[] = [
    {
      title: 'MESSAGES.REFERENCE_NO',
      type: 'number',
      objKeyNameEN: 'referenceNo',
    },
    // {
    //   title: 'MESSAGES.DATE_OF_VISIT',
    //   type: 'date',
    //   objKeyNameEN: 'dateOfVisit',
    // },
    // {
    //   title: 'MESSAGES.LOCATION',
    //   type: 'text',
    //   objKeyNameEN: 'location',
    // },
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

export class LandingProductCodes {
  public static readonly _3P = '3P';
  public static readonly _2P = '2P';
  public static readonly HI = 'HI';
  public static readonly B1 = 'B1';
  public static readonly BTP = 'BTP';
  public static readonly BDP = 'BDP';
  public static readonly BFXI = 'BFXI';
  public static readonly FD = 'FD';
  public static readonly FH = 'FH';
  public static readonly FT = 'FT';
  public static readonly _1P = '1P';
  public static readonly BSP = 'BSP';
}


export class LoaderScriptsEnum {
  public static readonly Landing='Landing';
 public static readonly I_WANT_TO_FACTORY_RESET_MY_TV_BOX='I_WANT_TO_FACTORY_RESET_MY_TV_BOX'; //I want to factory reset my TV box  ///App.MotiveH&S.5.2.6
 public static readonly I_WANTO_TO_FACTORY_RESET_MY_ROUTER='I_WANTO_TO_FACTORY_RESET_MY_ROUTER'; //I wanto to factory reset my router  ///App.MotiveH&S.5.3.6
 public static readonly ONT_REBOOT_REQUIRED='ONT_REBOOT_REQUIRED'; //ONT reboot required  ///App.MotiveH&S.3.5.2
 public static readonly TV_SET_TOP_BOX_RESTART_REQUIRED='TV_SET_TOP_BOX_RESTART_REQUIRED'; //TV set top box restart required  ///App.MotiveH&S.2.5.2
 public static readonly ALL_SERVICES_E2E_TROUBLESHOOTING='ALL_SERVICES_E2E_TROUBLESHOOTING'; //All services : Result 1 – Outage  ///App.MotiveH&S.6.0.1
 public static readonly INTERNET_E2E_TROUBLESHOOTING='INTERNET_E2E_TROUBLESHOOTING'; //Internet Open service request presente  ///App.MotiveH&S.1.1.1App.MotiveH&S.1.1.1A
 public static readonly ROUTER_REBOOT_REQUIRED='ROUTER_REBOOT_REQUIRED'; //Internet Router Reboot Required  ///App.MotiveH&S.1.5.3
 public static readonly ROUTER_RESET_REQUIRED='ROUTER_RESET_REQUIRED'; //Internet Router Reset Required  ///App.MotiveH&S.1.6.3
 public static readonly INTERNET_PASSWORD_RESET_REQUIRED='INTERNET_PASSWORD_RESET_REQUIRED'; //Internet Internet password reset required  ///App.MotiveH&S.1.7.3
 public static readonly WIFI_PASSWORD_RESET='WIFI_PASSWORD_RESET'; //Internet No issues   ///App.MotiveH&S.1.10.10
 public static readonly TV_E2E_TROUBLESHOOTING='TV_E2E_TROUBLESHOOTING'; //TV Main   ///App.MotiveH&S.2.1.1
 public static readonly TELEPHONE_E2E_TROUBLESHOOTING='TELEPHONE_E2E_TROUBLESHOOTING'; //Phone Main   ///App.MotiveH&S.3.1.1
 public static readonly ROUTER_MANAGED_BUT_NOT_REACHABLE ='ROUTER_MANAGED_BUT_NOT_REACHABLE'; //Internet Router managed but not reachable  ///App.MotiveH&S.1.8.1A
 public static readonly INTERNET_SERVICE_DETAIL ='INTERNET_SERVICE_DETAIL'; //Internet no issues service detail  ///DD.MotiveH&S.1.10.2
 public static readonly STB_NOT_REACHABLE ='STB_NOT_REACHABLE'; //TV  TV set top box bot reachable  ///dd.MotiveH&S.2.6.1
 public static readonly IPTV_SERVICE_DETAIL ='IPTV_SERVICE_DETAIL'; //TV  no issues continue troubleshoot  ///dd.MotiveH&S.2.7.2
}

export class TsOutcome{
  public static readonly NoIssues='No Issue found';
  public static readonly IssueFoundAndFixed='Issue found and fixed';
}
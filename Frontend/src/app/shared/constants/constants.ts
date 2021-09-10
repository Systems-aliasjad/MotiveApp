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

export enum ERoutingIds {
  noIssueTv,
  tvOutage,
  routerResetRequired,
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
  routerUpgradeRecommended,
  routerUpgradeRecommendedForm,
  routerUpgradeRequestSuccessfully,
  accountNotActive,
  outage,
  routerPackageUpgradeRecommended,
  routerPackageUpgradeRecommendedForm,
  routerPackageUpgradeRequestSuccessfully,
  noIssue,
  thirdPartyRouter,
  thirdPartyRouterForm,
  thirdPartyRouterSuccessfully,
  resetWifiPasswordSuccess,
  resetWifiPasswordForm,
  resetWifiPasswordFormSuccessfully,
  routerNotReachable,
  routerNotReachableForm,
  routerNotReachableFormSuccessfully,
  troubleshootComplete,
  tvPinUpdateSuccessfull,
  restELifeLoginPin,
  restELifeLoginPinResetSuccess,
  tvBoxNotReachable,
  tvBoxNotReachableTryAgain,
  tvBoxNotReachableForm,
  tvBoxNotReachableFormSuccessfully,
  routerRestart,
  routerDeviceCare,
  tvBoxRestartRequired,
  tvBoxRestartRequiredSuccessfully,
  tvBoxRestartRequiredManually,
  tvBoxRestartRequiredDeviceCare,
  enableWatchChannel,
  enableWatchChannelContinueTroubleshoot,
  tvBoxResetSuccessfully,
  enableWatchSpecificChannel,
  gameSessionCancelConfirmed,
  packageTransferSuccess,
  packageavailable,
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

export class ApplicableCodes {
  INTERNET_ISSUES = {
    title: 'LANDING_PAGE.INTERNET_ISSUES_TITLE',
    body: 'LANDING_PAGE.INTERNET_ISSUES_DESCRIPTION',
    img: 'assets/images/duo-tone-icons/icon_internet_issues.svg',
    linkTo: 'info',
  };

  TV_ISSUES = {
    title: 'LANDING_PAGE.TV_ISSUES_TITLE',
    body: 'LANDING_PAGE.TV_ISSUES_DESCRIPTION',
    img: 'assets/images/duo-tone-icons/icon_tv_issues.svg',
    linkTo: '#',
  };

  PHONE_ISSUES = {
    title: 'LANDING_PAGE.PHONE_ISSUES_TITLE',
    body: 'LANDING_PAGE.PHONE_ISSUES_DESCRIPTION',
    img: 'assets/images/duo-tone-icons/icon_telephone_issues.svg',
    linkTo: '#',
  };

  OTHER_ISSUES = {
    title: 'LANDING_PAGE.OTHER_ISSUES_TITLE',
    body: 'LANDING_PAGE.OTHER_ISSUES_DESCRIPTION',
    img: 'assets/images/duo-tone-icons/icon_service_issues.svg',
    linkTo: '#',
  };

  PASSWORD_ISSUES = {
    title: 'LANDING_PAGE.PASSWORD_ISSUES_TITLE',
    body: 'LANDING_PAGE.PASSWORD_ISSUES_DESCRIPTION',
    img: 'assets/images/duo-tone-icons/icon_password_issues.svg',
    linkTo: '#',
  };

  RESET_PIN = {
    title: 'LANDING_PAGE.RESET_PIN_TITLE',
    body: 'LANDING_PAGE.RESET_PIN_DESCRIPTION',
    img: 'assets/images/duo-tone-icons/icon_password_issues.svg',
    linkTo: '#',
  };

  INSTALL_NEW_ROUTER = {
    body: 'QUICK_LINKS.INSTALL_NEW_ROUTER',
    linkTo: '',
  };
  FACTORY_RESET_ROUTER = {
    body: 'QUICK_LINKS.FACTORY_RESET_ROUTER',
    linkTo: '',
  };
  FACTORY_RESET_TV = {
    body: 'QUICK_LINKS.FACTORY_RESET_TV',
    linkTo: '',
  };
  FORGOT_PASSWORD_INTERNET = {
    body: 'QUICK_LINKS.FORGOT_PASSWORD_INTERNET',
    linkTo: '',
  };
  CONNECTION_ISSUE_ROUTER = {
    body: 'QUICK_LINKS.CONNECTION_ISSUE_ROUTER',
    linkTo: '',
  };
  FORGOT_PASSWORD_TV = {
    body: 'QUICK_LINKS.FORGOT_PASSWORD_TV',
    linkTo: '',
  };
  TRANSFER_PACKAGE_TV = {
    body: 'QUICK_LINKS.TRANSFER_PACKAGE_TV',
    linkTo: '',
  };
  CONNECT_HOME_ZONE = {
    body: 'QUICK_LINKS.CONNECT_HOME_ZONE',
    linkTo: '',
  };
  TRACK_COMPLAINT = {
    body: 'QUICK_LINKS.TRACK_COMPLAINT',
    linkTo: '',
  };
  TRACK_REQUEST = {
    body: 'QUICK_LINKS.TRACK_REQUEST',
    linkTo: '',
  };
  UPGRADE_ROUTER = {
    body: 'QUICK_LINKS.UPGRADE_ROUTER',
    linkTo: '',
  };
  UPGRADE_PACKAGE = {
    body: 'QUICK_LINKS.UPGRADE_PACKAGE',
    linkTo: '',
  };

  motiveSubscriptions: IMotvieSubscription = {
    '3P': {
      landingPageCards: [this.TV_ISSUES, this.PHONE_ISSUES, this.OTHER_ISSUES, this.INTERNET_ISSUES, this.PASSWORD_ISSUES],
      quickLinkCard: [
        this.INSTALL_NEW_ROUTER,
        this.FACTORY_RESET_ROUTER,
        this.FACTORY_RESET_TV,
        this.FORGOT_PASSWORD_INTERNET,
        this.CONNECTION_ISSUE_ROUTER,
        this.FORGOT_PASSWORD_TV,
        this.TRANSFER_PACKAGE_TV,
        this.CONNECT_HOME_ZONE,
        this.TRACK_COMPLAINT,
        this.TRACK_REQUEST,
        this.UPGRADE_ROUTER,
        this.UPGRADE_PACKAGE,
      ],
    },
    '2P': {
      landingPageCards: [this.PHONE_ISSUES, this.OTHER_ISSUES, this.INTERNET_ISSUES, this.PASSWORD_ISSUES],
      quickLinkCard: [
        this.INSTALL_NEW_ROUTER,
        this.FACTORY_RESET_ROUTER,
        this.FORGOT_PASSWORD_INTERNET,
        this.CONNECTION_ISSUE_ROUTER,
        this.CONNECT_HOME_ZONE,
        this.TRACK_COMPLAINT,
        this.TRACK_REQUEST,
        this.UPGRADE_ROUTER,
        this.UPGRADE_PACKAGE,
      ],
    },
    '1P': {
      landingPageCards: [this.TV_ISSUES, this.RESET_PIN],
      quickLinkCard: [this.FACTORY_RESET_TV, this.FORGOT_PASSWORD_TV, this.TRANSFER_PACKAGE_TV, this.CONNECT_HOME_ZONE, this.TRACK_COMPLAINT, this.TRACK_REQUEST],
    },
    '0P': {
      landingPageCards: [this.TV_ISSUES, this.RESET_PIN],
      quickLinkCard: [this.CONNECT_HOME_ZONE, this.TRACK_COMPLAINT, this.TRACK_REQUEST],
    },
    VO: {
      landingPageCards: [this.PHONE_ISSUES, this.RESET_PIN],
      quickLinkCard: [this.CONNECT_HOME_ZONE, this.TRACK_COMPLAINT, this.TRACK_REQUEST],
    },
    H1: {
      landingPageCards: [this.INTERNET_ISSUES, this.PASSWORD_ISSUES],
      quickLinkCard: [
        this.INSTALL_NEW_ROUTER,
        this.FACTORY_RESET_ROUTER,
        this.FORGOT_PASSWORD_INTERNET,
        this.CONNECTION_ISSUE_ROUTER,
        this.CONNECT_HOME_ZONE,
        this.TRACK_COMPLAINT,
        this.TRACK_REQUEST,
        this.UPGRADE_ROUTER,
        this.UPGRADE_PACKAGE,
      ],
    },
    B1: {
      landingPageCards: [this.INTERNET_ISSUES, this.PASSWORD_ISSUES],
      quickLinkCard: [
        this.INSTALL_NEW_ROUTER,
        this.FACTORY_RESET_ROUTER,
        this.FORGOT_PASSWORD_INTERNET,
        this.CONNECTION_ISSUE_ROUTER,
        this.CONNECT_HOME_ZONE,
        this.TRACK_COMPLAINT,
        this.TRACK_REQUEST,
        this.UPGRADE_ROUTER,
        this.UPGRADE_PACKAGE,
      ],
    },
    FD: {
      landingPageCards: [this.INTERNET_ISSUES, this.PHONE_ISSUES, this.PASSWORD_ISSUES, this.OTHER_ISSUES],
      quickLinkCard: [
        this.INSTALL_NEW_ROUTER,
        this.FACTORY_RESET_ROUTER,
        this.FORGOT_PASSWORD_INTERNET,
        this.CONNECTION_ISSUE_ROUTER,
        this.CONNECT_HOME_ZONE,
        this.TRACK_COMPLAINT,
        this.TRACK_REQUEST,
        this.UPGRADE_ROUTER,
        this.UPGRADE_PACKAGE,
      ],
    },
    FH: {
      landingPageCards: [this.INTERNET_ISSUES, this.PASSWORD_ISSUES],
      quickLinkCard: [
        this.INSTALL_NEW_ROUTER,
        this.FACTORY_RESET_ROUTER,
        this.FORGOT_PASSWORD_INTERNET,
        this.CONNECTION_ISSUE_ROUTER,
        this.CONNECT_HOME_ZONE,
        this.TRACK_COMPLAINT,
        this.TRACK_REQUEST,
        this.UPGRADE_ROUTER,
        this.UPGRADE_PACKAGE,
      ],
    },
    FT: {
      landingPageCards: [this.INTERNET_ISSUES, this.TV_ISSUES, this.PHONE_ISSUES, this.OTHER_ISSUES, this.PASSWORD_ISSUES],
      quickLinkCard: [
        this.INSTALL_NEW_ROUTER,
        this.FACTORY_RESET_ROUTER,
        this.FACTORY_RESET_TV,
        this.FORGOT_PASSWORD_INTERNET,
        this.CONNECTION_ISSUE_ROUTER,
        this.FORGOT_PASSWORD_TV,
        this.TRANSFER_PACKAGE_TV,
        this.CONNECT_HOME_ZONE,
        this.TRACK_COMPLAINT,
        this.TRACK_REQUEST,
        this.UPGRADE_ROUTER,
        this.UPGRADE_PACKAGE,
      ],
    },
    FV: {
      landingPageCards: [this.PHONE_ISSUES, this.RESET_PIN],
      quickLinkCard: [this.CONNECT_HOME_ZONE, this.TRACK_COMPLAINT, this.TRACK_REQUEST],
    },
    BSP: {
      landingPageCards: [this.TV_ISSUES, this.RESET_PIN],
      quickLinkCard: [this.FACTORY_RESET_TV, this.FORGOT_PASSWORD_TV, this.TRANSFER_PACKAGE_TV, this.CONNECT_HOME_ZONE, this.TRACK_COMPLAINT, this.TRACK_REQUEST],
    },
    BTP: {
      landingPageCards: [this.INTERNET_ISSUES, this.TV_ISSUES, this.PHONE_ISSUES, this.OTHER_ISSUES, this.PASSWORD_ISSUES],
      quickLinkCard: [
        this.INSTALL_NEW_ROUTER,
        this.FACTORY_RESET_ROUTER,
        this.FACTORY_RESET_TV,
        this.FORGOT_PASSWORD_INTERNET,
        this.CONNECTION_ISSUE_ROUTER,
        this.FORGOT_PASSWORD_TV,
        this.TRANSFER_PACKAGE_TV,
        this.CONNECT_HOME_ZONE,
        this.TRACK_COMPLAINT,
        this.TRACK_REQUEST,
        this.UPGRADE_ROUTER,
        this.UPGRADE_PACKAGE,
      ],
    },
    BDP: {
      landingPageCards: [this.INTERNET_ISSUES, this.PHONE_ISSUES, this.OTHER_ISSUES, this.PASSWORD_ISSUES],
      quickLinkCard: [
        this.INSTALL_NEW_ROUTER,
        this.FACTORY_RESET_ROUTER,
        this.FORGOT_PASSWORD_INTERNET,
        this.CONNECTION_ISSUE_ROUTER,
        this.CONNECT_HOME_ZONE,
        this.TRACK_COMPLAINT,
        this.TRACK_REQUEST,
        this.UPGRADE_ROUTER,
        this.UPGRADE_PACKAGE,
      ],
    },
    BFXI: {
      landingPageCards: [this.INTERNET_ISSUES, this.PHONE_ISSUES, this.OTHER_ISSUES, this.PASSWORD_ISSUES],
      quickLinkCard: [
        this.INSTALL_NEW_ROUTER,
        this.FACTORY_RESET_ROUTER,
        this.FORGOT_PASSWORD_INTERNET,
        this.CONNECTION_ISSUE_ROUTER,
        this.CONNECT_HOME_ZONE,
        this.TRACK_COMPLAINT,
        this.TRACK_REQUEST,
        this.UPGRADE_ROUTER,
        this.UPGRADE_PACKAGE,
      ],
    },
  };

  // public static landingPageCards: ICard[] = [
  //   {
  //     title: 'LANDING_PAGE.INTERNET_ISSUES_TITLE',
  //     body: 'LANDING_PAGE.INTERNET_ISSUES_DESCRIPTION',
  //     img: 'assets/images/duo-tone-icons/icon_internet_issues.svg',
  //     applicableCodes: INTERNET_ISSUES,
  //     linkTo: 'info',
  //   },
  //   {
  //     title: 'LANDING_PAGE.TV_ISSUES_TITLE',
  //     body: 'LANDING_PAGE.TV_ISSUES_DESCRIPTION',
  //     img: 'assets/images/duo-tone-icons/icon_tv_issues.svg',
  //     applicableCodes: TV_ISSUES,
  //     linkTo: '#',
  //   },
  //   {
  //     title: 'LANDING_PAGE.PHONE_ISSUES_TITLE',
  //     body: 'LANDING_PAGE.PHONE_ISSUES_DESCRIPTION',
  //     img: 'assets/images/duo-tone-icons/icon_telephone_issues.svg',
  //     applicableCodes: PHONE_ISSUES,
  //     linkTo: '#',
  //   },
  //   {
  //     title: 'LANDING_PAGE.OTHER_ISSUES_TITLE',
  //     body: 'LANDING_PAGE.OTHER_ISSUES_DESCRIPTION',
  //     img: 'assets/images/duo-tone-icons/icon_service_issues.svg',
  //     applicableCodes: OTHER_ISSUES,
  //     linkTo: '#',
  //   },
  //   {
  //     title: 'LANDING_PAGE.PASSWORD_ISSUES_TITLE',
  //     body: 'LANDING_PAGE.PASSWORD_ISSUES_DESCRIPTION',
  //     img: 'assets/images/duo-tone-icons/icon_password_issues.svg',
  //     applicableCodes: PASSWORD_ISSUES,
  //     linkTo: '#',
  //   },
  //   {
  //     title: 'LANDING_PAGE.RESET_PIN_TITLE',
  //     body: 'LANDING_PAGE.RESET_PIN_DESCRIPTION',
  //     img: 'assets/images/duo-tone-icons/icon_password_issues.svg',
  //     applicableCodes: RESET_PIN,
  //     linkTo: '#',
  //   },
  // ];
  // public static quickLinkCards: ICard[] = [
  //   {
  //     body: 'QUICK_LINKS.INSTALL_NEW_ROUTER',
  //     applicableCodes: INSTALL_NEW_ROUTER,
  //     linkTo: '',
  //   },
  //   {
  //     body: 'QUICK_LINKS.FACTORY_RESET_ROUTER',
  //     applicableCodes: FACTORY_RESET_ROUTER,
  //     linkTo: '',
  //   },
  //   {
  //     body: 'QUICK_LINKS.FACTORY_RESET_TV',
  //     applicableCodes: FACTORY_RESET_TV,
  //     linkTo: '',
  //   },
  //   {
  //     body: 'QUICK_LINKS.FORGOT_PASSWORD_INTERNET',
  //     applicableCodes: FORGOT_PASSWORD_INTERNET,
  //     linkTo: '',
  //   },
  //   {
  //     body: 'QUICK_LINKS.CONNECTION_ISSUE_ROUTER',
  //     applicableCodes: CONNECTION_ISSUE_ROUTER,
  //     linkTo: '',
  //   },
  //   {
  //     body: 'QUICK_LINKS.FORGOT_PASSWORD_TV',
  //     applicableCodes: FORGOT_PASSWORD_TV,
  //     linkTo: '',
  //   },
  //   {
  //     body: 'QUICK_LINKS.TRANSFER_PACKAGE_TV',
  //     applicableCodes: TRANSFER_PACKAGE_TV,
  //     linkTo: '',
  //   },
  //   {
  //     body: 'QUICK_LINKS.CONNECT_HOME_ZONE',
  //     applicableCodes: CONNECT_HOME_ZONE,
  //     linkTo: '',
  //   },
  //   {
  //     body: 'QUICK_LINKS.TRACK_COMPLAINT',
  //     applicableCodes: TRACK_COMPLAINT,
  //     linkTo: '',
  //   },
  //   {
  //     body: 'QUICK_LINKS.TRACK_REQUEST',
  //     applicableCodes: TRACK_REQUEST,
  //     linkTo: '',
  //   },
  //   {
  //     body: 'QUICK_LINKS.UPGRADE_ROUTER',
  //     applicableCodes: UPGRADE_ROUTER,
  //     linkTo: '',
  //   },
  //   {
  //     body: 'QUICK_LINKS.UPGRADE_PACKAGE',
  //     applicableCodes: UPGRADE_PACKAGE,
  //     linkTo: '',
  //   },
  // ];

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

  public static routerNotReachableTemplate: ISection2Template[] = [
    {
      title: 'ROUTER_NOT_REACHABLE_TEMPLATE.ROUTER_NAME',
      type: 'text',
      objKeyNameEN: 'routerName',
    },
    {
      title: 'ROUTER_NOT_REACHABLE_TEMPLATE.ROUTER_MODEL',
      type: 'text',
      objKeyNameEN: 'routerModel',
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

  public static packageUpgradeTemplate: ISection2Template[] = [
    {
      title: 'PACKAGE_UPGRADE_SUCCESSFULLY.REFERENCE_NO',
      type: 'number',
      objKeyNameEN: 'referenceNo',
    },
  ];

  public static routerUpgradeTemplate: ISection2Template[] = [
    {
      title: 'ROUTER_UPGRADE_SUCCESSFULLY.REFERENCE_NO',
      type: 'number',
      objKeyNameEN: 'referenceNo',
    },
  ];

  public static routerPackageUpgradeTemplate: ISection2Template[] = [
    {
      title: 'ROUTER_PACKAGE_UPGRADE_SUCCESSFULLY.REFERENCE_NO',
      type: 'number',
      objKeyNameEN: 'referenceNo',
    },
  ];

  public static thirdPartyRouterUpgradeTemplate: ISection2Template[] = [
    {
      title: 'THIRD_PARTY_ROUTER_SUCCESSFULLY.REFERENCE_NO',
      type: 'number',
      objKeyNameEN: 'referenceNo',
    },
  ];

  public static userCredentialsTemplate: ISection2Template[] = [
    {
      title: 'USER_CREDENTIALS.USER_ID',
      type: 'text',
      objKeyNameEN: 'userId',
    },
    {
      title: 'USER_CREDENTIALS.PIN',
      type: 'text',
      objKeyNameEN: 'pin',
    },
  ];
}

////////For Password Matching with Confirm Passwords
import { FormGroup } from '@angular/forms';
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

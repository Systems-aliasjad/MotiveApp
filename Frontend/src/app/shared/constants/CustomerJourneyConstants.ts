import { IButton } from './types';

export class CustomerJourneyConstants {
  public static openServiceRequestCase1 = {
    header: 'MESSAGES.MOVING_ELIFE_CONNECTION',
    paragraphs: ['MESSAGES.MOVING_ELIFE_CONNECTION_BODY_1', 'MESSAGES.MOVING_ELIFE_CONNECTION_BODY_2'],
  };

  public static openServiceRequestCase2 = {
    header: 'MESSAGES.ACCOUNT_TEMPORARILY_DISCONNECTED',
    paragraphs: ['MESSAGES.ACCOUNT_TEMPORARILY_DISCONNECTED_BODY'],
  };

  public static openServiceRequestCase3 = {
    header: 'MESSAGES.ELIFE_CANCELLATION_REQUEST_PROGRESS',
    paragraphs: ['MESSAGES.ELIFE_CANCELLATION_REQUEST_PROGRESS_BODY'],
  };

  public static complaintExistsCase1 = {
    header: 'MESSAGES.COMPLAINT_ALREADY_EXISTS',
    paragraphs: ['MESSAGES.COMPLAINT_ALREADY_EXISTS_BODY'],
  };

  public static appointmentbookssuccessfullyCase = {
    header: 'MESSAGES.APPOINTMENT_BOOK_SUCCESSFULLY',
    paragraphs: ['MESSAGES.APPOINTMENT_BOOK_SUCCESSFULLY_Body'],
  };

  public static OpenTechnicalSR = {
    header: 'MESSAGES.OPEN_SERVICE_REQUEST',
    paragraphs: ['MESSAGES.OPEN_SERVICE_REQUEST_BODY'],
  };

  public static packageUpgradesuccessfullyCase = {
    header: 'MESSAGES.PACKAGE_UPGRADE_REQUEST_SUCCESSFULLY',
    paragraphs: ['MESSAGES.PACKAGE_UPGRADE_REQUEST_SUCCESSFULLY_Body'],
  };

  public static routerUpgradesuccessfullyCase = {
    header: 'MESSAGES.ROUTER_UPGRADE_REQUEST_SUCCESSFULLY',
    paragraphs: ['MESSAGES.ROUTER_UPGRADE_REQUEST_SUCCESSFULLYY_BODY'],
  };

  public static routerPackageUpgradesuccessfullyCase = {
    header: 'MESSAGES.ROUTER_PACKAGE_UPGRADE_REQUEST_SUCCESSFULLY',
    paragraphs: ['MESSAGES.ROUTER_PACKAGE_UPGRADE_REQUEST_SUCCESSFULLY_BODY'],
  };

  public static accountNotActive = {
    header: 'MESSAGES.ACCOUNT_DISCONNECTED_TEMPORARILY',
    span: 'MESSAGES.ACCOUNT_DISCONNECTED_TEMPORARILY_SPAN',
    spanListener: () => {},
    paragraphs: ['MESSAGES.ACCOUNT_DISCONNECTED_TEMPORARILY_BODY'],
  };

  public static routerResetRequiredButtons: IButton[] = [
    {
      title: 'BUTTONS.RESET_NOW',
      clickListener: () => {},
      linkTo: '',
      behaviour: 'primary',
      customListner: 'openPasswordResetDialog',
    },
    {
      title: 'BUTTONS.CLOSE',
      clickListener: () => {},
      linkTo: '/thanks',
      behaviour: 'link',
    },
  ];
  public static thirdPartyRoutersuccessfullyCase = {
    header: 'MESSAGES.THIRD_PARTY_ROUTER_REQUEST_SUCCESSFULLY',
    paragraphs: ['MESSAGES.THIRD_PARTY_ROUTER_REQUEST_SUCCESSFULLY_BODY'],
  };

  public static resetWifiResetFirstsuccessfullyCase = {
    header: 'MESSAGES.RESET_WIIF_PASSWORD_FIRST_SUCCESSFULLY',
    paragraphs: ['MESSAGES.RESET_WIIF_PASSWORD_FIRST_SUCCESSFULLY_BODY'],
  };

  public static resetWifiResetSecondsuccessfullyCase = {
    header: 'MESSAGES.RESET_WIIF_PASSWORD_SECOND_SUCCESSFULLY',
    paragraphs: ['MESSAGES.RESET_WIIF_PASSWORD_SECOND_SUCCESSFULLY_BODY'],
  };

  public static openServiceRequestCaseButtons: IButton[] = [
    {
      title: 'BUTTONS.FOLLOW_UP',
      explanatoryNote: 'TEXT.FOLLOW_UP_QUESTION',
      clickListener: () => {},
      linkTo: '',
      behaviour: 'primary',
    },
    {
      title: 'LINKS.EXIT_TROUBLESHOOTING',
      clickListener: () => {},
      linkTo: '/thanks',
      behaviour: 'link',
    },
  ];

  public static outageButtons: IButton[] = [
    {
      title: 'BUTTONS.OK',
      clickListener: () => {},
      linkTo: '',
      behaviour: 'primary',
    },
    {
      title: 'BUTTONS.BOOK_A_COMPLAINT',
      clickListener: () => {},
      linkTo: '/bookComplaint',
      behaviour: 'link',
    },
  ];

  public static openComplaintButtons: IButton[] = [
    {
      title: 'BUTTONS.YES',
      clickListener: () => {},
      linkTo: '',
      behaviour: 'primary',
    },
    {
      title: 'LINKS.COMPLAINT_ANOTHER',
      clickListener: () => {},
      behaviour: 'link',
      linkTo: '/bookComplaint',
    },
  ];

  public static routerRebootRequiredButtons: IButton[] = [
    {
      title: 'BUTTONS.RESTART_NOW',
      clickListener: () => {},
      linkTo: '/router-restart',
      behaviour: 'primary',
    },
    {
      title: 'BUTTONS.CLOSE',
      clickListener: () => {},
      linkTo: '/thanks',
      behaviour: 'link',
    },
  ];

  public static appointmentbookssuccessfullyButtons: IButton[] = [
    {
      title: 'BUTTONS.TRACK_COMPLAINT_STATUS',
      explanatoryNote: '',
      clickListener: () => {},
      linkTo: '',
      behaviour: 'primary',
    },
    {
      title: 'BUTTONS.DONE',
      clickListener: () => {},
      linkTo: '/thanks',
      behaviour: 'link',
    },
  ];

  public static packageUpdareRequestsuccessfullyButtons: IButton[] = [
    {
      title: 'BUTTONS.DONE',
      clickListener: () => {},
      linkTo: '/thanks',
      behaviour: 'primary',
    },
  ];

  public static routerUpdateRequestsuccessfullyButtons: IButton[] = [
    {
      title: 'BUTTONS.DONE',
      clickListener: () => {},
      linkTo: '/thanks',
      behaviour: 'primary',
    },
  ];

  public static routerPackageUpdateRequestsuccessfullyButtons: IButton[] = [
    {
      title: 'BUTTONS.DONE',
      clickListener: () => {},
      linkTo: '/thanks',
      behaviour: 'primary',
    },
  ];

  public static thirdPartyRoutersuccessfullyButtons: IButton[] = [
    {
      title: 'BUTTONS.DONE',
      clickListener: () => {},
      linkTo: '/thanks',
      behaviour: 'primary',
    },
  ];

  public static resestWifiPasswordSuccessFirstCaseButtons: IButton[] = [
    {
      title: 'BUTTONS.CONTINUE_TO_WIFI_SETTINGS',
      clickListener: () => {},
      linkTo: '/reset-wifi-password-form',
      behaviour: 'primary',
    },
  ];

  public static resestWifiPasswordSuccessSecondCasesuccessfullyButtons: IButton[] = [
    {
      title: 'BUTTONS.DONE',
      clickListener: () => {},
      linkTo: '/thanks',
      behaviour: 'primary',
    },
  ];

  public static issuesNotFixedButtons: IButton[] = [
    {
      title: 'BUTTONS.TRY_AGAIN_LATER',
      explanatoryNote: '',
      clickListener: () => {},
      linkTo: '',
      behaviour: 'primary',
    },
    {
      title: 'LINKS.BOOK_A_COMPLAINT',
      clickListener: () => {},
      linkTo: '/bookComplaint',
      behaviour: 'link',
    },
  ];

  public static RouterReset3rdParty: IButton[] = [
    {
      title: 'LINKS.DEVICE_CARE',
      explanatoryNote: '',
      clickListener: () => {},
      linkTo: '/device-care',
      behaviour: 'link',
    },
    {
      title: 'BUTTONS.ISSUE_FIXED',
      clickListener: () => {},
      linkTo: '/thanks',
      behaviour: 'primary',
    },
    {
      title: 'HEADER.BOOK_COMPLAINT',
      clickListener: () => {},
      linkTo: '/bookComplaint',
      behaviour: 'secondary',
    },
  ];

  public static openTechnicalSrButtons: IButton[] = [
    {
      title: 'BUTTONS.FOLLOW_UP',
      explanatoryNote: 'TEXT.FOLLOW_UP_QUESTION',
      clickListener: () => {},
      linkTo: '',
      behaviour: 'primary',
    },
    {
      title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
      clickListener: () => {},
      linkTo: '',
      behaviour: 'link',
    },
  ];

  public static internetPasswordResetButtons: IButton[] = [
    {
      title: 'BUTTONS.RESET_NOW',
      explanatoryNote: '',
      clickListener: () => {},
      linkTo: '/reset-internet-password',
      behaviour: 'primary',
    },
    {
      title: 'LINKS.CLOSE',
      clickListener: () => {},
      linkTo: '',
      behaviour: 'link',
    },
  ];

  public static packageUpgradeRecommendedButtons: IButton[] = [
    {
      title: 'LINKS.ISSUES_FIXED',
      clickListener: () => {},
      linkTo: '',
      behaviour: 'link',
    },

    {
      title: 'BUTTONS.UPGRADE_PACKAGE',
      explanatoryNote: '',
      clickListener: () => {},
      linkTo: '/package-upgrade-recommended-form',
      behaviour: 'primary',
    },
    {
      title: 'LINKS.CONTINUE_TO_TROUBLESHOOTING',
      clickListener: () => {},
      linkTo: '',
      behaviour: 'link',
    },
  ];

  public static routerUpgradeRecommendedButtons: IButton[] = [
    {
      title: 'LINKS.ISSUES_FIXED',
      clickListener: () => {},
      linkTo: '',
      behaviour: 'link',
    },

    {
      title: 'BUTTONS.UPGRADE_ROUTER',
      explanatoryNote: '',
      clickListener: () => {},
      linkTo: '/router-upgrade-recommended-form',
      behaviour: 'primary',
    },
    {
      title: 'LINKS.CONTINUE_TO_TROUBLESHOOTING',
      clickListener: () => {},
      linkTo: '',
      behaviour: 'link',
    },
  ];

  public static routerPackageUpgradeRecommendedButtons: IButton[] = [
    {
      title: 'LINKS.ISSUES_FIXED',
      clickListener: () => {},
      linkTo: '',
      behaviour: 'link',
    },

    {
      title: 'BUTTONS.UPGRADE_ROUTER_PACKAGE',
      explanatoryNote: '',
      clickListener: () => {},
      linkTo: '/router-package-upgrade-recommended-form',
      behaviour: 'primary',
    },
    {
      title: 'LINKS.CONTINUE_TO_TROUBLESHOOTING',
      clickListener: () => {},
      linkTo: '',
      behaviour: 'link',
    },
  ];

  public static thirdPartyMainButtons: IButton[] = [
    {
      title: 'LINKS.ISSUES_FIXED',
      clickListener: () => {},
      linkTo: '',
      behaviour: 'link',
    },

    {
      title: 'BUTTONS.BUY_NEW_ROUTER',
      explanatoryNote: '',
      clickListener: () => {},
      linkTo: '/third-party-router-form',
      behaviour: 'primary',
    },
    {
      title: 'LINKS.CONTINUE_TO_TROUBLESHOOTING',
      clickListener: () => {},
      linkTo: '',
      behaviour: 'link',
    },
  ];

  public static resetWifiPasswordFistSuccessButtons: IButton[] = [
    {
      title: 'BUTTONS.RESET_WIFI_PASSWORD_SUCCESS',
      explanatoryNote: '',
      clickListener: () => {},
      linkTo: '/reset-wifi-password-form',
      behaviour: 'primary',
    },
  ];

  public static browserStapperCase1Buttons: IButton[] = [
    {
      title: 'BUTTONS.ISSUE_FIXED',
      explanatoryNote: '',
      clickListener: () => {},
      linkTo: '/thanks',
      behaviour: 'primary',
    },
    {
      title: 'LINKS.CONTINUE_TO_TROUBLESHOOTING',
      clickListener: () => {},
      linkTo: '/browser-stapper',
      behaviour: 'link',
    },
  ];

  public static browserStapperCase2Buttons: IButton[] = [
    {
      title: 'BUTTONS.ISSUE_FIXED',
      explanatoryNote: '',
      clickListener: () => {},
      linkTo: '/thanks',
      behaviour: 'primary',
    },
    {
      title: 'BUTTONS.BOOK_A_COMPLAINT',
      clickListener: () => {},
      linkTo: '/bookComplaint',
      behaviour: 'link',
    },
  ];

  public static wiFiAlarmButtons: IButton[] = [
    {
      title: 'BUTTONS.ISSUE_FIXED',
      explanatoryNote: '',
      clickListener: () => {},
      linkTo: '/thanks',
      behaviour: 'link',
    },
    {
      title: 'BUTTONS.UPGRADE_PACKAGE',
      clickListener: () => {},
      linkTo: '/package-upgrade-recommended-form',
      behaviour: 'primary',
    },
    {
      title: 'LINKS.CONTINUE_TO_TROUBLESHOOTING',
      clickListener: () => {},
      linkTo: '/', //TODO: linkTo 1.10.2
      behaviour: 'link',
    },
  ];

  public static accountNotActiveButtons: IButton[] = [
    {
      title: 'BUTTONS.CLOSE',
      clickListener: () => {},
      linkTo: '/thanks',
      behaviour: 'secondary',
    },
  ];

  public static issueFixed_BookAComplaint: IButton[] = [
    {
      title: 'BUTTONS.ISSUE_FIXED',
      explanatoryNote: '',
      clickListener: () => {},
      linkTo: '/thanks',
      behaviour: 'primary',
    },
    {
      title: 'BUTTONS.BOOK_A_COMPLAINT',
      clickListener: () => {},
      linkTo: '/bookComplaint',
      behaviour: 'link',
    },
  ];

  public static resetFactoryDefault: IButton[] = [
    {
      title: 'BUTTONS.RESET_ROUTER',
      explanatoryNote: '',
      clickListener: () => {},
      linkTo: '',
      customListner: 'CloseMOdal',
      behaviour: 'secondary',
    },
    {
      title: 'BUTTONS.CANCEL',
      clickListener: () => {},
      linkTo: '/',
      behaviour: 'link',
    },
  ];

  public static noIssue: IButton[] = [
    {
      title: 'BUTTONS.ISSUE_FIXED',
      explanatoryNote: '',
      clickListener: () => {},
      linkTo: '/thanks',
      behaviour: 'primary',
    },
    {
      title: 'BUTTONS.REBOOT_MY_DEVICES',
      clickListener: () => {},
      linkTo: '/',
      behaviour: 'secondary',
      customListner: 'openDeviceListDialog',
    },
  ];

  public static serviceDetailsButtonConfig: IButton[] = [
    {
      title: 'BUTTONS.ISSUE_FIXED',
      explanatoryNote: '',
      clickListener: () => {},
      linkTo: '/thanks',
      behaviour: 'primary',
      customListner: '',
    },
    {
      title: 'LINKS.CONTINUE_TO_TROUBLESHOOTING',
      clickListener: () => {},
      linkTo: '/',
      behaviour: 'link',
      customListner: '',
    },
  ];

  public static deviceConnectedHomezoneButtonConfig: IButton[] = [
    {
      title: 'BUTTONS.RESET_WIFI_PASSWORD',
      explanatoryNote: '',
      clickListener: () => {},
      linkTo: '/',
      behaviour: 'primary',
      customListner: '',
    },
    {
      title: 'BUTTONS.CLOSE',
      clickListener: () => {},
      linkTo: '/',
      behaviour: 'link',
      customListner: '',
    },
  ];
}

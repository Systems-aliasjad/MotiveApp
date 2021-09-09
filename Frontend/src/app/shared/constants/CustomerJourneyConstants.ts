import { IButton, IMessageIssue } from './types';

export class CustomerJourneyConstants {
  public static openServiceRequestCase1 = {
    header: 'MESSAGES.MOCustomerJourneyConstantsVING_ELIFE_CONNECTION',
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
    paragraphs: ['MESSAGES.APPOINTMENT_BOOK_SUCCESSFULLY_BODY'],
  };

  public static tvBoxRestartssuccessfullyCase = {
    header: 'MESSAGES.TV_BOX_RESTART_REQUIRED_SUCCESSFULLY',
    paragraphs: ['MESSAGES.TV_BOX_RESTART_REQUIRED_SUCCESSFULLY_BODY'],
  };

  public static OpenTechnicalSR = {
    header: 'MESSAGES.OPEN_SERVICE_REQUEST',
    paragraphs: ['MESSAGES.OPEN_SERVICE_REQUEST_BODY'],
  };

  public static packageUpgradesuccessfullyCase = {
    header: 'MESSAGES.PACKAGE_UPGRADE_REQUEST_SUCCESSFULLY',
    paragraphs: ['MESSAGES.PACKAGE_UPGRADE_REQUEST_SUCCESSFULLY_BODY'],
  };

  public static tvBoxResetSuccessfullyCase = {
    header: 'MESSAGES.TVBOX_RESET_SUCCESSFULLY',
    paragraphs: ['MESSAGES.TVBOX_RESET_SUCCESSFULLY_BODY'],
  };

  public static troubeShootCompleteChannelNotListSuccessfullyCase = {
    header: 'MESSAGES.TVBOX_RESET_SUCCESSFULLY',
    paragraphs: ['MESSAGES.TVBOX_RESET_SUCCESSFULLY_BODY'],
  };

  public static outageIssueMessageSection: IMessageIssue = {
    header: 'MESSAGES.NO_INTERNET_CONNECTION',
    body: [{ title: 'MESSAGES.NO_INTERNET_CONNECTION_BODY' }],
  };

  public static issueNotFixedMessageSection: IMessageIssue = {
    header: 'MESSAGES.NO_INTERNET_CONNECTION',
    body: [{ title: 'MESSAGES.NO_INTERNET_CONNECTION_BODY2' }],
  };

  public static routerRebootRequiredMessageSection: IMessageIssue = {
    header: 'MESSAGES.ISSUE_FIXED_SUCCESSFULLY',
    body: [{ title: 'MESSAGES.ISSUE_FIXED_SUCCESSFULLY_BODY1' }],
  };

  public static routerResetRequiredMessageSection: IMessageIssue = {
    header: 'MESSAGES.ISSUE_FIXED_SUCCESSFULLY',
    body: [{ title: 'MESSAGES.ISSUE_FIXED_SUCCESSFULLY_BODY2' }],
  };

  public static internetPasswordResetRequiredMessageSection: IMessageIssue = {
    header: 'MESSAGES.RESET_YOUR_PASSWORD',
    body: [{ title: 'MESSAGES.RESET_YOUR_PASSWORD_BODY' }],
  };

  public static routerNotReachableMessageSection: IMessageIssue = {
    header: 'MESSAGES.ROUTER_NOT_ACCESSIBLE',
    body: [{ title: 'MESSAGES.ROUTER_NOT_ACCESSIBLE_BODY' }],
  };

  public static noIssueMessageSection: IMessageIssue = {
    header: 'MESSAGES.NO_ISSUE_FOUND',
    body: [{ title: 'MESSAGES.NO_ISSUE_FOUND_BODY1' }, { title: 'MESSAGES.NO_ISSUE_FOUND_BODY2' }],
  };

  public static tvOutageMessageSection: IMessageIssue = {
    header: 'MESSAGES.UNPLANNED_INTERRUPTION',
    body: [{ title: 'MESSAGES.UNPLANNED_INTERRUPTION_BODY' }],
  };

  public static routerUpdradeRecomendedMessageSection: IMessageIssue = {
    header: 'MESSAGES.NO_ISSUE_FOUND',
    body: [
      { title: 'MESSAGES.UPGRADE_RECOMENDED_BODY1' },
      { title: 'MESSAGES.UPGRADE_RECOMENDED_BODY2' },
      { title: 'MESSAGES.UPGRADE_RECOMENDED_BODY3' },
      { title: 'MESSAGES.UPGRADE_RECOMENDED_BODY4' },
      { title: 'MESSAGES.UPGRADE_RECOMENDED_BODY5' },
    ],
  };

  public static packageUpdradeRecomendedMessageSection: IMessageIssue = {
    header: 'MESSAGES.NO_ISSUE_FOUND',
    body: [
      { title: 'MESSAGES.UPGRADE_RECOMENDED_BODY1' },
      { title: 'MESSAGES.UPGRADE_RECOMENDED_BODY2' },
      { title: 'MESSAGES.UPGRADE_RECOMENDED_BODY6' },
      { title: 'MESSAGES.UPGRADE_RECOMENDED_BODY7' },
      { title: 'MESSAGES.UPGRADE_RECOMENDED_BODY5' },
    ],
  };

  public static packageAndRouterUpdradeRecomendedMessageSection: IMessageIssue = {
    header: 'MESSAGES.NO_ISSUE_FOUND',
    body: [
      { title: 'MESSAGES.UPGRADE_RECOMENDED_BODY1' },
      { title: 'MESSAGES.UPGRADE_RECOMENDED_BODY2' },
      { title: 'MESSAGES.UPGRADE_RECOMENDED_BODY8' },
      { title: 'MESSAGES.UPGRADE_RECOMENDED_BODY9' },
      { title: 'MESSAGES.UPGRADE_RECOMENDED_BODY5' },
    ],
  };

  public static router3rdPartyMessageSection: IMessageIssue = {
    header: 'MESSAGES.NO_ISSUE_FOUND',
    body: [
      { title: 'MESSAGES.ROUTER_3RD_PARTY_BODY1' },
      { title: 'MESSAGES.ROUTER_3RD_PARTY_BODY2' },
      { title: 'MESSAGES.ROUTER_3RD_PARTY_BODY3' },
      { title: 'MESSAGES.ROUTER_3RD_PARTY_BODY4' },
      { title: 'MESSAGES.ROUTER_3RD_PARTY_BODY5' },
      { title: 'MESSAGES.ROUTER_3RD_PARTY_BODY6' },
    ],
  };

  public static wifiAlarmMessageSection: IMessageIssue = {
    header: 'MESSAGES.NO_ISSUE_FOUND',
    body: [
      { title: 'MESSAGES.WIFI_ALARM_BODY1' },
      { title: 'MESSAGES.WIFI_ALARM_BODY2' },
      { title: 'MESSAGES.WIFI_ALARM_BODY3' },
      { title: 'MESSAGES.WIFI_ALARM_BODY4' },
      { title: 'MESSAGES.WIFI_ALARM_BODY5' },
    ],
  };

  public static routerConfig3rdPartyMessageSection: IMessageIssue = {
    header: 'MESSAGES.RECONFIGURE_YOUR_ROUTER',
    body: [
      {
        title: 'MESSAGES.RECONFIGURE_YOUR_ROUTER_BODY1',
        children: ['MESSAGES.RECONFIGURE_YOUR_ROUTER_BODY1_POINT1', 'MESSAGES.RECONFIGURE_YOUR_ROUTER_BODY1_POINT2', 'MESSAGES.RECONFIGURE_YOUR_ROUTER_BODY1_POINT3'],
      },
      {
        title: 'MESSAGES.RECONFIGURE_YOUR_ROUTER_BODY2',
      },
      {
        title: 'MESSAGES.RECONFIGURE_YOUR_ROUTER_BODY3',
      },
    ],
  };

  public static tvBoxNotReachableMessageSection: IMessageIssue = {
    header: 'MESSAGES.TV_BOX_NOT_REACHABLE',
    body: [
      {
        title: 'MESSAGES.TV_BOX_NOT_REACHABLE_BODY1',
      },
      {
        title: 'MESSAGES.TV_BOX_NOT_REACHABLE_BODY2',
        children: ['MESSAGES.TV_BOX_NOT_REACHABLE_BODY2_POINT1', 'MESSAGES.TV_BOX_NOT_REACHABLE_BODY2_POINT2'],
      },
    ],
  };

  public static tvBoxNotReachableAgainMessageSection: IMessageIssue = {
    header: 'MESSAGES.TV_BOX_NOT_REACHABLE_AGAIN',
    body: [
      {
        title: 'MESSAGES.TV_BOX_NOT_REACHABLE_AGAIN_BODY1',
        children: ['MESSAGES.TV_BOX_NOT_REACHABLE_AGAIN_BODY1_POINT1', 'MESSAGES.TV_BOX_NOT_REACHABLE_AGAIN_BODY1_POINT2', 'MESSAGES.TV_BOX_NOT_REACHABLE_AGAIN_BODY1_POINT3'],
      },
      {
        title: 'MESSAGES.TV_BOX_NOT_REACHABLE_AGAIN_BODY2',
      },
      {
        title: 'MESSAGES.TV_BOX_NOT_REACHABLE_AGAIN_BODY3',
      },
    ],
  };

  public static tvBoxRestartMessageSection: IMessageIssue = {
    header: 'MESSAGES.ISSUE_FIXED_SUCCESSFULLY',
    body: [
      {
        title: 'MESSAGES.TV_BOX_RESTART_REQUIRED_BODY1',
      },
      {
        title: 'MESSAGES.TV_BOX_RESTART_REQUIRED_BODY2',
      },
    ],
  };

  public static unableWatchChannelsMessageSection: IMessageIssue = {
    header: 'MESSAGES.UNABLE_TO_WATCH_CHNANNEL',
    body: [
      {
        title: 'MESSAGES.UNABLE_TO_WATCH_CHNANNEL_BODY1',
        children: [
          'MESSAGES.UNABLE_TO_WATCH_CHNANNEL_BODY1_POINT1',
          'MESSAGES.UNABLE_TO_WATCH_CHNANNEL_BODY1_POINT2',
          'MESSAGES.UNABLE_TO_WATCH_CHNANNEL_BODY1_POINT3',
          'MESSAGES.UNABLE_TO_WATCH_CHNANNEL_BODY1_POINT4',
        ],
      },
      // {
      //   title: 'MESSAGES.RECONFIGURE_YOUR_ROUTER_BODY2',
      // },
      // {
      //   title: 'MESSAGES.RECONFIGURE_YOUR_ROUTER_BODY3',
      // },
    ],
  };

  public static routerUpgradesuccessfullyCase = {
    header: 'MESSAGES.ROUTER_UPGRADE_REQUEST_SUCCESSFULLY',
    paragraphs: ['MESSAGES.ROUTER_UPGRADE_REQUEST_SUCCESSFULLYY_BODY'],
  };

  public static routerPackageUpgradesuccessfullyCase = {
    header: 'MESSAGES.ROUTER_PACKAGE_UPGRADE_REQUEST_SUCCESSFULLY',
    paragraphs: ['MESSAGES.ROUTER_PACKAGE_UPGRADE_REQUEST_SUCCESSFULLY_BODY'],
  };

  public static tvAdminPinResetSuccessfully = {
    header: 'MESSAGES.TV_AMDIN_PIN_RESET_SUCCESSFULLY',
    paragraphs: ['MESSAGES.TV_AMDIN_PIN_RESET_SUCCESSFULLY_BODY1', 'MESSAGES.TV_AMDIN_PIN_RESET_SUCCESSFULLY_BODY2', 'MESSAGES.TV_AMDIN_PIN_RESET_SUCCESSFULLY_BODY3'],
  };

  public static accountNotActive = {
    header: 'MESSAGES.ACCOUNT_DISCONNECTED_TEMPORARILY',
    span: 'MESSAGES.ACCOUNT_DISCONNECTED_TEMPORARILY_SPAN',
    spanListener: () => {},
    paragraphs: ['MESSAGES.ACCOUNT_DISCONNECTED_TEMPORARILY_BODY'],
  };

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

  public static troubleshootComplete = {
    header: 'MESSAGES.TROUBLESHOOT_COMPLETE_HEADING',
    paragraphs: ['MESSAGES.TROUBLESHOOT_COMPLETE_BODY'],
  };

  public static restELifeLoginPin = {
    header: 'MESSAGES.RESET_ELIFEON_PIN_HEADING',
    paragraphs: ['MESSAGES.RESET_ELIFEON_PIN_BODY1', 'MESSAGES.RESET_ELIFEON_PIN_BODY2'],
  };

  public static restELifeLoginPinResetSuccess = {
    header: 'MESSAGES.RESET_ELIFEON_PIN_RESETPIN_SUCCESS_HEADING',
    paragraphs: ['MESSAGES.RESET_ELIFEON_PIN_RESETPIN_SUCCESS_BODY'],
  };

  public static gameSessionCancelConfirmed = {
    header: 'MESSAGES.GAME_SESSION_CANCEL_CONFIRMED_HEADING',
    paragraphs: ['MESSAGES.GAME_SESSION_CANCEL_CONFIRMED_BODY'],
  };

  public static packageTransferSuccess = {
    header: 'MESSAGES.PACKAGE_TRANSFER_SUCCESS_HEADING',
    paragraphs: ['MESSAGES.PACKAGE_TRANSFER_SUCCESS_BODY'],
  };

  public static resetNowButton1: IButton = {
    title: 'BUTTONS.RESET_NOW',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'primary',
    customListner: 'openPasswordResetDialog',
  };

  public static resetNowButton2: IButton = {
    title: 'BUTTONS.RESET_NOW',
    explanatoryNote: '',
    clickListener: () => {},
    linkTo: '/reset-internet-password',
    behaviour: 'primary',
  };

  public static closeButton: IButton = {
    title: 'BUTTONS.CLOSE',
    clickListener: () => {},
    linkTo: '/thanks',
    behaviour: 'link',
  };

  public static closeButtonSecondary: IButton = {
    title: 'BUTTONS.CLOSE',
    clickListener: () => {},
    linkTo: '/thanks',
    behaviour: 'secondary',
  };

  public static followUpButton: IButton = {
    title: 'BUTTONS.FOLLOW_UP',
    explanatoryNote: 'TEXT.FOLLOW_UP_QUESTION',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'primary',
  };

  public static exitTroubleShootingButton: IButton = {
    title: 'LINKS.EXIT_TROUBLESHOOTING',
    clickListener: () => {},
    linkTo: '/thanks',
    behaviour: 'link',
  };

  public static exitTroubleShootingPrimaryButton: IButton = {
    title: 'BUTTONS.EXIT_TROUBLESHOOTING',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'primary',
    customListner: 'gotoMainForm',
  };

  public static endTrobleShootingPrimaryButton: IButton = {
    title: 'BUTTONS.END_TROUBLESHOOTING',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'primary',
    customListner: 'endTroubleshootChannelNotListDialog',
  };

  public static okButton: IButton = {
    title: 'BUTTONS.OK',
    clickListener: () => {},
    linkTo: '/thanks',
    behaviour: 'primary',
  };

  public static okButtonSecondary: IButton = {
    title: 'BUTTONS.OK',
    clickListener: () => {},
    linkTo: '/thanks',
    behaviour: 'secondary',
  };

  public static bookAComplaintButton: IButton = {
    title: 'BUTTONS.BOOK_A_COMPLAINT',
    clickListener: () => {},
    linkTo: '/bookComplaint',
    behaviour: 'link',
  };

  public static bookAppointmentButton: IButton = {
    title: 'BUTTONS.BOOK_AN_APPOINTMENT',
    clickListener: () => {},
    linkTo: '/tvBox-not-reachable-form',
    behaviour: 'primary',
  };

  public static bookCompalintButton: IButton = {
    title: 'HEADER.BOOK_COMPLAINT',
    clickListener: () => {},
    linkTo: '/bookComplaint',
    behaviour: 'secondary',
  };

  public static bookAnotherComplaintButton: IButton = {
    title: 'LINKS.COMPLAINT_ANOTHER',
    clickListener: () => {},
    behaviour: 'link',
    linkTo: '/bookComplaint',
  };

  public static yesButton: IButton = {
    title: 'BUTTONS.YES',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'primary',
  };

  public static restartNowButton: IButton = {
    title: 'BUTTONS.RESTART_NOW',
    clickListener: () => {},
    linkTo: '/router-restart',
    behaviour: 'primary',
  };

  public static restartStbNowButton: IButton = {
    title: 'BUTTONS.RESTART_STB_NOW',
    clickListener: () => {},
    linkTo: '/tvBox-restart-required-successfully',
    behaviour: 'primary',
  };

  public static restartManuallyLink: IButton = {
    title: 'BUTTONS.RESTART_MANUALLY',
    clickListener: () => {},
    linkTo: '/tvBox-restart-required-manually',
    behaviour: 'link',
  };

  public static trackComplaintStatusButton: IButton = {
    title: 'BUTTONS.TRACK_COMPLAINT_STATUS',
    explanatoryNote: '',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'primary',
  };

  public static trackComplaintStatusLink: IButton = {
    title: 'BUTTONS.TRACK_COMPLAINT_STATUS',
    explanatoryNote: '',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'link',
  };

  public static doneButtonSecondary: IButton = {
    title: 'BUTTONS.DONE',
    clickListener: () => {},
    linkTo: '/thanks',
    behaviour: 'secondary',
  };

  public static doneButtonPrimary: IButton = {
    title: 'BUTTONS.DONE',
    clickListener: () => {},
    linkTo: '/thanks',
    behaviour: 'primary',
  };

  public static continueToWIfiSettingButton: IButton = {
    title: 'BUTTONS.CONTINUE_TO_WIFI_SETTINGS',
    clickListener: () => {},
    linkTo: '/reset-wifi-password-form',
    behaviour: 'primary',
  };

  public static continueButton: IButton = {
    title: 'BUTTONS.CONTINUE',
    clickListener: () => {},
    linkTo: '/thanks',
    behaviour: 'primary',
  };

  public static tryAgainLaterButton: IButton = {
    title: 'BUTTONS.TRY_AGAIN_LATER',
    explanatoryNote: '',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'primary',
  };

  public static tryAgainLaterLink: IButton = {
    title: 'BUTTONS.TRY_AGAIN_LATER',
    explanatoryNote: '',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'link',
  };

  public static tryAgainButton: IButton = {
    title: 'BUTTONS.TRY_AGAIN',
    explanatoryNote: '',
    clickListener: () => {},
    linkTo: '/tvBox-not-reachable_try_again',
    behaviour: 'primary',
  };

  public static deviceCareLink: IButton = {
    title: 'LINKS.DEVICE_CARE',
    explanatoryNote: '',
    clickListener: () => {},
    linkTo: '/device-care',
    behaviour: 'link',
  };

  public static deviceCareButton: IButton = {
    title: 'BUTTONS.VIEW_DEVICE_CARE',
    explanatoryNote: '',
    clickListener: () => {},
    linkTo: '/device-care',
    behaviour: 'primary',
  };

  public static deviceCareTvBoxManualRestartButton: IButton = {
    title: 'BUTTONS.VIEW_DEVICE_CARE',
    explanatoryNote: '',
    clickListener: () => {},
    linkTo: '/tvBox-restart-required-device-care',
    behaviour: 'primary',
  };

  public static issueFixedButton: IButton = {
    title: 'BUTTONS.ISSUE_FIXED',
    clickListener: () => {},
    linkTo: '/thanks',
    behaviour: 'primary',
  };

  public static issueFixedTvButton: IButton = {
    title: 'BUTTONS.ISSUE_FIXED',
    clickListener: () => {},
    linkTo: '/tv-details',
    behaviour: 'primary',
  };

  public static continueToTroubleshootTvIssueButton: IButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    clickListener: () => {},
    linkTo: '',
    customListner: 'openInternetIssueDialog',
    behaviour: 'link',
  };

  public static issueFixedButtonLink: IButton = {
    title: 'BUTTONS.ISSUE_FIXED',
    clickListener: () => {},
    linkTo: '/thanks',
    behaviour: 'link',
  };

  public static continueToTroubleshootEnableToWatchButton: IButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    clickListener: () => {},
    linkTo: '/unable-to-watch-channel-continue',
    behaviour: 'link',
    customListner: '',
  };

  public static continueToTroubleshootButton: IButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'link',
    customListner: '',
  };

  public static continueToTroubleshootTVBoxButton: IButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'link',
    customListner: 'openRestartTvBoxDialog',
  };

  public static continueToBrowserStepperButton: IButton = {
    title: 'LINKS.CONTINUE_TO_TROUBLESHOOTING',
    clickListener: () => {},
    linkTo: '/browser-stapper',
    behaviour: 'link',
  };

  public static upgradePackageButton: IButton = {
    title: 'BUTTONS.UPGRADE_PACKAGE',
    clickListener: () => {},
    linkTo: '/package-upgrade-recommended-form',
    behaviour: 'primary',
  };

  public static upgradeRouterButton: IButton = {
    title: 'BUTTONS.UPGRADE_ROUTER',
    clickListener: () => {},
    linkTo: '/router-upgrade-recommended-form',
    behaviour: 'primary',
  };

  public static upgradeRouterPackageButton: IButton = {
    title: 'BUTTONS.UPGRADE_ROUTER_PACKAGE',
    explanatoryNote: '',
    clickListener: () => {},
    linkTo: '/router-package-upgrade-recommended-form',
    behaviour: 'primary',
  };

  public static buyNewRouterButton: IButton = {
    title: 'BUTTONS.BUY_NEW_ROUTER',
    explanatoryNote: '',
    clickListener: () => {},
    linkTo: '/third-party-router-form',
    behaviour: 'primary',
  };

  public static resetWifiPasswordSuccessButton: IButton = {
    title: 'BUTTONS.RESET_WIFI_PASSWORD_SUCCESS',
    explanatoryNote: '',
    clickListener: () => {},
    linkTo: '/reset-wifi-password-form',
    behaviour: 'primary',
  };

  public static cancelButton: IButton = {
    title: 'BUTTONS.CANCEL',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'link',
    customListner: 'CloseMOdal',
  };

  public static channelNotListDialogCancelButton: IButton = {
    title: 'BUTTONS.CANCEL',
    clickListener: () => {},
    linkTo: '/',
    behaviour: 'link',
    customListner: 'closePopup',
  };

  public static resetRouterButton: IButton = {
    title: 'BUTTONS.RESET_ROUTER',
    clickListener: () => {},
    linkTo: '',
    customListner: 'CloseMOdal',
    behaviour: 'secondary',
  };

  public static rebootMyDeviceButton: IButton = {
    title: 'BUTTONS.REBOOT_MY_DEVICES',
    clickListener: () => {},
    linkTo: '/',
    behaviour: 'secondary',
    customListner: 'openDeviceListDialog',
  };

  public static resetWifiButton = {
    title: 'BUTTONS.RESET_WIFI_PASSWORD',
    clickListener: () => {},
    linkTo: '/reset-wifi-password-form',
    behaviour: 'primary',
  };

  public static usingSameRouterButton = {
    title: 'BUTTONS.USING_THE_SAME_ROUTER',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'primary',
    customListner: 'AppInternetIssuesDialog',
    explanatoryNote: 'TEXT.USING_THE_SAME_ROUTER',
  };

  public static usingOwnRouterButton = {
    title: 'LINKS.USING_OWN_ROUTER',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'link',
  };

  public static requestPaidTechnicianVisitButton = {
    title: 'BUTTONS.REQUEST_PAID_TECHNICIAN_VISIT',
    clickListener: () => {},
    linkTo: '/bookComplaint',
    behaviour: 'primary',
    customListner: '',
  };

  public static issueResolvedButton = {
    title: 'BUTTONS.ISSUE_RESLOVED',
    clickListener: () => {},
    linkTo: '/thanks',
    behaviour: 'primary',
  };

  public static stillFacingIssueLink = {
    title: 'BUTTONS.STILL_FACING_ISSUE',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'link',
  };

  public static issueResolvedLink = {
    title: 'BUTTONS.ISSUE_RESLOVED',
    clickListener: () => {},
    linkTo: '/thanks',
    behaviour: 'link',
  };

  public static backButton = {
    title: 'BUTTONS.BACK',
    clickListener: () => {},
    linkTo: '/tv-details',
    behaviour: 'secondary',
  };

  public static confirmButton = {
    title: 'BUTTONS.CONFIRM',
    clickListener: () => {},
    linkTo: '/tv-pin-reset-successfull',
    behaviour: 'primary',
  };

  public static resetPINButton = {
    title: 'BUTTONS.RESET_PIN',
    clickListener: () => {},
    linkTo: '/reset-login-pin-success',
    behaviour: 'primary',
  };

  public static issueFixedCloseButton = {
    title: 'BUTTONS.ISSUE_FIXED_CLOSE',
    clickListener: () => {},
    linkTo: '/thanks',
    behaviour: 'primary',
  };

  public static resetTVBoxButton: IButton = {
    title: 'BUTTONS.RESET_TV_BOX',
    clickListener: () => {},
    linkTo: '/tvBox-reset-successfull',
    behaviour: 'primary',
  };

  public static skipToNextStep: IButton = {
    title: 'BUTTONS.SKIP_TO_NEXT_STEP',
    clickListener: () => {},
    linkTo: '/',
    behaviour: 'primary',
  };

  public static confirmTransferButton = {
    title: 'BUTTONS.CONFIRM_TRANSFER',
    clickListener: () => {},
    linkTo: '/package-transfer-success',
    behaviour: 'primary',
  };

  public static unableToWatchButtons: IButton[] = [CustomerJourneyConstants.issueResolvedButton, CustomerJourneyConstants.continueToTroubleshootEnableToWatchButton];

  public static tvAdminPinResetSuccessfullyButton: IButton[] = [CustomerJourneyConstants.okButtonSecondary];

  public static resetTvPinButton: IButton[] = [CustomerJourneyConstants.backButton, CustomerJourneyConstants.confirmButton];

  public static routerNotReachableButtons: IButton[] = [CustomerJourneyConstants.usingSameRouterButton, CustomerJourneyConstants.usingOwnRouterButton];

  public static tvBoxNotReachableButtons: IButton[] = [CustomerJourneyConstants.tryAgainButton, CustomerJourneyConstants.issueResolvedLink];
  public static tvBoxNotReachableTryAgainButtons: IButton[] = [CustomerJourneyConstants.bookAppointmentButton, CustomerJourneyConstants.tryAgainLaterLink];
  public static tvBoxRestartDialogButtons: IButton[] = [CustomerJourneyConstants.exitTroubleShootingPrimaryButton, CustomerJourneyConstants.backButton];

  public static channelNotListDialogButtons: IButton[] = [CustomerJourneyConstants.endTrobleShootingPrimaryButton, CustomerJourneyConstants.channelNotListDialogCancelButton];

  public static tvBoxRestartRequiredButtons: IButton[] = [CustomerJourneyConstants.restartStbNowButton, CustomerJourneyConstants.restartManuallyLink];

  public static routerResetRequiredButtons: IButton[] = [CustomerJourneyConstants.resetNowButton1, CustomerJourneyConstants.closeButton];

  public static openServiceRequestCaseButtons: IButton[] = [CustomerJourneyConstants.followUpButton, CustomerJourneyConstants.exitTroubleShootingButton];

  public static outageButtons: IButton[] = [CustomerJourneyConstants.okButton, CustomerJourneyConstants.bookAComplaintButton];

  public static openComplaintButtons: IButton[] = [CustomerJourneyConstants.yesButton, CustomerJourneyConstants.bookAnotherComplaintButton];

  public static routerRebootRequiredButtons: IButton[] = [CustomerJourneyConstants.restartNowButton, CustomerJourneyConstants.closeButton];

  public static appointmentbookssuccessfullyButtons: IButton[] = [CustomerJourneyConstants.trackComplaintStatusLink, CustomerJourneyConstants.doneButtonSecondary];

  public static tvBoxRestartSuccessfullyButtons: IButton[] = [CustomerJourneyConstants.doneButtonPrimary];

  public static tvBoxRestartManuallyButtons: IButton[] = [CustomerJourneyConstants.deviceCareTvBoxManualRestartButton, CustomerJourneyConstants.closeButton];

  public static routerRestartManuallyButtons: IButton[] = [CustomerJourneyConstants.deviceCareButton, CustomerJourneyConstants.closeButton];

  public static tvBoxRestartDeviceCareButtons: IButton[] = [CustomerJourneyConstants.issueFixedTvButton, CustomerJourneyConstants.continueToTroubleshootTVBoxButton];

  public static unableWatchChannelsDeviceCareButtons: IButton[] = [CustomerJourneyConstants.resetTVBoxButton, CustomerJourneyConstants.issueResolvedLink];

  public static packageUpdareRequestsuccessfullyButtons: IButton[] = [CustomerJourneyConstants.doneButtonPrimary];

  public static tvBoxResetSuccessfullyButtons: IButton[] = [CustomerJourneyConstants.issueResolvedButton, CustomerJourneyConstants.issueResolvedButton];

  public static routerUpdateRequestsuccessfullyButtons: IButton[] = [CustomerJourneyConstants.doneButtonPrimary];

  public static routerPackageUpdateRequestsuccessfullyButtons: IButton[] = [CustomerJourneyConstants.doneButtonPrimary];

  public static thirdPartyRoutersuccessfullyButtons: IButton[] = [CustomerJourneyConstants.doneButtonPrimary];

  public static resestWifiPasswordSuccessFirstCaseButtons: IButton[] = [CustomerJourneyConstants.continueToWIfiSettingButton];

  public static resestWifiPasswordSuccessSecondCasesuccessfullyButtons: IButton[] = [CustomerJourneyConstants.okButtonSecondary];

  public static issuesNotFixedButtons: IButton[] = [CustomerJourneyConstants.tryAgainLaterButton, CustomerJourneyConstants.bookAComplaintButton];

  public static openTechnicalSrButtons: IButton[] = [CustomerJourneyConstants.followUpButton, CustomerJourneyConstants.continueToTroubleshootButton];

  public static internetPasswordResetButtons: IButton[] = [CustomerJourneyConstants.resetNowButton2, CustomerJourneyConstants.closeButton];

  public static resetWifiPasswordFistSuccessButtons: IButton[] = [CustomerJourneyConstants.resetWifiPasswordSuccessButton];

  public static browserStapperCase1Buttons: IButton[] = [CustomerJourneyConstants.issueFixedButton, CustomerJourneyConstants.continueToBrowserStepperButton];

  public static browserStapperCase2Buttons: IButton[] = [CustomerJourneyConstants.issueFixedButton, CustomerJourneyConstants.bookAComplaintButton];

  public static accountNotActiveButtons: IButton[] = [CustomerJourneyConstants.closeButtonSecondary];

  public static issueFixed_BookAComplaint: IButton[] = [CustomerJourneyConstants.issueFixedButton, CustomerJourneyConstants.bookAComplaintButton];

  public static resetFactoryDefault: IButton[] = [CustomerJourneyConstants.resetRouterButton, CustomerJourneyConstants.cancelButton];

  public static noIssue: IButton[] = [CustomerJourneyConstants.issueFixedButton, CustomerJourneyConstants.rebootMyDeviceButton];

  public static serviceDetailsButtonConfig: IButton[] = [CustomerJourneyConstants.issueFixedButton, CustomerJourneyConstants.continueToTroubleshootButton];

  public static deviceConnectedHomezoneButtonConfig: IButton[] = [CustomerJourneyConstants.resetWifiButton, CustomerJourneyConstants.closeButton];

  public static tvDetailsButton: IButton[] = [CustomerJourneyConstants.issueResolvedButton, CustomerJourneyConstants.continueToTroubleshootTvIssueButton];

  public static noIssueTvButton: IButton[] = [
    CustomerJourneyConstants.issueFixedTvButton,
    CustomerJourneyConstants.rebootMyDeviceButton,
    CustomerJourneyConstants.continueToTroubleshootTvIssueButton,
  ];

  public static RouterReset3rdParty: IButton[] = [
    CustomerJourneyConstants.deviceCareButton,
    CustomerJourneyConstants.issueFixedButton,
    CustomerJourneyConstants.bookCompalintButton,
  ];

  public static wiFiAlarmButtons: IButton[] = [
    CustomerJourneyConstants.issueFixedButtonLink,
    CustomerJourneyConstants.upgradePackageButton,
    CustomerJourneyConstants.continueToTroubleshootButton,
  ];

  public static packageUpgradeRecommendedButtons: IButton[] = [
    CustomerJourneyConstants.issueFixedButtonLink,
    CustomerJourneyConstants.upgradePackageButton,
    CustomerJourneyConstants.continueToTroubleshootButton,
  ];

  public static routerUpgradeRecommendedButtons: IButton[] = [
    CustomerJourneyConstants.issueFixedButtonLink,
    CustomerJourneyConstants.upgradeRouterButton,
    CustomerJourneyConstants.continueToTroubleshootButton,
  ];

  public static routerPackageUpgradeRecommendedButtons: IButton[] = [
    CustomerJourneyConstants.issueFixedButtonLink,
    CustomerJourneyConstants.upgradeRouterPackageButton,
    CustomerJourneyConstants.continueToTroubleshootButton,
  ];

  public static thirdPartyMainButtons: IButton[] = [
    CustomerJourneyConstants.issueFixedButtonLink,
    CustomerJourneyConstants.buyNewRouterButton,
    CustomerJourneyConstants.continueToTroubleshootButton,
  ];

  public static troubleshootCompleteButtons: IButton[] = [CustomerJourneyConstants.requestPaidTechnicianVisitButton, CustomerJourneyConstants.cancelButton];
  public static restELifeLoginPinButton: IButton[] = [CustomerJourneyConstants.resetPINButton, CustomerJourneyConstants.cancelButton];
  public static restELifeLoginPinResetSuccessButton: IButton[] = [CustomerJourneyConstants.doneButtonSecondary];
  public static gameSessionButtons: IButton[] = [CustomerJourneyConstants.issueFixedCloseButton, CustomerJourneyConstants.cancelButton];
  public static packageAvailableButtons: IButton[] = [CustomerJourneyConstants.skipToNextStep, CustomerJourneyConstants.cancelButton];
  public static transferPackageButtons: IButton[] = [CustomerJourneyConstants.confirmTransferButton, CustomerJourneyConstants.closeButton];
}

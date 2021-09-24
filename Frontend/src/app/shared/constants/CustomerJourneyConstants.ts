import { IButton, IMessageIssue } from './types';

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

  public static compliantDetailsTrackComplaint = {
    header: 'MESSAGES.COMPLAINT_DETAILS',
    paragraphs: ['MESSAGES.HERE_ARE_THE_DETAILS_OF_YOUR_COMPLAINT'],
  };
  public static compliantNotFoundTrackComplaint = {
    header: 'MESSAGES.COMPLAINT_NOT_FOUND',
    paragraphs: ['MESSAGES.SORRY_WE_COULDNT_FIND_THE_COMPLAINT_YOU_REQUESTED_IF_YOU_NEED_HELP_WITH_A_TECHNICAL_ISSUE_TAP_CONTINUE_TO_TROUBLESHOOTING'],
  };

  public static pinResetFaildAllServices = {
    header: 'MESSAGES.PIN_RESET_FAILED',
    paragraphs: ['MESSAGES.SORRY_PIN_RESET_FAILED', 'MESSAGES.BOOK_COMPLAINT_TO_FIX_THE_ISSUE'],
  };

  public static workNotCompletedTrackRequest = {
    header: 'MESSAGES.WORK_NOT_COMPLETED',
    paragraphs: ['MESSAGES.PLEASE_SET_AN_APPOINTMENT_WITH_US_ONCE_YOU_COMPLETE_THE_WORK'],
  };

  public static requestInProcessTrackRequest = {
    header: 'MESSAGES.REQUEST_IN_PROGRESS',
    paragraphs: ['MESSAGES.WE_APOLOGIZE_FOR_THE_DELAY_COMPLAINT_WILL_BE_BOOKED_REGARDING_THE_DELAY'],
  };

  public static compliantDetailsResolvedTrackComplaint = {
    header: 'MESSAGES.COMPLAINT_DETAILS',
    paragraphs: ['MESSAGES.HERE_ARE_THE_DETAILS_OF_YOUR_COMPLAINT'],
  };

  public static compliantDetailsResolvedSection3TrackComplaint = {
    paragraphs: ['MESSAGES.IT_LOOKS_LIKE_THIS_COMPLAINT_HAS_ALREADY_BEEN_RESOLVED_BY_OUR_TECHNICIAN_YOU_CAN_REOPEN_THE_COMPLAINT_IF_YOURE_STILL_FACING_AN_ISSUE'],
  };

  public static compliantAlreadyExistsTrackComplaint = {
    header: 'MESSAGES.COMPLAINT_ALREADY_EXISTS',
    paragraphs: ['MESSAGES.OUR_TEAM_IS_ALREADY_WORKING_ON_RESOLVING_THE_ISSUE', 'MESSAGES.YOU_WILL_BE_CONTACTED_BY_OUR_TECHNICIAN_SOON'],
  };

  public static compliantUnderProcessTrackComplaint = {
    header: 'MESSAGES.COMPLAINT_UNDER_PROCESS',
    paragraphs: ['MESSAGES.WE_APOLOGIZE_FOR_THE_DELAY_OUR_TEAM_IS_ALREADY_WORKING_ON_RESOLVING_THE_ISSUE_YOU_WILL_BE_CONTACTED_BY_OUR_TECHNICIAN_SOON'],
  };

  public static appointmentbookssuccessfullyCase = {
    header: 'MESSAGES.APPOINTMENT_BOOK_SUCCESSFULLY',
    paragraphs: ['MESSAGES.APPOINTMENT_BOOK_SUCCESSFULLY_BODY'],
  };

  public static routerNotReachableFormsuccessfullyCase = {
    header: 'MESSAGES.COMPLAINT_BOOK_SUCCESSFULLY',
    paragraphs: ['MESSAGES.APPOINTMENT_BOOK_SUCCESSFULLY_BODY'],
  };

  public static complaintFormsuccessfullyCase = {
    header: 'MESSAGES.COMPLAINT_BOOK_SUCCESSFULLY',
    paragraphs: ['MESSAGES.APPOINTMENT_BOOK_SUCCESSFULLY_BODY'],
  };

  public static tvBoxNotReachableFormsuccessfullyCase = {
    header: 'MESSAGES.COMPLAINT_BOOK_SUCCESSFULLY',
    paragraphs: ['MESSAGES.APPOINTMENT_BOOK_SUCCESSFULLY_BODY'],
  };

  public static tvBoxRestartssuccessfullyCase = {
    header: 'MESSAGES.TV_BOX_RESTART_REQUIRED_SUCCESSFULLY',
    paragraphs: ['MESSAGES.TV_BOX_RESTART_REQUIRED_SUCCESSFULLY_BODY'],
  };

  public static ontRestartssuccessfullyCase = {
    header: 'MESSAGES.ONT_RESTART_REQUIRED_SUCCESSFULLY',
    paragraphs: ['MESSAGES.ONT_RESTART_REQUIRED_SUCCESSFULLY_BODY'],
  };

  public static OpenTechnicalSR = {
    header: 'MESSAGES.OPEN_SERVICE_REQUEST',
    paragraphs: ['MESSAGES.OPEN_SERVICE_REQUEST_BODY'],
  };

  public static packageUpgradesuccessfullyCase = {
    header: 'MESSAGES.PACKAGE_UPGRADE_REQUEST_SUCCESSFULLY',
    paragraphs: ['MESSAGES.PACKAGE_UPGRADE_REQUEST_SUCCESSFULLY_BODY'],
  };

  public static resetCCBPinsuccessfullyCase = {
    header: 'MESSAGES.RESET_CCB_PIN_SUCCESSFULLY',
    paragraphs: ['MESSAGES.RESET_CCB_PIN_SUCCESSFULLY_BODY'],
  };

  public static changeCallForwardsuccessfullyCase = {
    header: 'MESSAGES.CHANGE_CALL_FORWARD_SUCCESSFULLY',
    paragraphs: ['MESSAGES.CHANGE_CALL_FORWARD_SUCCESSFULLY_BODY'],
  };

  public static tvBoxResetSuccessfullyCase = {
    header: 'MESSAGES.TVBOX_RESET_SUCCESSFULLY',
    paragraphs: ['MESSAGES.TVBOX_RESET_SUCCESSFULLY_BODY'],
  };

  public static troubeShootCompleteChannelNotListSuccessfullyCase = {
    header: 'MESSAGES.TVBOX_RESET_SUCCESSFULLY',
    paragraphs: ['MESSAGES.TVBOX_RESET_SUCCESSFULLY_BODY'],
  };

  public static routerFixedRestartRequired = {
    header: 'MESSAGES.ISSUE_FIXED_SUCCESSFULLY',
    body: [{ title: 'MESSAGES.WE_HAVE_FIXED_THE_TECHNICAL_ISSUES_PLEASE_RESTART_YOUR_ROUTER_AND_THEN_WAIT_FOR_5_MINUTES_BEFORE_USING_THE_INTERNET_AGAIN' }],
  };

  public static outageIssueMessageSection: IMessageIssue = {
    header: 'MESSAGES.NO_INTERNET_CONNECTION',
    body: [{ title: 'MESSAGES.NO_INTERNET_CONNECTION_BODY' }],
  };

  public static issueNotFixedAllServicesSection: IMessageIssue = {
    header: 'MESSAGES.NO_SERVICE',
    body: [
      { title: 'MESSAGES.THE_ELIFE_SERVICE_IS_DOWN_WE_ARE_SORRY_TO_BE_HOLDING_YOU_UP_THIS_TIME_PLEASE_TRY_AGAIN_LATER_OR_BOOK_AN_APPOINTMENT_FOR_A_TECHNICIAN_VISIT_INSTEAD' },
    ],
  };

  public static issueNotFixedMessageSection: IMessageIssue = {
    header: 'MESSAGES.NO_INTERNET_CONNECTION',
    body: [{ title: 'MESSAGES.NO_INTERNET_CONNECTION_BODY2' }],
  };

  public static issueNotFixedTVMessageSection: IMessageIssue = {
    header: 'TV_ISSUE_NOT_FIXED.SUB_HEADING',
    body: [{ title: 'TV_ISSUE_NOT_FIXED.TEXT1' }],
  };

  public static issueNotFixedPhoneMessageSection: IMessageIssue = {
    header: 'PHONE_ISSUE_NOT_FIXED.SUB_HEADING',
    body: [{ title: 'PHONE_ISSUE_NOT_FIXED.TEXT1' }],
  };

  public static routerRebootRequiredMessageSection: IMessageIssue = {
    header: 'MESSAGES.ISSUE_FIXED_SUCCESSFULLY',
    body: [{ title: 'MESSAGES.ISSUE_FIXED_SUCCESSFULLY_BODY1' }],
  };

  public static routerResetRequiredMessageSection: IMessageIssue = {
    header: 'MESSAGES.ISSUE_FIXED_SUCCESSFULLY',
    body: [{ title: 'MESSAGES.ISSUE_FIXED_SUCCESSFULLY_BODY2' }],
  };

  public static routerResetFactorySection: IMessageIssue = {
    header: 'MESSAGES.ROUTER_RESET_FACTORY',
    body: [{ title: 'MESSAGES.ROUTER_RESET_FACTORY_BODY' }],
  };

  public static phoneIssuesMainMessageSection: IMessageIssue = {
    header: 'MESSAGES.PHONE_ISSUE_MAIN_TITLE',
    body: [{ title: 'MESSAGES.PHONE_ISSUE_MAIN_TITLE_BODY1' }, { title: 'MESSAGES.PHONE_ISSUE_MAIN_TITLE_BODY2' }],
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

  public static phoneOutageMessageSection: IMessageIssue = {
    header: 'MESSAGES.UNPLANNED_INTERRUPTION',
    body: [{ title: 'MESSAGES.UNPLANNED_INTERRUPTION_BODY' }],
  };

  public static fiberBoxNotReachableBuilderSection: IMessageIssue = {
    header: 'MESSAGES.FIBER_BOX_NOT_REACHABLE',
    body: [{ title: 'MESSAGES.PLEASE_MAKE_SURE_THAT_THE_POWER_CABLE_FOR_WALL_MOUNTED_FIBER_BOX_IS_CONNECTED_PROPERLY_AND_POWER_IS_ON' }],
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

  public static routerNotReachableOwnRouterMessageSection: IMessageIssue = {
    header: 'MESSAGES.ROUTER_NOT_ACCESSIBLE',
    body: [
      {
        title: 'MESSAGES.PLEASE_MAKE_SURE_THAT',
        children: ['MESSAGES.RECONFIGURE_YOUR_ROUTER_BODY1_POINT1', 'MESSAGES.RECONFIGURE_YOUR_ROUTER_BODY1_POINT2', 'MESSAGES.RECONFIGURE_YOUR_ROUTER_BODY1_POINT3'],
      },
      {
        title: 'MESSAGES.RECONFIGURE_YOUR_ROUTER_BODY3',
      },
    ],
  };

  public static customerNotUsingSameRouterAllServicesSection: IMessageIssue = {
    header: 'MESSAGES.DEVICES_IS_NOT_ACCESSIBLE',
    body: [
      {
        title: 'MESSAGES.PLEASE_MAKE_SURE_THAT',
        children: [
          'MESSAGES.RECONFIGURE_YOUR_ROUTER_BODY1_POINT1',
          'MESSAGES.THE_TV_BOX_IS_SWITCHED_ON',
          'MESSAGES.THE_TELEPHONE_DEVICE_IS_SWITCHED_ON',
          'MESSAGES.RECONFIGURE_YOUR_ROUTER_BODY1_POINT2',
          'MESSAGES.THE_TV_BOX_IS_CONNECTED_TO_X_PORT_ON_THE_FIBER_BOX',
          'MESSAGES.THE_TELEPHONE_IS_CONNECTED_TO_X_PORT_ON_THE_FIBER_BOX',
          'MESSAGES.IF_ISSUE_IS_STILL_NOT_FIXED_PLEASE_RECONFIGURE_YOUR_ROUTER_WITH_THE_CORRECT_SETTINGS',
        ],
      },
      {
        title: 'MESSAGES.RECONFIGURE_YOUR_ROUTER_BODY3',
      },
    ],
  };

  public static phoneNotReachableAllServicesSection: IMessageIssue = {
    header: 'MESSAGES.WE_CANT_REACH_YOUR_PHONE',
    body: [
      {
        title: 'MESSAGES.ONE_OF_THESE_OPTIONS_COULD_BE_CAUSING_THE_ISSUE',
        children: ['MESSAGES.THE_PHONE_IS_NOT_SWITCHED_ON', 'MESSAGES.THE_CABLE_ISNT_CONNECTED_PROPERLY', 'MESSAGES.THE_PHONE_IS_FAULTY'],
      },
      {
        title: 'MESSAGES.TAP_TRY_AGAIN_LATER_IF_YOU_WANT_TO_CHECK_THE_PROBLEM_LATER',
      },
      {
        title: 'MESSAGES.TAP_BOOK_AN_APPOINTMENT_IF_YOU_WANT_TO_BOOK_A_TECHNICIAN_VISIT',
      },
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

  public static tvBoxFactoryResetSection: IMessageIssue = {
    header: 'MESSAGES.TV_BOX_RESET_FACOTORY',
    body: [
      {
        title: 'MESSAGES.TV_BOX_RESET_FACOTORY_BODY',
      },
    ],
  };

  public static ontRestartMessageSection: IMessageIssue = {
    header: 'MESSAGES.ISSUE_FIXED_SUCCESSFULLY',
    body: [
      {
        title: 'MESSAGES.ONT_REBOOT_REQUIRED_BODY1',
      },
      {
        title: 'MESSAGES.ONT_REBOOT_REQUIRED_BODY2',
      },
    ],
  };

  public static ontRestartTVAllServices: IMessageIssue = {
    header: 'MESSAGES.ISSUE_FIXED_SUCCESSFULLY',
    body: [
      {
        title: 'MESSAGES.WE_HAVE_FIXED_ALL_THE_TECHNICAL_ISSUES',
      },
      {
        title: 'MESSAGES.PLEASE_RESTART_THE_WALL-MOUNTED_FIBER_BOX_AND_THEN_TRY_USING_THE_TV_AGAIN',
      },
    ],
  };

  public static unableWatchChannelsMessageSection: IMessageIssue = {
    header: '',
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
    ],
  };

  public static appointmentSetSuccessfullyTrackRequest = {
    header: 'MESSAGES.APPOINTMENT_SET_SUCCESSFULLY',
    paragraphs: ['MESSAGES.YOUR_APPOINTMENT_HAS_BEEN_SET_SUCCESSFULLY', 'MESSAGES.THANK_YOU_FOR_USING_OUR_TECHNICAL_SUPPORT'],
  };

  // public static noIssuesPhoneCareSection1: IMessageIssue = {
  //   header: '',
  //   body: [
  //     {
  //       title: 'PHONE_ISSUES_CARE.Heading1',
  //       children: ['PHONE_ISSUES_CARE.BODY1Children1', 'PHONE_ISSUES_CARE.BODY1Children2'],
  //     },
  //   ],
  // };

  // public static noIssuesPhoneCareSection2: IMessageIssue = {
  //   header: '',
  //   body: [
  //     {
  //       title: 'PHONE_ISSUES_CARE.Heading2',
  //       children: ['PHONE_ISSUES_CARE.BODY2Children1', 'PHONE_ISSUES_CARE.BODY2Children2', 'PHONE_ISSUES_CARE.BODY2Children3'],
  //     },
  //   ],
  // };

  public static routerUpgradesuccessfullyCase = {
    header: 'MESSAGES.ROUTER_UPGRADE_REQUEST_SUCCESSFULLY',
    paragraphs: ['MESSAGES.ROUTER_UPGRADE_REQUEST_SUCCESSFULLY_BODY'],
  };

  public static eLifeUpgradeSuccess = {
    header: 'MESSAGES.ELIFE_UPGRADE_SUCCESS',
    paragraphs: ['MESSAGES.ROUTER_UPGRADE_REQUEST_SUCCESSFULLY_BODY'],
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
    paragraphs: ['MESSAGES.PLEASE_WAIT_FOR_5_MINUTES_BEFORE_USING_THE_INTERNET_AGAIN', 'MESSAGES.CONTINUE_TO_CONFIGURE_YOUR_WI-FI_SETTINGS'],
  };

  public static resetWifiResetSecondsuccessfullyCase = {
    header: 'MESSAGES.RESET_WIIF_PASSWORD_SECOND_SUCCESSFULLY',
    paragraphs: [
      'MESSAGES.PLEASE_WAIT_FOR_5_MINUTES_BEFORE_USING_THE_INTERNET_AGAIN',
      'MESSAGES.YOUR_NEW_PASSWORD_IS_XXXX_MAKE_SURE_TO_USE_THE_NEW_WIFI_PASSWORD_TO_CONNECT_TO_THE_ROUTER',
    ],
  };

  public static troubleshootComplete = {
    header: 'MESSAGES.TROUBLESHOOT_COMPLETE_HEADING',
    paragraphs: ['MESSAGES.TROUBLESHOOT_COMPLETE_BODY'],
  };

  public static restELifeLoginPin = {
    header: 'MESSAGES.RESET_ELIFEON_PIN_HEADING',
    paragraphs: ['MESSAGES.PLEASE_RESET_YOUR_ELIFEON_PIN_TO_FIX_THE_ISSUE_IT_WILL_BE_RESET_TO_THE_DEFAULT_PIN_1111_ELIFE'],
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

  public static unableWatchSpecificChannelPackageTransferSuccess = {
    header: 'MESSAGES.UNABLE_WATCH_SPECIFIC_CHANNEL_PACKAGE_TRANSFER_SUCCESS_HEADING',
    paragraphs: ['MESSAGES.UNABLE_WATCH_SPECIFIC_CHANNEL_PACKAGE_TRANSFER_SUCCESS_BODY'],
  };

  public static resetInternetPasswordSuccess = {
    header: 'MESSAGES.RESET_INTERNET_PASSWORD_SUCCESS',
    paragraphs: ['MESSAGES.RESET_INTERNET_PASSWORD_SUCCESS_BODY', 'MESSAGES.RESET_INTERNET_PASSWORD_SUCCESS_BODY2'],
  };

  public static InstallNewRouterComplaintRaisedSuccessfully = {
    header: 'MESSAGES.COMPLAINT_RAISED_SUCCESSFULLY!',
    paragraphs: ['MESSAGES.WE_HAVE_RECEIVED_YOUR_COMPLAINT_AND_BOOKED_AN_APPOINTMENT_OUR_TECHNICIAN_WILL_CONTACT_YOU_SOON'],
  };

  public static requestDetails = {
    header: 'MESSAGES.REQUEST_DETAILS',
    paragraphs: ['MESSAGES.HERE_ARE_THE_DETAILS_OF_YOUR_REQUEST'],
  };

  public static requestUnderProcess = {
    header: 'MESSAGES.REQUEST_UNDER_PROCESS',
    paragraphs: ['MESSAGES.PLEASE_WAIT_..._YOUR_REQUEST_WILL_BE_PROCESSED_SOON'],
  };

  public static requestAlreadyExists = {
    header: 'MESSAGES.REQUEST_ALREADY_EXISTS',
    paragraphs: ['MESSAGES.THERE_IS_ALREADY_AN_APPOINTMENT_SCHEDULED_FOR_PROVIDING_THE_SERVICE'],
  };

  public static appointmentChangeSuccess = {
    header: 'MESSAGES.APPOINTMENT_CHANGED_SUCCESSFULLY',
    paragraphs: ['MESSAGES.YOUR_APPOINTMENT_HAS_BEEN_CHANGED_SUCCESSFULLY._THANK_YOU_FOR_USING_OUR_TECHNICAL_SUPPORT'],
  };

  public static serviceUnavailable = {
    header: 'MESSAGES.SERVICE_UNAVAILABLE',
    paragraphs: ['MESSAGES.THIS_SERVICE_IS_COMING_TO_YOUR_AREA_SOON._OUR_TEAM_WILL_CONTACT_YOU_ONCE_IT_IS_AVAILABLE'],
  };

  public static actionRequired = {
    header: 'MESSAGES.ACTION_REQUIRED',
    paragraphs: ["MESSAGES.THERE_IS_SOME_WORK_PENDING_FROM_YOUR_SIDE._PLEASE_TAP_'SET_AN_APPOINTMENT'_IF_YOU_HAVE_ALREADY_COMPLETED_IT"],
  };

  public static noAdditionalSTB = {
    header: 'MESSAGES.NO_ADDITIONAL_STB',
    paragraphs: ["MESSAGES.SORRY,_TRANSFER_OF_PACKAGE_IS_NOT_APPLICABLE_AS_YOU_DON'T_HAVE_ADDITIONAL_STB"],
  };

  public static noNonSharedPackage = {
    header: 'MESSAGES.NO_NON_SHARED_PACKAGE',
    paragraphs: ['MESSAGES.YOU_ARE_SUBSCRIBED_FOR_SHARED_TV_PACKAGES_THAT_CAN_BE_VIEWED_FROM_ALL_YOUR_STBS'],
  };

  public static errorOccured = {
    header: 'MESSAGES.Error_Occured',
    paragraphs: ['MESSAGES.Error_Occured_BODY'],
  };

  public static tryAgainErrorOccured = {
    header: 'MESSAGES.Error_Occured',
    paragraphs: ['MESSAGES.Error_Occured_TRY_AGAIN_BODY'],
  };

  public static resetInternetPasswordSuccessDetail = {
    header: 'MESSAGES.RESET_INTERNET_PASSWORD_SUCCESS',
    paragraphs: ['MESSAGES.RESET_INTERNET_PASSWORD_SUCCESS_DETAIL_BODY', 'MESSAGES.RESET_INTERNET_PASSWORD_SUCCESS_DETAIL_BODY2'],
  };

  public static resetRouterWifiPasswordSuccess = {
    header: 'MESSAGES.RESET_ROUTER_WIFI_PASSWORD_SUCCESS',
    paragraphs: ['MESSAGES.RESET_ROUTER_WIFI_PASSWORD_SUCCESS_BODY'],
  };

  public static unableToReachRouter = {
    header: 'MESSAGES.UNABLE_TO_REACH_ROUTER',
    paragraphs: ['MESSAGES.UNABLE_TO_REACH_ROUTER_BODY'],
  };

  public static unableToReachRouterFailed = {
    header: 'MESSAGES.UNABLE_TO_REACH_ROUTER',
    paragraphs: ['MESSAGES.UNABLE_TO_REACH_ROUTER_FAILED_BODY'],
  };

  public static unableToResetPassword = {
    header: 'MESSAGES.UNABLE_TO_RESET_PASSWORD',
    paragraphs: ['MESSAGES.UNABLE_TO_RESET_PASSWORD_BODY', 'MESSAGES.UNABLE_TO_RESET_PASSWORD_BODY2'],
  };

  public static unableToProcessRequest = {
    header: 'MESSAGES.UNABLE_TO_PROCESS_REQUEST',
    paragraphs: ['MESSAGES.UNABLE_TO_PROCESS_REQUEST_BODY'],
  };

  //#region  Quick Links
  public static installNewRouterMessageCase = {
    header: 'MESSAGES.INSTALL_NEW_ROUTER',
    paragraphs: ['MESSAGES.INSTALL_NEW_ROUTER_BODY1', 'MESSAGES.INSTALL_NEW_ROUTER_BODY2'],
  };

  public static installNewRouterFlow2MessageCase = {
    header: 'MESSAGES.INSTALL_NEW_ROUTER',
    paragraphs: [
      'MESSAGES.YOU_ARE_CURRENTLY_USING_AN_ETISALAT_ROUTER_WE_CAN_PROVIDE_REMOTE_SUPPORT_IF_YOU_CONTINUE_USING_THIS_ROUTER',
      'MESSAGES.HOWEVER_THIS_SERVICE_WILL_NOT_BE_AVAILABLE_IF_YOU_INSTALL_A_THIRD_PARTY_ROUTER',
    ],
  };

  public static installNewRouterFlow5MessageCase = {
    header: 'MESSAGES.INSTALL_ROUTER',
    paragraphs: [
      'MESSAGES.YOU_ARE_CURRENTLY_USING_A_THIRD-PARTY_ROUTER',
      'MESSAGES.WE_CAN_PROVIDE_REMOTE_SUPPORT_IF_YOU_INSTALL_AN_ETISALAT_ROUTER',
      'MESSAGES.IF_YOU_CHOOSE_THE_SECOND_OPTION_YOU_WILL_NEED_TO_WAIT_30_MINUTES_AND_THEN_RESET_YOUR_INTERNET_PASSWORD',
    ],
  };

  public static installNewRouterFlow4MessageCase = {
    header: 'MESSAGES.INSTALLING_THIRD-PARTY_ROUTER',

    paragraphs: [
      {
        title: 'MESSAGES.INSTALLATION_OF_ROUTER_IS_IN_PROGESS..._IT_WILL_TAKE_UP_TO_30_MINUTEs',
      },
      {
        title: 'MESSAGES.FOLLOW_THESE_STEPS_AFTER_30_MINUTES',
        children: ['MESSAGES.CONNECT_THE_NEW_ROUTER_TO_X_PORT_OF_THE_WALL-MOUNTED_FIBER_BOX', 'MESSAGES.SET_THE_ROUTER_WITH_A_NEW_PASSWORD'],
      },
    ],
  };

  public static installNewRouterFlow6MessageCase = {
    header: 'MESSAGES.INSTALLING_ETISALAT_ROUTER',

    paragraphs: [
      {
        title: 'MESSAGES.INSTALLATION_OF_ROUTER_IS_IN_PROGESS..._IT_WILL_TAKE_UP_TO_30_MINUTEs',
      },
      {
        title: 'MESSAGES.FOLLOW_THESE_STEPS_AFTER_30_MINUTES',
        children: [
          'MESSAGES.CONNECT_THE_NEW_ROUTER_TO_X_PORT_OF_THE_WALL-MOUNTED_FIBER_BOX',
          'MESSAGES.WAIT_FOR_5_MINUTES_THE_ROUTER_WILL_BE_CONFIGURED_WITH_NEW_PASSWORD_AUTOMATICALLY_AND_YOU_WILL_BE_ABLE_TO_USE_INTERNET_SERVICE_NORMALLY',
        ],
      },
    ],
  };

  public static installNewRouterFlow7MessageCase = {
    header: 'MESSAGES.INSTALL_NEW_THIRD-PARTY_ROUTER',

    paragraphs: [
      {
        title: 'MESSAGES.FOLLOW_THESE_STEPS_TO_COMPLETE_THE_INSTALLATION',
        children: ['MESSAGES.Connect_the_new_router_to_the_‘X’_port_of_the_wall-mounted_fiber_BOX', 'MESSAGES.SET_THE_ROUTER_WITH_A_NEW_PASSWORD'],
      },
    ],
  };

  public static routerInstallSuccessfullyMessageCase = {
    header: 'MESSAGES.ROUTER_INSTALL_SUCCESSFULLY',
    paragraphs: ['MESSAGES.ROUTER_INSTALL_SUCCESSFULLY_BODY'],
  };

  public static routerInstallFailedMessageCase = {
    header: 'MESSAGES.ROUTER_INSTALL_FAILED',
    paragraphs: ['MESSAGES.ROUTER_INSTALL_FAILED_BODY'],
  };
  //#endregion Quick Links

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
    linkTo: '/issues/internet/reset-internet-password',
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
    title: 'LINKS.NO_I_WANT_TO_REPORT_ANOTHER_ISSUE',
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

  public static restartOntNowButton: IButton = {
    title: 'BUTTONS.RESTART_ONT_NOW',
    clickListener: () => {},
    linkTo: '/ont-restart-required-successfully',
    behaviour: 'primary',
  };

  public static restartManuallyLink: IButton = {
    title: 'BUTTONS.RESTART_MANUALLY',
    clickListener: () => {},
    linkTo: '/tvBox-restart-required-manually',
    behaviour: 'link',
  };

  public static ontrestartManuallyLink: IButton = {
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

  public static deviceCareOntManualRestartButton: IButton = {
    title: 'BUTTONS.VIEW_DEVICE_CARE',
    explanatoryNote: '',
    clickListener: () => {},
    linkTo: 'ont-restart-required-device-care',
    behaviour: 'primary',
  };

  public static issueFixedButton: IButton = {
    title: 'BUTTONS.ISSUE_FIXED',
    clickListener: () => {},
    linkTo: '/thanks',
    behaviour: 'primary',
  };

  public static DeviceCareLink: IButton = {
    title: 'LINKS.DEVICE_CARE',
    clickListener: () => {},
    linkTo: '/router-not-reachable-own-router-care',
    behaviour: 'link',
  };

  public static issueFixedTvButton: IButton = {
    title: 'BUTTONS.ISSUE_FIXED',
    clickListener: () => {},
    linkTo: '/issues/tv/detail',
    behaviour: 'primary',
  };

  public static issueFixedPhoneButton: IButton = {
    title: 'BUTTONS.ISSUE_FIXED',
    clickListener: () => {},
    linkTo: '/issues/tv/detail',
    behaviour: 'primary',
  };

  public static continueToTroubleshootTvIssueButton: IButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    clickListener: () => {},
    linkTo: '',
    customListner: 'openInternetIssueDialog',
    behaviour: 'link',
  };

  public static continueToTroubleshootPhoneIssueButton: IButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    clickListener: () => {},
    linkTo: '',
    customListner: 'openPhoneIssueDialog',
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

  public static continueToTroubleshootRouterNotReachableButton: IButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'link',
    customListner: 'RouterNotReachableAppInternetIssuesDialog',
  };

  public static continueToTroubleshootRouterNotReachableOwnRouterButton: IButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'link',
    customListner: '',
  };

  public static continueToTroubleshootRouterNotReachableDeviceCareOwnRouterButton: IButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'link',
    customListner: 'RouterNotReachableOwnRouterAppInternetIssuesDialog',
  };

  public static continueToTroubleshootPhoneIssuesCareButton: IButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'link',
    customListner: '',
  };

  public static requestSupportPhoneIssuesCareButton: IButton = {
    title: 'BUTTONS.REQUEST_SUPPORT',
    clickListener: () => {},
    linkTo: '/issues/internet/unable-to-browse-internet/step3',
    behaviour: 'link',
    customListner: '',
  };

  public static requestSupportProblemValueAddedButton: IButton = {
    title: 'BUTTONS.REQUEST_SUPPORT',
    clickListener: () => {},
    linkTo: 'issues/internet/unable-to-browse-internet/step3',
    behaviour: 'link',
    customListner: '',
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

  public static buyEtisalatRouterButton: IButton = {
    title: 'BUTTONS.BUY_ETISALAT_ROUTER',
    explanatoryNote: '',
    clickListener: () => {},
    linkTo: '/thanks',
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

  public static cancelBackLocationLink: IButton = {
    title: 'BUTTONS.CANCEL',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'link',
    customListner: 'cancelBackLocationLink',
  };

  public static BackLocationLink: IButton = {
    title: 'BUTTONS.BACK',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'link',
    customListner: 'cancelBackLocationLink',
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

  public static rebootMyDevicePhoneIssuesButton: IButton = {
    title: 'BUTTONS.REBOOT_MY_DEVICES',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'secondary',
    customListner: '',
  };

  public static resetWifiButton = {
    title: 'BUTTONS.YES_RESET_WIFI_PASSWORD',
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

  public static usingSameRouterRouterNotReachableButton = {
    title: 'BUTTONS.USING_THE_SAME_ROUTER',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'primary',
    customListner: 'RouterNotReachableAppInternetIssuesDialog',
    explanatoryNote: 'TEXT.USING_THE_SAME_ROUTER',
  };

  public static usingOwnRouterButton = {
    title: 'LINKS.USING_OWN_ROUTER',
    clickListener: () => {},
    linkTo: '/router-not-reachable-own-router',
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
    title: 'BUTTONS.ISSUE_RESOLVED',
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

  public static stillFacingIssueResetTvBoxLink = {
    title: 'BUTTONS.STILL_FACING_ISSUE',
    clickListener: () => {},
    linkTo: '/troubleshoot-complete',
    behaviour: 'link',
  };

  public static issueResolvedLink = {
    title: 'BUTTONS.ISSUE_RESOLVED',
    clickListener: () => {},
    linkTo: '/thanks',
    behaviour: 'link',
  };

  public static backButton = {
    title: 'BUTTONS.BACK',
    clickListener: () => {},
    linkTo: '/issues/tv/detail',
    behaviour: 'secondary',
  };

  public static backCloseModalButton = {
    title: 'BUTTONS.BACK',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'secondary',
    customListner: 'dismiss',
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
    linkTo: 'issues/tv/package-transfer-success',
    behaviour: 'primary',
  };

  public static unableWatchSpecificChannelconfirmTransferButton = {
    title: 'BUTTONS.CONFIRM_TRANSFER',
    clickListener: () => {},
    linkTo: 'issues/tv/unable-to-watch-package-transfer-success',
    behaviour: 'primary',
  };

  public static unableToWatchButtons: IButton[] = [CustomerJourneyConstants.issueResolvedButton, CustomerJourneyConstants.continueToTroubleshootEnableToWatchButton];

  public static tvAdminPinResetSuccessfullyButton: IButton[] = [CustomerJourneyConstants.okButtonSecondary];

  public static resetTvPinButton: IButton[] = [CustomerJourneyConstants.backButton, CustomerJourneyConstants.confirmButton];

  public static routerNotReachableButtons: IButton[] = [CustomerJourneyConstants.usingSameRouterRouterNotReachableButton, CustomerJourneyConstants.usingOwnRouterButton];

  public static tvBoxNotReachableButtons: IButton[] = [CustomerJourneyConstants.tryAgainButton, CustomerJourneyConstants.issueResolvedLink];
  public static tvBoxNotReachableTryAgainButtons: IButton[] = [CustomerJourneyConstants.bookAppointmentButton, CustomerJourneyConstants.tryAgainLaterLink];
  public static tvBoxRestartDialogButtons: IButton[] = [CustomerJourneyConstants.exitTroubleShootingPrimaryButton, CustomerJourneyConstants.backCloseModalButton];

  public static channelNotListDialogButtons: IButton[] = [CustomerJourneyConstants.endTrobleShootingPrimaryButton, CustomerJourneyConstants.channelNotListDialogCancelButton];

  public static tvBoxRestartRequiredButtons: IButton[] = [CustomerJourneyConstants.restartStbNowButton, CustomerJourneyConstants.restartManuallyLink];

  public static ontRebootButtons: IButton[] = [CustomerJourneyConstants.restartOntNowButton, CustomerJourneyConstants.ontrestartManuallyLink];

  public static routerResetRequiredButtons: IButton[] = [CustomerJourneyConstants.resetNowButton1, CustomerJourneyConstants.closeButton];

  public static openServiceRequestCaseButtons: IButton[] = [CustomerJourneyConstants.followUpButton, CustomerJourneyConstants.exitTroubleShootingButton];

  public static outageButtons: IButton[] = [CustomerJourneyConstants.okButton, CustomerJourneyConstants.bookAComplaintButton];

  public static phoneOutageButtons: IButton[] = [CustomerJourneyConstants.okButton, CustomerJourneyConstants.bookAComplaintButton];

  public static openComplaintButtons: IButton[] = [CustomerJourneyConstants.yesButton, CustomerJourneyConstants.bookAnotherComplaintButton];

  public static routerRebootRequiredButtons: IButton[] = [CustomerJourneyConstants.restartNowButton, CustomerJourneyConstants.closeButton];

  public static appointmentbookssuccessfullyButtons: IButton[] = [CustomerJourneyConstants.trackComplaintStatusLink, CustomerJourneyConstants.doneButtonSecondary];

  public static complaintbookssuccessfullyButtons: IButton[] = [CustomerJourneyConstants.trackComplaintStatusLink, CustomerJourneyConstants.doneButtonSecondary];

  public static tvBoxRestartSuccessfullyButtons: IButton[] = [CustomerJourneyConstants.doneButtonPrimary];

  public static ontRestartSuccessfullyButtons: IButton[] = [CustomerJourneyConstants.continueButton];

  public static tvBoxRestartManuallyButtons: IButton[] = [CustomerJourneyConstants.deviceCareTvBoxManualRestartButton, CustomerJourneyConstants.closeButton];

  public static ontRestartManuallyButtons: IButton[] = [CustomerJourneyConstants.deviceCareOntManualRestartButton, CustomerJourneyConstants.closeButton];

  public static routerRestartManuallyButtons: IButton[] = [CustomerJourneyConstants.deviceCareButton, CustomerJourneyConstants.closeButton];

  public static tvBoxRestartDeviceCareButtons: IButton[] = [CustomerJourneyConstants.issueFixedButton, CustomerJourneyConstants.continueToTroubleshootTVBoxButton];

  public static unableWatchChannelsDeviceCareButtons: IButton[] = [CustomerJourneyConstants.resetTVBoxButton, CustomerJourneyConstants.issueResolvedLink];

  public static routerNotReachableOwnRouterButtons: IButton[] = [
    CustomerJourneyConstants.DeviceCareLink,
    CustomerJourneyConstants.issueFixedButton,
    CustomerJourneyConstants.continueToTroubleshootRouterNotReachableOwnRouterButton,
  ];

  public static routerNotReachableDeviceCareOwnRouterButtons: IButton[] = [
    CustomerJourneyConstants.issueFixedButton,
    CustomerJourneyConstants.continueToTroubleshootRouterNotReachableDeviceCareOwnRouterButton,
  ];

  public static ontRestartManuualDeviceCareOwnRouterButtons: IButton[] = [CustomerJourneyConstants.issueFixedButton];

  public static phoneIssuesCareButtons: IButton[] = [CustomerJourneyConstants.issueFixedButton, CustomerJourneyConstants.requestSupportPhoneIssuesCareButton];

  public static phoneIssuesProblemValueAddedButtons: IButton[] = [CustomerJourneyConstants.issueFixedButton, CustomerJourneyConstants.requestSupportProblemValueAddedButton];

  public static packageUpdareRequestsuccessfullyButtons: IButton[] = [CustomerJourneyConstants.doneButtonPrimary];

  public static tvBoxResetSuccessfullyButtons: IButton[] = [CustomerJourneyConstants.issueResolvedButton, CustomerJourneyConstants.stillFacingIssueResetTvBoxLink];

  public static routerUpdateRequestsuccessfullyButtons: IButton[] = [CustomerJourneyConstants.doneButtonPrimary];

  public static routerPackageUpdateRequestsuccessfullyButtons: IButton[] = [CustomerJourneyConstants.doneButtonPrimary];

  public static thirdPartyRoutersuccessfullyButtons: IButton[] = [CustomerJourneyConstants.doneButtonPrimary];

  public static resestWifiPasswordSuccessFirstCaseButtons: IButton[] = [CustomerJourneyConstants.continueToWIfiSettingButton];

  public static resestWifiPasswordSuccessSecondCasesuccessfullyButtons: IButton[] = [CustomerJourneyConstants.okButtonSecondary];

  public static issuesNotFixedButtons: IButton[] = [CustomerJourneyConstants.tryAgainLaterButton, CustomerJourneyConstants.bookAComplaintButton];

  public static openTechnicalSrButtons: IButton[] = [CustomerJourneyConstants.followUpButton, CustomerJourneyConstants.continueToTroubleshootButton];

  public static internetPasswordResetButtons: IButton[] = [CustomerJourneyConstants.resetNowButton2, CustomerJourneyConstants.closeButton];

  public static resetWifiPasswordFistSuccessButtons: IButton[] = [CustomerJourneyConstants.resetWifiPasswordSuccessButton];

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

  public static noIssuePhoneButton: IButton[] = [
    CustomerJourneyConstants.issueFixedPhoneButton,
    CustomerJourneyConstants.rebootMyDevicePhoneIssuesButton,
    CustomerJourneyConstants.continueToTroubleshootPhoneIssueButton,
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

  public static packageAvailableButtonsUnableWatchSpecific: IButton[] = [CustomerJourneyConstants.skipToNextStep, CustomerJourneyConstants.cancelBackLocationLink];
  public static unableWatchSpecificTransferPackageButtons: IButton[] = [
    CustomerJourneyConstants.unableWatchSpecificChannelconfirmTransferButton,
    CustomerJourneyConstants.closeButton,
  ];
}

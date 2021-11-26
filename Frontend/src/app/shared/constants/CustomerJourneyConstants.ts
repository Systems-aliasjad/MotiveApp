import { IMessageIssue } from './types';

export class CustomerJourneyConstants {
  public static openServiceRequestCase1 = {
    header: 'MESSAGES.WE_ARE_MOVING_YOUR_ELIFE_CONNECTION',
    paragraphs: ['MESSAGES.THE_SERVICE_WILL_BE_DISCONTINUED_WHILE_THE_TRANSFER_IS_UNDER_PROCESS', 'MESSAGES.TRY_USING_IT_ONCE_YOUR_ELIFE_CONNECTION_HAS_BEEN_MOVED_SUCCESSFULLY'],
  };

  public static openServiceRequestCase2 = {
    header: 'MESSAGES.ACCOUNT_TEMPORARILY_DISCONNECTED',
    paragraphs: [
      'MESSAGES.THE_SERVICE_WONT_WORK_AS_YOUR_ACCOUNT_HAS_BEEN_DISCONNECTED_TEMPORARILY_BASED_UPON_YOUR_REQUEST_THE_SERVICE_WILL_BE_BACK_ON_XXX_CLICK_HERE_IF_YOU_WANT_TO_RECONNECT_YOUR_SERVICE',
    ],
  };

  public static openServiceRequestCase3 = {
    header: 'MESSAGES.YOU_ELIFE_SERVICE_CANCELLATION_REQUEST_IS_IN_PROGRESS',
    paragraphs: ['MESSAGES.THE_SERVICE_WONT_WORK_AS_YOUR_ACCOUNT_IS_BEING_CANCELLED_BASED_UPON_YOUR_REQUEST'],
  };

  public static complaintExistsCase1 = {
    header: 'MESSAGES.COMPLAINT_ALREADY_EXISTS',
    paragraphs: ['MESSAGES.OUR_TECHNICIANS_ARE_ALREADY_WORKING_ON_RESOLVING_THE_ISSUE_DO_YOU_WANT_TO_FOLLOW_UP_ON_THE_SAME_COMPLAINT'],
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
    paragraphs: ['MESSAGES.WE_HAVE_RECEIVED_YOUR_COMPLAIN_AND_BOOKED_AN_APPOINTMENT_OUR_TECHNICIAN_WILL_CONTACT_YOU_SOON'],
  };

  public static routerNotReachableFormsuccessfullyCase = {
    header: 'MESSAGES.COMPLAINT_BOOK_SUCCESSFULLY',
    paragraphs: ['MESSAGES.WE_HAVE_RECEIVED_YOUR_COMPLAIN_AND_BOOKED_AN_APPOINTMENT_OUR_TECHNICIAN_WILL_CONTACT_YOU_SOON'],
  };

  public static complaintFormsuccessfullyCase = {
    header: 'MESSAGES.COMPLAINT_BOOK_SUCCESSFULLY',
    paragraphs: ['MESSAGES.WE_HAVE_RECEIVED_YOUR_COMPLAIN_AND_BOOKED_AN_APPOINTMENT_OUR_TECHNICIAN_WILL_CONTACT_YOU_SOON'],
  };
  public static complaintRaisedSuccessfullyCase = {
    header: 'MESSAGES.COMPLAINT_RAISED_SUCCESSFULLY',
    paragraphs: ['MESSAGES.WE_HAVE_RECEIVED_YOUR_COMPLAIN_AND_BOOKED_AN_APPOINTMENT_OUR_TECHNICIAN_WILL_CONTACT_YOU_SOON'],
  };

  public static tvBoxNotReachableFormsuccessfullyCase = {
    header: 'MESSAGES.COMPLAINT_BOOK_SUCCESSFULLY',
    paragraphs: ['MESSAGES.WE_HAVE_RECEIVED_YOUR_COMPLAIN_AND_BOOKED_AN_APPOINTMENT_OUR_TECHNICIAN_WILL_CONTACT_YOU_SOON'],
  };

  public static singleSTBFountError = {
    header: 'MESSAGES.SINGLE_STB_FOUND',
    paragraphs: ['MESSAGES.PLEASE_TRY_AGAIN_LATER'],
  };

  public static tvBoxRestartssuccessfullyCase = {
    header: 'MESSAGES.TV_BOX_RESTARTED_SUCCESSFULLY',
    paragraphs: ['MESSAGES.PLEASE_WAIT_FOR_5_MINUTES_AND_THEN_TRY_USING_THE_INTERNET_AGAIN'],
  };

  public static ontRestartssuccessfullyCase = {
    header: 'MESSAGES.FIBER_BOX_RESTARTED_SUCCESSFULLY',
    paragraphs: ['MESSAGES.PLEASE_WAIT_FOR_5_MINUTES_AND_THEN_TRY_USING_THE_SERVICE_AGAIN'],
  };

  public static OpenTechnicalSR = {
    header: 'MESSAGES.OPEN_SERVICE_REQUEST',
    paragraphs: ['MESSAGES.WE_NOTICED_THAT_THERE_IS_AN_OPEN_SERVICE_REQUEST'],
  };

  public static packageUpgradesuccessfullyCase = {
    header: 'MESSAGES.PACKAGE_UPGRADE_REQUEST_WAS_RAISED_SUCCESSFULLY',
    paragraphs: ['MESSAGES.THANK_YOU_FOR_YOUR_REQUEST_WE_WILL_CALL_YOU_BACK_WITHIN_24_HRS'],
  };

  public static thirdPartyUpgradesuccessfullyCase = {
    header: 'MESSAGES.NEW_ROUTER_REQUEST_WAS_RAISED_SUCCESSFULLY',
    paragraphs: ['MESSAGES.THANK_YOU_FOR_YOUR_REQUEST_WE_WILL_CALL_YOU_BACK_WITHIN_24_HRS'],
  };

  public static resetCCBPinsuccessfullyCase = {
    header: 'MESSAGES.CCB_PIN_RESET_SUCCESSFULLY',
    paragraphs: ['MESSAGES.YOU_CAN_NOW_ENABLE_CALL_BARRING_USING_THE_NEW_PIN'],
  };

  public static resetCCBPinsuccessfullyPasswordCase = {
    header: 'MESSAGES.CCB_PIN_RESET_SUCCESSFULLY',
    paragraphs: ['MESSAGES.YOU_CAN_NOW_ENABLE_DISABLE_CALL_BARRING_USING_THE_NEW_PIN'],
  };
  public static resetCCBPinFailedCase = {
    header: 'MESSAGES.CCB_PIN_RESET_FAILED',
    paragraphs: ['MESSAGES.PLEASE_TRY_AGAIN_LATER'],
  };

  public static changeCallForwardsuccessfullyCase = {
    header: 'MESSAGES.CALL_FORWARDING_NUMBER_CHANGED_SUCCESSFULLY',
    paragraphs: ['MESSAGES.YOUR_CALLS_WILL_NOW_BE_FORWARDED_TO_THE_NEW_NUMBER'],
  };
  public static changeCallForwardFailedCase = {
    header: 'MESSAGES.CALL_FORWARDING_NUMBER_CHANGE_FAILED',
    paragraphs: ['MESSAGES.PLEASE_TRY_AGAIN_LATER'],
  };

  public static tvBoxResetSuccessfullyCase = {
    header: 'MESSAGES.TV_BOX_RESET_SUCCESSFULL',
    paragraphs: ['MESSAGES.YOU_SHOULD_BE_ABLE_TO_WATCH_THE_CHANNEL_NOW_PLEASE_CONFIRM_WHETHER_THE_ISSUE_HAS_BEEN_FIXED_OR_NOT'],
  };

  public static troubeShootCompleteChannelNotListSuccessfullyCase = {
    header: 'MESSAGES.TV_BOX_RESET_SUCCESSFULL',
    paragraphs: ['MESSAGES.YOU_SHOULD_BE_ABLE_TO_WATCH_THE_CHANNEL_NOW_PLEASE_CONFIRM_WHETHER_THE_ISSUE_HAS_BEEN_FIXED_OR_NOT'],
  };

  public static routerFixedRestartRequired = {
    header: 'MESSAGES.ISSUE_FIXED_SUCCESSFULLY',
    body: [{ title: 'MESSAGES.WE_HAVE_FIXED_THE_TECHNICAL_ISSUES_PLEASE_RESTART_YOUR_ROUTER_AND_THEN_WAIT_FOR_5_MINUTES_BEFORE_USING_THE_INTERNET_AGAIN' }],
  };

  public static outageIssueMessageSection: IMessageIssue = {
    header: 'MESSAGES.NO_INTERNET_CONNECTION',
    body: [
      {
        title:
          'MESSAGES.WE_ARE_FACING_AN_UNPLANNED_INTERRUPTION_OF_HOME_SERVICES_IN_YOUR_AREA_WHICH_IS_BEYOND_OUR_CONTROL_REST_ASSURED_THAT_THAT_OUR_TEAMS_ARE_WORKING_ON_RESOLVING_THE_ISSUE_WE_SHALL_SEND_AN_SMS_TO_YOUR_REGISTERED_CONTACT_NUMBER_ONCE_THE_SERVICE_IS_RESTORED',
      },
    ],
  };

  public static issueNotFixedAllServicesSection: IMessageIssue = {
    header: 'MESSAGES.NO_SERVICE',
    body: [
      { title: 'MESSAGES.THE_ELIFE_SERVICE_IS_DOWN_WE_ARE_SORRY_TO_BE_HOLDING_YOU_UP_THIS_TIME_PLEASE_TRY_AGAIN_LATER_OR_BOOK_AN_APPOINTMENT_FOR_A_TECHNICIAN_VISIT_INSTEAD' },
    ],
  };

  public static issueNotFixedMessageSection: IMessageIssue = {
    header: 'MESSAGES.NO_INTERNET_CONNECTION',
    body: [
      { title: 'MESSAGES.THE_INTERNET_SERVICE_IS_DOWN_WE_ARE_SORRY_TO_BE_HOLDING_YOU_UP_THIS_TIME_PLEASE_TRY_AGAIN_LATER_OR_BOOK_AN_APPOINTMENT_FOR_A_TECHNICIAN_VISIT_INSTEAD' },
    ],
  };

  public static issueNotFixedTVMessageSection: IMessageIssue = {
    header: 'MESSAGES.TV_SERVICE_IS_DOWN',
    body: [{ title: 'MESSAGES.SORRY_THE_SERVICE_IS_NOT_WORKING_PROPERLY_PLEASE_TRY_AGAIN_LATER_OR_BOOK_AN_APPOINTMENT_INSTEAD' }],
  };

  public static issueNotFixedPhoneMessageSection: IMessageIssue = {
    header: 'MESSAGES.PHONE_SERVICE_IS_DOWN',
    body: [{ title: 'MESSAGES.SORRY_THE_SERVICE_IS_NOT_WORKING_PROPERLY_PLEASE_TRY_AGAIN_LATER_OR_BOOK_AN_APPOINTMENT_INSTEAD' }],
  };

  public static routerRebootRequiredMessageSection: IMessageIssue = {
    header: 'MESSAGES.ISSUE_FIXED_SUCCESSFULLY',
    body: [{ title: 'MESSAGES.WE_HAVE_FIXED_THE_TECHNICAL_ISSUES_PLEASE_RESTART_THE_ROUTER_AND_THEN_TRY_USING_THE_INTERNET_AGAIN' }],
  };

  public static routerResetRequiredMessageSection: IMessageIssue = {
    header: 'MESSAGES.ISSUE_FIXED_SUCCESSFULLY',
    body: [{ title: 'MESSAGES.WE_HAVE_FIXED_THE_TECHNICAL_ISSUES_PLEASE_RESET_THE_ROUTER_AND_THEN_TRY_USING_THE_INTERNET_AGAIN' }],
  };

  public static noIssuesTVMessageSection: IMessageIssue = {
    header: 'MESSAGES.NO_ISSUES_FOUND',
    body: [
      { title: 'MESSAGES.WE_COULD_NOT_FIND_ANY_TECHNICAL_PROBLEM_YOUR_TV_SERVICE_SHOULD_BE_WORKING_NORMALLY' },
      { title: 'MESSAGES.TAP_VIEW_DETAILS_TO_TAKE_A_CLOSER_LOOK_AT_YOUR_TV_SERVICE_OR_TAP_CONTINUE_TO_TROUBLESHOOTING_IF_THERE_IS_A_SPECIFIC_TECHNICAL_ISSUE' },
    ],
  };

  public static routerResetFactorySection: IMessageIssue = {
    header: 'MESSAGES.RESET_ROUTER_TO_FACTORY_DEFAULT',
    body: [{ title: 'MESSAGES.DO_YOU_WANT_TO_RESET_THE_ROUTER_TO_THE_FACTORY_DEFAULT' }],
  };

  public static phoneIssuesMainMessageSection: IMessageIssue = {
    header: 'MESSAGES.NO_ISSUES_FOUND',
    body: [
      { title: 'MESSAGES.WE_COULDNT_FIND_ANY_TECHNICAL_PROBLEM_YOUR_PHONE_SHOULD_BE_WORKING_NORMALLY' },
      { title: 'MESSAGES.TAP_VIEW_DETAILS_TO_TAKE_A_CLOSER_LOOK_AT_YOUR_PHONE_SERVICE_OR_TAP_CONTINUE_TO_TROUBLESHOOTING_IF_THERE_IS_A_SPECIFIC_TECHNICAL_ISSUE' },
    ],
  };

  public static internetPasswordResetRequiredMessageSection: IMessageIssue = {
    header: 'MESSAGES.RESET_YOUR_PASSWORD',
    body: [{ title: 'MESSAGES.WE_HAVE_FIXED_ALL_THE_TECHNICAL_ISSUES_YOU_NEED_TO_RESET_YOUR_PASSWORD_FOR_THE_INTERNET_TO_WORK_NORMALLY' }],
  };

  public static routerNotReachableMessageSection: IMessageIssue = {
    header: 'MESSAGES.ROUTER_IS_NOT_ACCESSIBLE',
    body: [{ title: 'MESSAGES.WE_ARE_UNABLE_TO_REACH_YOUR_DEVICE' }],
  };

  public static noIssueMessageSection: IMessageIssue = {
    header: 'MESSAGES.NO_ISSUES_FOUND',
    body: [
      { title: 'MESSAGES.WE_DIDNT_FIND_ANY_TECHNICAL_ISSUES_YOUR_INTERNET_SHOULD_WORK_NORMALLY' },
      { title: 'MESSAGES.TAP_CONTINUE_TO_TROUBLESHOOTING_IF_THERE_IS_A_SPECIFIC_TECHNICAL_ISSUE_OR_VIEW_DETAILS_TO_TAKE_A_CLOSER_LOOK_AT_YOUR_INTERNET_SERVICE' },
    ],
  };

  public static tvOutageMessageSection: IMessageIssue = {
    header: 'MESSAGES.UNPLANNED_INTERRUPTION',
    body: [
      {
        title:
          'MESSAGES.WE_ARE_FACING_AN_UNPLANNED_INTERRUPTION_OF_HOME_SERVICES_IN_YOUR_AREA_WHICH_IS_BEYOND_OUR_CONTROL_REST_ASSURED_THAT_THAT_OUR_TEAMS_ARE_WORKING_ON_RESOLVING_THE_ISSUE_WE_SHALL_SEND_AN_SMS_TO_YOUR_REGISTERED_CONTACT_NUMBER_ONCE_THE_SERVICE_IS_RESTORED',
      },
    ],
  };

  public static phoneOutageMessageSection: IMessageIssue = {
    header: 'MESSAGES.UNPLANNED_INTERRUPTION',
    body: [
      {
        title:
          'MESSAGES.WE_ARE_FACING_AN_UNPLANNED_INTERRUPTION_OF_HOME_SERVICES_IN_YOUR_AREA_WHICH_IS_BEYOND_OUR_CONTROL_REST_ASSURED_THAT_THAT_OUR_TEAMS_ARE_WORKING_ON_RESOLVING_THE_ISSUE_WE_SHALL_SEND_AN_SMS_TO_YOUR_REGISTERED_CONTACT_NUMBER_ONCE_THE_SERVICE_IS_RESTORED',
      },
    ],
  };

  public static fiberBoxNotReachableBuilderSection: IMessageIssue = {
    header: 'MESSAGES.FIBER_BOX_NOT_REACHABLE',
    body: [{ title: 'MESSAGES.PLEASE_MAKE_SURE_THAT_THE_POWER_CABLE_FOR_WALL_MOUNTED_FIBER_BOX_IS_CONNECTED_PROPERLY_AND_POWER_IS_ON' }],
  };

  public static routerUpdradeRecomendedMessageSection: IMessageIssue = {
    header: 'MESSAGES.NO_ISSUES_FOUND',
    body: [
      { title: 'MESSAGES.WE_DIDNT_FIND_ANY_TECHNICAL_ISSUES' },
      { title: 'MESSAGES.YOUR_INTERNET_SHOULD_WORK_NORMALLY' },
      {
        title:
          'MESSAGES.WE_NOTICED_THAT_YOUR_ROUTER_IS_NOT_CAPABLE_OF_HANDLING_HIGH_INTERNET_SPEED_YOU_MAY_BE_FACING_ISSUE_OF_SLOW_BROWSING_DUE_TO_THIS_ITS_HIGHLY_RECOMMENDED_TO_UPGRADE_YOUR_ROUTER_FOR_BETTER_EXPERIENCE_AND_ELIMINATION_OF_REPEATED_INTERNET_ISSUES',
      },
      { title: 'MESSAGES.TAP_UPGRADE_ROUTER_IF_YOU_WISH_TO_UPGRADE_THE_ROUTER' },
      { title: 'MESSAGES.TAP_CONTINUE_TO_TROUBLESHOOTING_IF_THERE_IS_A_SPECIFIC_TECHNICAL_ISSUE_OR_VIEW_DETAILS_TO_TAKE_A_CLOSER_LOOK_AT_YOUR_INTERNET_SERVICE' },
    ],
  };

  public static routerOutOfWarrantyMessageSection: IMessageIssue = {
    header: 'MESSAGES.NO_ISSUES_FOUND',
    body: [
      { title: 'MESSAGES.WE_DIDNT_FIND_ANY_TECHNICAL_ISSUES' },
      { title: 'MESSAGES.YOUR_INTERNET_SHOULD_WORK_NORMALLY' },
      {
        title: 'MESSAGES.HOWEVER_WE_NOTICED_THAT_YOUR_ROUTER_IS_OUT_OF_WARRANTY_WE_RECOMMEND_YOU_TO_PLEASE_UPGRADE_YOUR_ROUTER_FOR_BETTER_EXPERIENCE',
      },
      { title: 'MESSAGES.TAP_UPGRADE_ROUTER_IF_YOU_WISH_TO_UPGRADE_THE_ROUTER' },
      { title: 'MESSAGES.TAP_CONTINUE_TO_TROUBLESHOOTING_IF_THERE_IS_A_SPECIFIC_TECHNICAL_ISSUE_OR_VIEW_DETAILS_TO_TAKE_A_CLOSER_LOOK_AT_YOUR_INTERNET_SERVICE' },
    ],
  };

  public static packageUpdradeRecomendedMessageSection: IMessageIssue = {
    header: 'MESSAGES.NO_ISSUES_FOUND',
    body: [
      { title: 'MESSAGES.WE_DIDNT_FIND_ANY_TECHNICAL_ISSUES' },
      { title: 'MESSAGES.YOUR_INTERNET_SHOULD_WORK_NORMALLY' },
      {
        title:
          'MESSAGES.WE_NOTICED_THAT_THE_INTERNET_SPEED_YOU_HAVE_IS_INCAPABLE_OF_HANDLING_YOUR_USAGE_YOU_MAY_BE_FACING_ISSUE_OF_SLOW_BROWSING_DUE_TO_THIS_IT_IS_HIGHLY_RECOMMENDED_TO_UPGRADE_YOUR_PACKAGE_FOR_BETTER_EXPERIENCE_AND_ELIMINATION_OF_REPEATED_INTERNET_ISSUES',
      },
      { title: 'MESSAGES.TAP_UPGRADE_PACKAGE_IF_YOU_WISH_TO_UPGRADE_THE_ROUTER' },
      { title: 'MESSAGES.TAP_CONTINUE_TO_TROUBLESHOOTING_IF_THERE_IS_A_SPECIFIC_TECHNICAL_ISSUE_OR_VIEW_DETAILS_TO_TAKE_A_CLOSER_LOOK_AT_YOUR_INTERNET_SERVICE' },
    ],
  };

  public static packageAndRouterUpdradeRecomendedMessageSection: IMessageIssue = {
    header: 'MESSAGES.NO_ISSUES_FOUND',
    body: [
      { title: 'MESSAGES.WE_DIDNT_FIND_ANY_TECHNICAL_ISSUES' },
      { title: 'MESSAGES.YOUR_INTERNET_SHOULD_WORK_NORMALLY' },
      {
        title:
          'MESSAGES.WE_NOTICED_THAT_YOUR_ROUTER_IS_NOT_CAPABLE_TO_HANDLE_HIGH_INTERNET_SPEED_BESIDE_THIS_YOU_HAVE_AN_INTERNET_SPEED_THAT_IS_INCAPABLE_OF_HANDLING_YOUR_USAGE_YOU_MAY_BE_FACING_ISSUE_OF_SLOW_BROWSING_DUE_TO_THIS_IT_IS_HIGHLY_RECOMMENDED_TO_UPGRADE_BOTH_YOUR_ROUTER_AND_YOUR_PACKAGE_FOR_BETTER_EXPERIENCE_AND_ELIMINATION_OF_REPEATED_INTERNET_ISSUES',
      },
      { title: 'MESSAGES.TAP_UPGRADE_ROUTER_AND_PACKAGE_IF_YOU_WISH_TO_UPGRADE_THE_ROUTER' },
      { title: 'MESSAGES.TAP_CONTINUE_TO_TROUBLESHOOTING_IF_THERE_IS_A_SPECIFIC_TECHNICAL_ISSUE_OR_VIEW_DETAILS_TO_TAKE_A_CLOSER_LOOK_AT_YOUR_INTERNET_SERVICE' },
    ],
  };

  public static router3rdPartyMessageSection: IMessageIssue = {
    header: 'MESSAGES.NO_ISSUES_FOUND',
    body: [
      { title: 'MESSAGES.WE_DIDNT_FIND_ANY_TECHNICAL_ISSUES' },
      { title: 'MESSAGES.YOUR_INTERNET_SHOULD_WORK_NORMALLY' },
      { title: 'MESSAGES.WE_NOTICED_THAT_YOU_ARE_FACING_A_CONTINUE_ISSUES_WITH_THE_INTERNET_WHILE_USING_A_NON-ETISALAT_ROUTER' },
      { title: 'MESSAGES.ITS_HIGHLY_RECOMMENDED_TO_USE_AN_ETISALAT_ROUTER_FOR_BETTER_EXPERIENCE_AND_ELIMINATION_OF_REPEATED_INTERNET_ISSUES' },
      { title: 'MESSAGES.TAP_BUY_NEW_ROUTER_IF_YOU_WISH_TO_BUY_NEW_ROUTER_FROM_ETISALAT' },
      { title: 'MESSAGES.TAP_CONTINUE_TO_TROUBLESHOOTING_IF_THERE_IS_A_SPECIFIC_TECHNICAL_ISSUE_OR_VIEW_DETAILS_TO_TAKE_A_CLOSER_LOOK_AT_YOUR_INTERNET_SERVICE' },
    ],
  };

  public static routerNotReachableOwnRouterMessageSection: IMessageIssue = {
    header: 'MESSAGES.ROUTER_IS_NOT_ACCESSIBLE',
    body: [
      {
        title: 'MESSAGES.PLEASE_MAKE_SURE_THAT',
        children: [
          'MESSAGES.THE_ROUTER_IS_SWITCHED_ON',
          'MESSAGES.THE_CABLE_FROM_THE_ROUTER_IS_CONNECTED_TO_THE_X_PORT_OF_THE_WALL_MOUNTED_FIBRE_BOX',
          'MESSAGES.IF_ISSUE_IS_STILL_NOT_FIXED_PLEASE_RECONFIGURE_YOUR_ROUTER_WITH_THE_CORRECT_SETTINGS',
        ],
      },
      {
        title: 'MESSAGES.VISIT_DEVICE_CARE_TO_FIND_MORE_DETAILS_ON_HOW_TO_RECONFIGURE_YOUR_ROUTER',
      },
    ],
  };

  public static customerNotUsingSameRouterAllServicesSection: IMessageIssue = {
    header: 'MESSAGES.DEVICES_IS_NOT_ACCESSIBLE',
    body: [
      {
        title: 'MESSAGES.PLEASE_MAKE_SURE_THAT',
        children: [
          'MESSAGES.THE_ROUTER_IS_SWITCHED_ON',
          'MESSAGES.THE_TV_BOX_IS_SWITCHED_ON',
          'MESSAGES.THE_TELEPHONE_DEVICE_IS_SWITCHED_ON',
          'MESSAGES.THE_CABLE_FROM_THE_ROUTER_IS_CONNECTED_TO_THE_X_PORT_OF_THE_WALL_MOUNTED_FIBRE_BOX',
          'MESSAGES.THE_TV_BOX_IS_CONNECTED_TO_X_PORT_ON_THE_FIBER_BOX',
          'MESSAGES.THE_TELEPHONE_IS_CONNECTED_TO_X_PORT_ON_THE_FIBER_BOX',
          'MESSAGES.IF_ISSUE_IS_STILL_NOT_FIXED_PLEASE_RECONFIGURE_YOUR_ROUTER_WITH_THE_CORRECT_SETTINGS',
        ],
      },
      {
        title: 'MESSAGES.VISIT_DEVICE_CARE_TO_FIND_MORE_DETAILS_ON_HOW_TO_RECONFIGURE_YOUR_ROUTER',
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
    header: 'MESSAGES.NO_ISSUES_FOUND',
    body: [
      { title: 'MESSAGES.WE_DIDNT_FIND_ANY_TECHNICAL_ISSUES' },
      { title: 'MESSAGES.YOUR_INTERNET_SHOULD_WORK_NORMALLY' },
      { title: 'MESSAGES.WE_NOTICED_THAT_YOUR_WIFI_SETTINGS_ARE_NOT_TO_THE_STANDARDS_WE_CAN_HELP_YOU_TO_GET_YOUR_WIFI_CONFIGURATION_TO_THE_STANDARDS' },
      { title: 'MESSAGES.TAP_CONFIGURE_WIFI_IF_YOU_WISH_TO_SET_YOUR_WIFI_CONFIGURATION' },
      { title: 'MESSAGES.TAP_CONTINUE_TO_TROUBLESHOOTING_IF_THERE_IS_A_SPECIFIC_TECHNICAL_ISSUE_OR_VIEW_DETAILS_TO_TAKE_A_CLOSER_LOOK_AT_YOUR_INTERNET_SERVICE' },
    ],
  };

  public static routerConfig3rdPartyMessageSection: IMessageIssue = {
    header: 'MESSAGES.RECONFIGURE_YOUR_ROUTER',
    body: [
      {
        title: 'MESSAGES.SINCE_YOU_ARE_USING_YOUR_OWN_ROUTER_MAKE_SURE_THAT',
        children: [
          'MESSAGES.THE_ROUTER_IS_SWITCHED_ON',
          'MESSAGES.THE_CABLE_FROM_THE_ROUTER_IS_CONNECTED_TO_THE_X_PORT_OF_THE_WALL_MOUNTED_FIBRE_BOX',
          'MESSAGES.IF_ISSUE_IS_STILL_NOT_FIXED_PLEASE_RECONFIGURE_YOUR_ROUTER_WITH_THE_CORRECT_SETTINGS',
        ],
      },
      {
        title: 'MESSAGES.TAP_BOOK_AN_APPOINTMENT_IF_YOU_WANT_TO_BOOK_A_TECHNICIAN_VISIT',
      },
      {
        title: 'MESSAGES.VISIT_DEVICE_CARE_TO_FIND_MORE_DETAILS_ON_HOW_TO_RECONFIGURE_YOUR_ROUTER',
      },
    ],
  };

  public static tvBoxNotReachableMessageSection: IMessageIssue = {
    header: 'MESSAGES.WE_CANT_REACH_YOUR_TV_BOX',
    body: [
      {
        title: 'MESSAGES.THE_TV_BOX_SR_NO_53454534_COULDNT_BE_FOUND',
      },
      {
        title: 'MESSAGES.PLEASE_CHECK_IF',
        children: ['MESSAGES.THE_TV_BOX_IS_TURNED_ON', 'MESSAGES.THE_CABLE_FROM_THE_TV_BOX_IS_CONNECTED_TO_THE_X_PORT_OF_THE_WALL_MOUNTED_FIBER_BOX'],
      },
    ],
  };

  public static tvBoxNotReachableAgainMessageSection: IMessageIssue = {
    header: 'MESSAGES.WE_CANT_REACH_YOUR_TV_BOX',
    body: [
      {
        title: 'MESSAGES.ONE_OF_THESE_OPTIONS_COULD_BE_CAUSING_THE_ISSUE',
        children: ['MESSAGES.THE_TV_BOX_IS_NOT_SWITCHED_ON', 'MESSAGES.THE_CABLE_ISNT_CONNECTED_PROPERLY', 'MESSAGES.THE_TV_BOX_IS_FAULTY'],
      },
      {
        title: 'MESSAGES.TAP_TRY_AGAIN_LATER_IF_YOU_WANT_TO_CHECK_THE_PROBLEM_LATER',
      },
      {
        title: 'MESSAGES.TAP_BOOK_AN_APPOINTMENT_IF_YOU_WANT_TO_BOOK_A_TECHNICIAN_VISIT',
      },
    ],
  };

  public static tvBoxRestartMessageSection: IMessageIssue = {
    header: 'MESSAGES.ISSUE_FIXED_SUCCESSFULLY',
    body: [
      {
        title: 'MESSAGES.WE_HAVE_FIXED_ALL_THE_TECHNICAL_ISSUES',
      },
      {
        title: 'MESSAGES.PLEASE_RESTART_THE_TV_BOX_AND_THEN_TRY_USING_THE_TV_AGAIN',
      },
    ],
  };

  public static tvBoxFactoryResetSection: IMessageIssue = {
    header: 'MESSAGES.RESET_TV_SET_TOP_BOX_TO_FACTORY_DEFAULT',
    body: [
      {
        title: 'MESSAGES.DO_YOU_WANT_TO_RESET_THE_TV_SET_TOP_BOX_TO_THE_FACTORY_DEFAULT',
      },
    ],
  };

  public static ontRestartMessageSection: IMessageIssue = {
    header: 'MESSAGES.ISSUE_FIXED_SUCCESSFULLY',
    body: [
      {
        title: 'MESSAGES.WE_HAVE_FIXED_ALL_THE_TECHNICAL_ISSUES',
      },
      {
        title: 'MESSAGES.PLEASE_RESTART_THE_WALL_MOUNTED_FIBER_BOX_AND_THEN_TRY_USING_THE_PHONE_AGAIN',
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
        title: 'MESSAGES.PLEASE_RESTART_THE_WALL_MOUNTED_FIBER_BOX_AND_THEN_TRY_USING_THE_TV_AGAIN',
      },
    ],
  };

  public static rotuerRebootRequiredAllServices: IMessageIssue = {
    header: 'MESSAGES.ISSUE_FIXED_SUCCESSFULLY',
    body: [
      {
        title: 'MESSAGES.WE_HAVE_FIXED_THE_TECHNICAL_ISSUES_PLEASE_RESET_THE_ROUTER_AND_TV_BOX_AND_THEN_TRY_USING_THE_INTERNET_AGAIN',
      },
    ],
  };

  public static ontRestartInternetAllServices: IMessageIssue = {
    header: 'MESSAGES.ISSUE_FIXED_SUCCESSFULLY',
    body: [
      {
        title: 'MESSAGES.WE_HAVE_FIXED_ALL_THE_TECHNICAL_ISSUES',
      },
      {
        title: 'MESSAGES.PLEASE_RESTART_THE_WALL_MOUNTED_FIBER_BOX_AND_THEN_TRY_USING_THE_INTERNET_AGAIN',
      },
    ],
  };

  public static unableWatchChannelsMessageSection: IMessageIssue = {
    header: '',
    body: [
      {
        title: 'MESSAGES.TV_BOX_TROUBLESHOOTING_GUIDELINES',
        children: [
          'MESSAGES.PLUG_THE_TV_BOX_TO_TURN_IT_ON_AND_WAIT_FOR_THE_LED_TO_TURN_RED',
          'MESSAGES.PRESS_THE_POWER_BUTTON_ON_YOUR_REMOTE_CONTROL',
          'MESSAGES.IF_YOU_ARE_UNABLE_TO_TURN_THE_TV_BOX_ON_CHECK_THE_BATTERY_OF_THE_REMOTE_CONTROL',
          'MESSAGES.IF_TV_BOX_WORKS_BUT_YOU_ARE_UNABLE_TO_WATCH_A_CHANNEL_CHECK_WHETHER_THE_CABLE_FROM_TV_BOX_IS_CONNECTED_TO_X_PORT_OF_THE_OPTICAL_NETWORK_TERMINAL_ONT',
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
    header: 'MESSAGES.ROUTER_UPGRADE_REQUEST_WAS_RAISED_SUCCESSFULLY',
    paragraphs: ['MESSAGES.THANK_YOU_FOR_YOUR_REQUEST_WE_WILL_CALL_YOU_BACK_WITHIN_24_HRS'],
  };

  public static eLifeUpgradeSuccess = {
    header: 'MESSAGES.ELIFE_PACKAGE_UPGRADE_REQUEST_WAS_RAISED_SUCCESSFULLY',
    paragraphs: ['MESSAGES.THANK_YOU_FOR_YOUR_REQUEST_WE_WILL_CALL_YOU_BACK_WITHIN_24_HRS'],
  };

  public static routerPackageUpgradesuccessfullyCase = {
    header: 'MESSAGES.ROUTER_AND_PACKAGE_UPGRADE_REQUEST_WAS_RAISED_SUCCESSFULLY',
    paragraphs: ['MESSAGES.THANK_YOU_FOR_YOUR_REQUEST_WE_WILL_CALL_YOU_BACK_WITHIN_24_HRS'],
  };

  public static tvAdminPinResetSuccessfully = {
    header: 'MESSAGES.TV_AMDIN_PIN_RESET_SUCCESSFULLY',
    paragraphs: [
      'MESSAGES.YOUR_PIN_HAS_BEEN_SUCCESSFULLY_RESET_TO_THE_DEFAULT_PIN_1111',
      // 'MESSAGES.PLEASE_RESTART_ALL_YOUR_TV_BOXES_TO_ACTIVATE_THE_NEW_PIN',
      'MESSAGES.NOTE_YOU_WILL_BE_REQUIRED_TO_CHANGE_THE_DEFAULT_PIN_WHEN_YOU_LOG_IN_TO_ANY_PAID_SERVICE',
    ],
  };

  public static tvAdminPinResetFullSuccessfully = {
    header: 'MESSAGES.TV_AMDIN_PIN_RESET_SUCCESSFULLY',
    paragraphs: [
      'MESSAGES.YOUR_PIN_HAS_BEEN_SUCCESSFULLY_RESET_TO_THE_DEFAULT_PIN_1111',
      'MESSAGES.PLEASE_RESTART_ALL_YOUR_TV_BOXES_TO_ACTIVATE_THE_NEW_PIN',
      'MESSAGES.NOTE_YOU_WILL_BE_REQUIRED_TO_CHANGE_THE_DEFAULT_PIN_WHEN_YOU_LOG_IN_TO_ANY_PAID_SERVICE',
    ],
  };

  public static tvAdminPinResetError = {
    header: 'MESSAGES.UNABLE_TO_RESET_TV_ADMIN_PIN',
    paragraphs: ['MESSAGES.PLEASE_TRY_AGAIN_LATER'],
  };

  public static ElfieOnPinResetError = {
    header: 'MESSAGES.UNABLE_TO_RESET_ELFIE_ON_PIN',
    paragraphs: ['MESSAGES.PLEASE_TRY_AGAIN_LATER'],
  };

  public static accountNotActive = {
    header: 'MESSAGES.YOUR_ACCOUNT_IS_DISCONNECTED_TEMPORARILY',
    span: 'MESSAGES.CLICK_HERE',
    spanListener: () => {},
    paragraphs: ['MESSAGES.IF_YOU_WISH_TO_GET_BILL_DETAILS_MAKE_PAYMENT'],
  };

  public static thirdPartyRoutersuccessfullyCase = {
    header: 'MESSAGES.FACING_SOME_ISSUE',
    paragraphs: ['MESSAGES.TRY_AGAIN_LATER'],
  };

  public static resetWifiResetFirstsuccessfullyCase = {
    header: 'MESSAGES.ROUTER_RESET_SUCCESSFUL',
    paragraphs: ['MESSAGES.PLEASE_WAIT_FOR_5_MINUTES_BEFORE_USING_THE_INTERNET_AGAIN', 'MESSAGES.CONTINUE_TO_CONFIGURE_YOUR_WIFI_SETTINGS'],
  };

  public static routerResetSuccess = {
    header: 'MESSAGES.ROUTER_RESET_SUCCESSFUL',
    paragraphs: ['MESSAGES.PLEASE_WAIT_FOR_5_MINUTES_BEFORE_USING_THE_INTERNET_AGAIN'],
  };

  public static resetWifiResetSecondsuccessfullyCase = {
    header: 'MESSAGES.WIFI_PASSWORD_UPDATED_SUCCESSFULLY',
    paragraphs: [
      'MESSAGES.PLEASE_WAIT_FOR_5_MINUTES_AND_THEN_TRY_USING_THE_INTERNET_AGAIN_YOUR_NEW_PASSWORD_IS_XXXX_MAKE_SURE_TO_USE_THE_NEW_WIFI_PASSWORD_TO_CONNECT_TO_THE_ROUTER',
      //'MESSAGES.YOUR_NEW_PASSWORD_IS_XXXX_MAKE_SURE_TO_USE_THE_NEW_WIFI_PASSWORD_TO_CONNECT_TO_THE_ROUTER',
    ],
  };

  public static resetWifiSuccessfullyCase = {
    header: 'MESSAGES.WIFI_PASSWORD_CHANGED_SUCCESSFULLY',
    paragraphs: [
      'MESSAGES.PLEASE_WAIT_FOR_5_MINUTES_AND_THEN_TRY_USING_THE_INTERNET_AGAIN_YOUR_NEW_PASSWORD_IS_XXXX_MAKE_SURE_TO_USE_THE_NEW_WIFI_PASSWORD_TO_CONNECT_TO_THE_ROUTER',
      'MESSAGES.PLEASE_USE_THE_NEW_WIFI_PASSWORD_TO_CONNECT_TO_THE_ROUTER',
    ],
  };

  public static troubleshootComplete = {
    header: 'MESSAGES.TROUBLESHOOTING_COMPLETE',
    paragraphs: [
      'MESSAGES.WE_COULDNT_FIND_ANY_TECHNICAL_PROBLEM_WITH_THE_SERVICE_YOU_CAN_BOOK_AN_APPOINTMENT_WITH_A_TECHNICIAN_IF_YOURE_STILL_FACING_AN_ISSUE_PLEASE_NOTE_THAT_YOU_MIGHT_GET_CHARGED_AED_150_FOR_THE_TECHNICIAN_VISIT_IF_THE_ISSUE_ISNT_FROM_OUR_SIDE',
    ],
  };

  public static restELifeLoginPin = {
    header: 'MESSAGES.UNABLE_TO_LOGIN',
    paragraphs: ['MESSAGES.PLEASE_RESET_YOUR_ELIFEON_PIN_TO_FIX_THE_ISSUE_IT_WILL_BE_RESET_TO_THE_DEFAULT_PIN_1111_ELIFE'],
  };

  public static restELifeLoginPinResetSuccess = {
    header: 'MESSAGES.ELIFEON_PIN_RESET_SUCCESSFULLY',
    paragraphs: ['MESSAGES.YOUR_PIN_HAS_BEEN_SUCCESSFULLY_RESET_TO_THE_DEFAULT_PIN'],
  };

  public static gameSessionCancelConfirmed = {
    header: 'MESSAGES.GAME_SESSION',
    paragraphs: ['MESSAGES.ELIFE_TV_GAME_NAME_HAS_BEEN_RESTARTED_SUCCESSFULLY_YOU_CAN_NOW_LAUNCH_A_NEW_GAME_SESSION_FROM_THE_MAIN_MENU_OF_ELIFE_TV_GAMING'],
  };

  public static packageTransferSuccess = {
    header: 'MESSAGES.PACKAGE_TRANSFER_WAS_SUCCESSFUL',
    paragraphs: ['MESSAGES.PLEASE_REBOOT_YOUR_TV_BOX_THEN_YOU_WILL_BE_ABLE_TO_ENJOY_THE_SERVICE'],
  };

  public static unableWatchSpecificChannelPackageTransferSuccess = {
    header: 'MESSAGES.PACKAGE_TRANSFERRED_SUCCESSFULLY',
    paragraphs: ['MESSAGES.YOU_CAN_NOW_WATCH_ALL_THE_CHANNELS_IN_PACKAGE_NAME_ON_TV_BOX_SL_NO'],
  };

  public static resetInternetPasswordSuccess = {
    header: 'MESSAGES.INTERNET_PASSWORD_RESET_SUCCESSFULLY',
    paragraphs: [
      'MESSAGES.THE_ROUTER_WILL_BE_CONFIGURED_WITH_THE_NEW_PASSWORD_AUTOMATICALLY',
      'MESSAGES.MAKE_SURE_YOU_RESTART_YOUR_ROUTER_AFTER_A_FEW_MINUTES_AND_THEN_TRY_USING_THE_INTERNET',
    ],
  };

  public static InstallNewRouterComplaintRaisedSuccessfully = {
    header: 'MESSAGES.COMPLAINT_RAISED_SUCCESSFULLY',
    paragraphs: ['MESSAGES.WE_HAVE_RECEIVED_YOUR_COMPLAINT_AND_BOOKED_AN_APPOINTMENT_OUR_TECHNICIAN_WILL_CONTACT_YOU_SOON'],
  };

  public static requestDetails = {
    header: 'MESSAGES.REQUEST_DETAILS',
    paragraphs: ['MESSAGES.HERE_ARE_THE_DETAILS_OF_YOUR_REQUEST'],
  };

  public static requestUnderProcess = {
    header: 'MESSAGES.REQUEST_UNDER_PROCESS',
    paragraphs: ['MESSAGES.PLEASE_WAIT_YOUR_REQUEST_WILL_BE_PROCESSED_SOON'],
  };

  public static requestAlreadyExists = {
    header: 'MESSAGES.REQUEST_ALREADY_EXISTS',
    paragraphs: ['MESSAGES.THERE_IS_ALREADY_AN_APPOINTMENT_SCHEDULED_FOR_PROVIDING_THE_SERVICE'],
  };

  public static appointmentChangeSuccess = {
    header: 'MESSAGES.APPOINTMENT_CHANGED_SUCCESSFULLY',
    paragraphs: ['MESSAGES.YOUR_APPOINTMENT_HAS_BEEN_CHANGED_SUCCESSFULLY_THANK_YOU_FOR_USING_OUR_TECHNICAL_SUPPORT'],
  };

  public static serviceUnavailable = {
    header: 'MESSAGES.SERVICE_UNAVAILABLE',
    paragraphs: ['MESSAGES.THIS_SERVICE_IS_COMING_TO_YOUR_AREA_SOON_OUR_TEAM_WILL_CONTACT_YOU_ONCE_IT_IS_AVAILABLE', 'MESSAGES.EXPECTED_DATE_OF_COMPLETION'],
  };

  public static actionRequired = {
    header: 'MESSAGES.ACTION_REQUIRED',
    paragraphs: ['MESSAGES.THERE_IS_SOME_WORK_PENDING_FROM_YOUR_SIDE_PLEASE_TAP_SET_AN_APPOINTMENT_IF_YOU_HAVE_ALREADY_COMPLETED_IT'],
  };

  public static noAdditionalSTB = {
    header: 'MESSAGES.NO_ADDITIONAL_STB',
    paragraphs: ['MESSAGES.SORRY_TRANSFER_OF_PACKAGE_IS_NOT_APPLICABLE_AS_YOU_DONT_HAVE_ADDITIONAL_STB'],
  };

  public static noNonSharedPackage = {
    header: 'MESSAGES.NO_NON_SHARED_PACKAGE',
    paragraphs: ['MESSAGES.YOU_ARE_SUBSCRIBED_FOR_SHARED_TV_PACKAGES_THAT_CAN_BE_VIEWED_FROM_ALL_YOUR_STBS'],
  };

  public static errorOccured = {
    header: 'MESSAGES.AN_ERROR_OCCURRED',
    paragraphs: ['MESSAGES.SORRY_THE_OPERATION_HAS_TIMEOUT_PLEASE_TRY_AGAIN'],
  };

  public static tryAgainErrorOccured = {
    header: 'MESSAGES.AN_ERROR_OCCURRED',
    paragraphs: ['MESSAGES.SORRY_THE_OPERATION_HAS_TIMEOUT_PLEASE_TRY_AGAIN_AFTER_SOME_TIME'],
  };

  public static resetInternetPasswordSuccessDetail = {
    header: 'MESSAGES.INTERNET_PASSWORD_RESET_SUCCESSFULLY',
    paragraphs: [
      'MESSAGES.THE_ROUTER_NEEDS_TO_BE_CONFIGURED_WITH_THE_NEW_PASSWORD_VISIT_DEVICE_CARE_TO_FIND_MORE_DETAILS_ON_HOW_TO_RECONFIGURE_YOUR_ROUTER',
      'MESSAGES.WE_RECOMMEND_USING_AN_ETISALAT_ROUTER_SO_THAT_WE_CAN_PROVIDE_REMOTE_SUPPORT',
    ],
  };

  public static resetRouterWifiPasswordSuccess = {
    header: 'MESSAGES.ROUTERS_WIFI_PASSWORD_RESET_SUCCESSFULLY',
    paragraphs: ['MESSAGES.PLEASE_WAIT_FOR_2_MINUTES_AND_THEN_TRY_CONNECTING_TO_THE_WIFI_NETWORK_WITH_THE_PASSWORD'],
  };

  public static unableToReachRouter = {
    header: 'MESSAGES.WE_CANT_REACH_YOUR_ROUTER',
    paragraphs: ['MESSAGES.MAKE_SURE_THAT_ROUTER_IS_TURNED_ON_AND_IS_CONNECTED_TO_THE_X_PORT_OF_THE_WALL_MOUNTED_FIBER_BOX'],
  };

  public static unableToReachRouterFailed = {
    header: 'MESSAGES.WE_CANT_REACH_YOUR_ROUTER',
    paragraphs: ['MESSAGES.TAP_CONTINUE_TO_TROUBLESHOOTING_IF_YOU_THINK_THIS_IS_RELATED_TO_A_TECHNICAL_ISSUE'],
  };

  public static unableToResetPassword = {
    header: 'MESSAGES.UNABLE_TO_RESET_PASSWORD',
    paragraphs: [
      'MESSAGES.WE_CANT_RESET_YOUR_WIFI_PASSWORD_BECAUSE_YOU_DONT_HAVE_AN_ETISALAT_ROUTER',
      'MESSAGES.WE_RECOMMEND_USING_AN_ETISALAT_ROUTER_SO_THAT_WE_CAN_PROVIDE_REMOTE_SUPPORT',
    ],
  };

  public static unableToProcessRequest = {
    header: 'MESSAGES.UNABLE_TO_PROCESS_REQUEST',
    paragraphs: ['MESSAGES.IT_LOOKS_LIKE_YOU_ARE_NOT_SUBSCRIBED_TO_ELIFEON'],
  };

  public static unableToConnectWifiNetwork = {
    header: 'MESSAGES.UNABLE_TO_CONNECT_TO_WIFI_NETWORK',
    paragraphs: ['MESSAGES.MAKE_SURE_TO_SELECT_YOUR_WIFI_NETWORK_NAME_USE_THE_CORRECT_WIFI_PASSWORD_WHILE_CONNECTING_TO_YOUR_WIFI_NETWORK', 'MESSAGES.WE_CAN_HELP_YOU_TO_RESET_WIFI_SETTINGS_IF_YOU_FORGOT_YOUR_WIFI_PASSWORD'],
  };

  public static forgotWifiPassword = {
    header: 'MESSAGES.FORGOT_WIFI_PASSWORD',
    paragraphs: ['MESSAGES.WE_CAN_HELP_YOU_RESET_YOUR_WIFI_PASSWORD_IF_YOU_FORGOT_YOUR_PASSWORD'],

  }

  //#region  Quick Links
  public static installNewRouterMessageCase = {
    header: 'MESSAGES.INSTALL_NEW_ROUTER',
    paragraphs: ['MESSAGES.PLEASE_WAIT_THIS_MIGHT_TAKE_UP_TO_30_MINUTES', 'MESSAGES.YOU_CAN_CONTACT_US_IF_THE_ROUTER_DOES_NOT_START_WORKING_AFTER_DATE_TIME'],
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
      'MESSAGES.YOU_ARE_CURRENTLY_USING_A_THIRD_PARTY_ROUTER',
      'MESSAGES.WE_CAN_PROVIDE_REMOTE_SUPPORT_IF_YOU_INSTALL_AN_ETISALAT_ROUTER',
      'MESSAGES.IF_YOU_CHOOSE_THE_SECOND_OPTION_YOU_WILL_NEED_TO_WAIT_30_MINUTES_AND_THEN_RESET_YOUR_INTERNET_PASSWORD',
    ],
  };

  public static installNewRouterFlow4MessageCase = {
    header: 'MESSAGES.INSTALLING_THIRD_PARTY_ROUTER',

    paragraphs: [
      {
        title: 'MESSAGES.INSTALLATION_OF_ROUTER_IS_IN_PROGESS_IT_WILL_TAKE_UP_TO_30_MINUTEs',
      },
      {
        title: 'MESSAGES.FOLLOW_THESE_STEPS_AFTER_30_MINUTES',
        children: ['MESSAGES.CONNECT_THE_NEW_ROUTER_TO_X_PORT_OF_THE_WALL_MOUNTED_FIBER_BOX', 'MESSAGES.SET_THE_ROUTER_WITH_A_NEW_PASSWORD'],
      },
    ],
  };

  public static installNewRouterFlow6MessageCase = {
    header: 'MESSAGES.INSTALLING_ETISALAT_ROUTER',

    paragraphs: [
      {
        title: 'MESSAGES.INSTALLATION_OF_ROUTER_IS_IN_PROGESS_IT_WILL_TAKE_UP_TO_30_MINUTEs',
      },
      {
        title: 'MESSAGES.FOLLOW_THESE_STEPS_AFTER_30_MINUTES',
        children: [
          'MESSAGES.CONNECT_THE_NEW_ROUTER_TO_X_PORT_OF_THE_WALL_MOUNTED_FIBER_BOX',
          'MESSAGES.WAIT_FOR_5_MINUTES_THE_ROUTER_WILL_BE_CONFIGURED_WITH_NEW_PASSWORD_AUTOMATICALLY_AND_YOU_WILL_BE_ABLE_TO_USE_INTERNET_SERVICE_NORMALLY',
        ],
      },
    ],
  };

  public static installNewRouterFlow7MessageCase = {
    header: 'MESSAGES.INSTALL_NEW_THIRD_PARTY_ROUTER',

    paragraphs: [
      {
        title: 'MESSAGES.FOLLOW_THESE_STEPS_TO_COMPLETE_THE_INSTALLATION',
        children: ['MESSAGES.CONNECT_THE_NEW_ROUTER_TO_THE_X_PORT_OF_THE_WALL_MOUNTED_FIBER_BOX', 'MESSAGES.SET_THE_ROUTER_WITH_A_NEW_PASSWORD'],
      },
    ],
  };

  public static routerInstallSuccessfullyMessageCase = {
    header: 'MESSAGES.ROUTER_INSTALLED_SUCCESSFULLY',
    paragraphs: ['MESSAGES.YOUR_ROUTER_SHOULD_NOW_WORK_TAP_CONFIGURE_ROUTER_OR_CONTINUE_TO_TROUBLESHOOTING_IF_YOU_ARE_STILL_FACING_AN_ISSUE'],
  };

  public static routerInstallFailedMessageCase = {
    header: 'MESSAGES.ROUTER_INSTALLATION_FAILED',
    paragraphs: ['MESSAGES.ROUTER_INSTALLATION_FAILED_TAP_BOOK_COMPLAINT_IF_YOU_WISH_TO_BOOK_A_COMPLAINT_OR_PLEASE_TRY_AGAIN_LATER'],
  };

  public static complaintBookingFailedInvalidContact = {
    header: 'MESSAGES.COMPLAINT_BOOKING_FAILED',
    paragraphs: ["MESSAGES.YOUR_COMPLAINT_COULDN'T_BE_BOOKED_BECAUSE_THE_CONTACT_NUMBER_YOU_ENTERED_WAS_INCORRECT", 'MESSAGES.PLEASE_ENTER_A_VALID_CONTACT_NUMBER'],
  };

  public static complaintBookingFailed = {
    header: 'MESSAGES.COMPLAINT_BOOKING_FAILED',
    paragraphs: ['MESSAGES.THERE_WAS_A_PROBLEM_IN_COMPLETING_YOUR_REQUEST', 'MESSAGES.WE_WILL_BOOK_AN_COMPLAINT_AND_SEND_YOU_THE_DETAILS_VIS_SMS_SOON'],
  };

  public static routerRebootSuccessful = {
    header: 'MESSAGES.ROUTER_REBOOT_SUCCESSFUL',
    paragraphs: ['MESSAGES.PLEASE_WAIT_FOR_5_MINUTES_AND_THEN_TRY_USING_THE_INTERNET_AGAIN'],
  };

  public static serverTimeout = {
    header: 'MESSAGES.SERVER_TIMEOUT',
    paragraphs: ['MESSAGES.WE_WILL_TRY_TO_RESET_THE_ROUTER_AGAIN_PLEASE_MAKE_SURE_THAT_THE_ROUTER_IS_SWITHCED_ON'],
  };

  public static passwordResetSuccessfully = {
    header: 'MESSAGES.PASSWORD_RESET_SUCCESSFULLY',
    paragraphs: [
      'MESSAGES.YOUR_INTERNET_PASSWORD_HAS_BEEN_RESET_SUCCESSFULLY_THE_ROUTER_WILL_BE_RECONFIGURED_WITH_THE_NEW_PASSWORD_AUTOMATICALLY',
      'MESSAGES.RESTART_YOUR_ROUTER_AFTER_A_FEW_MINUTES_AND_THEN_TRY_USING_THE_INTERNET_AGAIN',
    ],
  };
  //#endregion Quick Links
}

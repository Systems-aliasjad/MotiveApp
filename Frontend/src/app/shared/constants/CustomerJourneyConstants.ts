import { IButton, IMessageIssue } from './types';

export class CustomerJourneyConstants {
  public static openServiceRequestCase1 = {
    header: 'Messages.WE_ARE_MOVING_YOUR_ELIFE_CONNECTION',
    paragraphs: ['Messages.THE_SERVICE_WILL_BE_DISCONTINUED_WHILE_THE_TRANSFER_IS_UNDER_PROCESS', 'Messages.TRY_USING_IT_ONCE_YOUR_ELIFE_CONNECTION_HAS_BEEN_MOVED_SUCCESSFULLY'],
  };

  public static openServiceRequestCase2 = {
    header: 'MESSAGES.ACCOUNT_TEMPORARILY_DISCONNECTED',
    paragraphs: [
      'Messages.THE_SERVICE_WONT_WORK_AS_YOUR_ACCOUNT_HAS_BEEN_DISCONNECTED_TEMPORARILY_BASED_UPON_YOUR_REQUEST_THE_SERVICE_WILL_BE_BACK_ON_XXX_CLICK_HERE_IF_YOU_WANT_TO_RECONNECT_YOUR_SERVICE',
    ],
  };

  public static openServiceRequestCase3 = {
    header: 'Messages.YOU_ELIFE_SERVICE_CANCELLATION_REQUEST_IS_IN_PROGRESS',
    paragraphs: ['Messages.THE_SERVICE_WONT_WORK_AS_YOUR_ACCOUNT_IS_BEING_CANCELLED_BASED_UPON_YOUR_REQUEST'],
  };

  public static complaintExistsCase1 = {
    header: 'MESSAGES.COMPLAINT_ALREADY_EXISTS',
    paragraphs: ['Messages.OUR_TECHNICIANS_ARE_ALREADY_WORKING_ON_RESOLVING_THE_ISSUE_DO_YOU_WANT_TO_FOLLOW'],
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
    paragraphs: ['Messages.WE_HAVE_RECEIVED_YOUR_COMPLAIN_AND_BOOKED_AN_APPOINTMENT_OUR_TECHNICIAN_WILL_CONTACT_YOU_SOON'],
  };

  public static routerNotReachableFormsuccessfullyCase = {
    header: 'MESSAGES.COMPLAINT_BOOK_SUCCESSFULLY',
    paragraphs: ['Messages.WE_HAVE_RECEIVED_YOUR_COMPLAIN_AND_BOOKED_AN_APPOINTMENT_OUR_TECHNICIAN_WILL_CONTACT_YOU_SOON'],
  };

  public static complaintFormsuccessfullyCase = {
    header: 'MESSAGES.COMPLAINT_BOOK_SUCCESSFULLY',
    paragraphs: ['Messages.WE_HAVE_RECEIVED_YOUR_COMPLAIN_AND_BOOKED_AN_APPOINTMENT_OUR_TECHNICIAN_WILL_CONTACT_YOU_SOON'],
  };

  public static tvBoxNotReachableFormsuccessfullyCase = {
    header: 'MESSAGES.COMPLAINT_BOOK_SUCCESSFULLY',
    paragraphs: ['Messages.WE_HAVE_RECEIVED_YOUR_COMPLAIN_AND_BOOKED_AN_APPOINTMENT_OUR_TECHNICIAN_WILL_CONTACT_YOU_SOON'],
  };

  public static tvBoxRestartssuccessfullyCase = {
    header: 'Messages.TV_BOX_RESTARTED_SUCCESSFULLY',
    paragraphs: ['Messages.PLEASE_WAIT_FOR_5_MINUTES_AND_THEN_TRY_USING_THE_INTERNET_AGAIN'],
  };

  public static ontRestartssuccessfullyCase = {
    header: 'Messages.FIBER_BOX_RESTARTED_SUCCESSFULLY',
    paragraphs: ['Messages.PLEASE_WAIT_FOR_5_MINUTES_AND_THEN_TRY_USING_THE_SERVICE_AGAIN'],
  };

  public static OpenTechnicalSR = {
    header: 'MESSAGES.OPEN_SERVICE_REQUEST',
    paragraphs: ['Messages.WE_NOTICED_THAT_THERE_IS_AN_OPEN_SERVICE_REQUEST'],
  };

  public static packageUpgradesuccessfullyCase = {
    header: 'Messages.PACKAGE_UPGRADE_REQUEST_WAS_RAISED_SUCCESSFULLY',
    paragraphs: ['Messages.THANK_YOU_FOR_YOUR_REQUEST_WE_WILL_CALL_YOU_BACK_WITHIN_24_HRS'],
  };

  public static resetCCBPinsuccessfullyCase = {
    header: 'Messages.CCB_PIN_RESET_SUCCESSFULLY',
    paragraphs: ['Messages.YOU_CAN_NOW_ENABLE_CALL_BARRING_USING_THE_NEW_PIN'],
  };

  public static changeCallForwardsuccessfullyCase = {
    header: 'Messages.CALL_FORWARDING_NUMBER_CHANGED_SUCCESSFULLY',
    paragraphs: ['Messages.YOUR_CALLS_WILL_NOW_BE_FORWARDED_TO_THE_NEW_NUMBER'],
  };

  public static tvBoxResetSuccessfullyCase = {
    header: 'Messages.TV_BOX_RESET_SUCCESSFULL',
    paragraphs: ['Messages.YOU_SHOULD_BE_ABLE_TO_WATCH_THE_CHANNEL_NOW_PLEASE_CONFIRM_WHETHER_THE_ISSUE_HAS_BEEN_FIXED_OR_NOT'],
  };

  public static troubeShootCompleteChannelNotListSuccessfullyCase = {
    header: 'Messages.TV_BOX_RESET_SUCCESSFULL',
    paragraphs: ['Messages.YOU_SHOULD_BE_ABLE_TO_WATCH_THE_CHANNEL_NOW_PLEASE_CONFIRM_WHETHER_THE_ISSUE_HAS_BEEN_FIXED_OR_NOT'],
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
          'Messages.WE_ARE_FACING_AN_UNPLANNED_INTERRUPTION_OF_HOME_SERVICES_IN_YOUR_AREA_WHICH_IS_BEYOND_OUR_CONTROL_REST_ASSURED_THAT_THAT_OUR_TEAMS_ARE_WORKING_ON_RESOLVING_THE_ISSUE_WE_SHALL_SEND_AN_SMS_TO_YOUR_REGISTERED_CONTACT_NUMBER_ONCE_THE_SERVICE_IS_RESTORED',
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
      { title: 'Messages.THE_INTERNET_SERVICE_IS_DOWN_WE_ARE_SORRY_TO_BE_HOLDING_YOU_UP_THIS_TIME_PLEASE_TRY_AGAIN_LATER_OR_BOOK_AN_APPOINTMENT_FOR_A_TECHNICIAN_VISIT_INSTEAD' },
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
    body: [{ title: 'Messages.WE_HAVE_FIXED_THE_TECHNICAL_ISSUES_PLEASE_RESTART_THE_ROUTER_AND_THEN_TRY_USING_THE_INTERNET_AGAIN' }],
  };

  public static routerResetRequiredMessageSection: IMessageIssue = {
    header: 'MESSAGES.ISSUE_FIXED_SUCCESSFULLY',
    body: [{ title: 'Messages.WE_HAVE_FIXED_THE_TECHNICAL_ISSUES_PLEASE_RESET_THE_ROUTER_AND_THEN_TRY_USING_THE_INTERNET_AGAIN' }],
  };

  public static routerResetFactorySection: IMessageIssue = {
    header: 'Messages.RESET_ROUTER_TO_FACTORY_DEFAULT',
    body: [{ title: 'Messages.DO_YOU_WANT_TO_RESET_THE_ROUTER_TO_THE_FACTORY_DEFAULT' }],
  };

  public static phoneIssuesMainMessageSection: IMessageIssue = {
    header: 'Messages.NO_ISSUES_FOUND',
    body: [{ title: 'Messages.NO_ISSUES_FOUND_BODY1' }, { title: 'Messages.NO_ISSUES_FOUND_BODY2' }],
  };

  public static internetPasswordResetRequiredMessageSection: IMessageIssue = {
    header: 'MESSAGES.RESET_YOUR_PASSWORD',
    body: [{ title: 'Messages.WE_HAVE_FIXED_ALL_THE_TECHNICAL_ISSUES_YOU_NEED_TO_RESET_YOUR_PASSWORD_FOR_THE_INTERNET_TO_WORK_NORMALLY' }],
  };

  public static routerNotReachableMessageSection: IMessageIssue = {
    header: 'Messages.ROUTER_IS_NOT_ACCESSIBLE',
    body: [{ title: 'Messages.WE_ARE_UNABLE_TO_REACH_YOUR_DEVICE' }],
  };

  public static noIssueMessageSection: IMessageIssue = {
    header: 'Messages.NO_ISSUES_FOUND',
    body: [
      { title: 'Messages.WE_DIDNT_FIND_ANY_TECHNICAL_ISSUES_YOUR_INTERNET_SHOULD_WORK_NORMALLY' },
      { title: 'Messages.TAP_CONTINUE_TO_TROUBLESHOOTING_IF_THERE_IS_A_SPECIFIC_TECHNICAL_ISSUE_OR_VIEW_DETAILS_TO_TAKE_A_CLOSER_LOOK_AT_YOUR_INTERNET_SERVICE' },
    ],
  };

  public static tvOutageMessageSection: IMessageIssue = {
    header: 'MESSAGES.UNPLANNED_INTERRUPTION',
    body: [
      {
        title:
          'Messages.WE_ARE_FACING_AN_UNPLANNED_INTERRUPTION_OF_HOME_SERVICES_IN_YOUR_AREA_WHICH_IS_BEYOND_OUR_CONTROL_REST_ASSURED_THAT_THAT_OUR_TEAMS_ARE_WORKING_ON_RESOLVING_THE_ISSUE_WE_SHALL_SEND_AN_SMS_TO_YOUR_REGISTERED_CONTACT_NUMBER_ONCE_THE_SERVICE_IS_RESTORED',
      },
    ],
  };

  public static phoneOutageMessageSection: IMessageIssue = {
    header: 'MESSAGES.UNPLANNED_INTERRUPTION',
    body: [
      {
        title:
          'Messages.WE_ARE_FACING_AN_UNPLANNED_INTERRUPTION_OF_HOME_SERVICES_IN_YOUR_AREA_WHICH_IS_BEYOND_OUR_CONTROL_REST_ASSURED_THAT_THAT_OUR_TEAMS_ARE_WORKING_ON_RESOLVING_THE_ISSUE_WE_SHALL_SEND_AN_SMS_TO_YOUR_REGISTERED_CONTACT_NUMBER_ONCE_THE_SERVICE_IS_RESTORED',
      },
    ],
  };

  public static fiberBoxNotReachableBuilderSection: IMessageIssue = {
    header: 'MESSAGES.FIBER_BOX_NOT_REACHABLE',
    body: [{ title: 'MESSAGES.PLEASE_MAKE_SURE_THAT_THE_POWER_CABLE_FOR_WALL_MOUNTED_FIBER_BOX_IS_CONNECTED_PROPERLY_AND_POWER_IS_ON' }],
  };

  public static routerUpdradeRecomendedMessageSection: IMessageIssue = {
    header: 'Messages.NO_ISSUES_FOUND',
    body: [
      { title: 'Messages.WE_DIDNT_FIND_ANY_TECHNICAL_ISSUES' },
      { title: 'Messages.YOUR_INTERNET_SHOULD_WORK_NORMALLY' },
      {
        title:
          'Messages.WE_NOTICED_THAT_YOUR_ROUTER_IS_NOT_CAPABLE_OF_HANDLING_HIGH_INTERNET_SPEED_YOU_MAY_BE_FACING_ISSUE_OF_SLOW_BROWSING_DUE_TO_THIS_ITS_HIGHLY_RECOMMENDED_TO_UPGRADE_YOUR_ROUTER_FOR_BETTER_EXPERIENCE_AND_ELIMINATION_OF_REPEATED_INTERNET_ISSUES',
      },
      { title: 'Messages.TAP_UPGRADE_ROUTER_IF_YOU_WISH_TO_UPGRADE_THE_ROUTER' },
      { title: 'Messages.TAP_CONTINUE_TO_TROUBLESHOOTING_IF_THERE_IS_A_SPECIFIC_TECHNICAL_ISSUE_OR_VIEW_DETAILS_TO_TAKE_A_CLOSER_LOOK_AT_YOUR_INTERNET_SERVICE' },
    ],
  };

  public static packageUpdradeRecomendedMessageSection: IMessageIssue = {
    header: 'Messages.NO_ISSUES_FOUND',
    body: [
      { title: 'Messages.WE_DIDNT_FIND_ANY_TECHNICAL_ISSUES' },
      { title: 'Messages.YOUR_INTERNET_SHOULD_WORK_NORMALLY' },
      {
        title:
          'Messages.WE_NOTICED_THAT_THE_INTERNET_SPEED_YOU_HAVE_IS_INCAPABLE_OF_HANDLING_YOUR_USAGE_YOU_MAY_BE_FACING_ISSUE_OF_SLOW_BROWSING_DUE_TO_THIS_IT_IS_HIGHLY_RECOMMENDED_TO_UPGRADE_YOUR_PACKAGE_FOR_BETTER_EXPERIENCE_AND_ELIMINATION_OF_REPEATED_INTERNET_ISSUES',
      },
      { title: 'Messages.TAP_UPGRADE_PACKAGE_IF_YOU_WISH_TO_UPGRADE_THE_ROUTER' },
      { title: 'Messages.TAP_CONTINUE_TO_TROUBLESHOOTING_IF_THERE_IS_A_SPECIFIC_TECHNICAL_ISSUE_OR_VIEW_DETAILS_TO_TAKE_A_CLOSER_LOOK_AT_YOUR_INTERNET_SERVICE' },
    ],
  };

  public static packageAndRouterUpdradeRecomendedMessageSection: IMessageIssue = {
    header: 'Messages.NO_ISSUES_FOUND',
    body: [
      { title: 'Messages.WE_DIDNT_FIND_ANY_TECHNICAL_ISSUES' },
      { title: 'Messages.YOUR_INTERNET_SHOULD_WORK_NORMALLY' },
      {
        title:
          'Messages.WE_NOTICED_THAT_YOUR_ROUTER_IS_NOT_CAPABLE_TO_HANDLE_HIGH_INTERNET_SPEED_BESIDE_THIS_YOU_HAVE_AN_INTERNET_SPEED_THAT_IS_INCAPABLE_OF_HANDLING_YOUR_USAGE_YOU_MAY_BE_FACING_ISSUE_OF_SLOW_BROWSING_DUE_TO_THIS_IT_IS_HIGHLY_RECOMMENDED_TO_UPGRADE_BOTH_YOUR_ROUTER_AND_YOUR_PACKAGE_FOR_BETTER_EXPERIENCE_AND_ELIMINATION_OF_REPEATED_INTERNET_ISSUES',
      },
      { title: 'Messages.TAP_UPGRADE_ROUTER_AND_PACKAGE_IF_YOU_WISH_TO_UPGRADE_THE_ROUTER' },
      { title: 'Messages.TAP_CONTINUE_TO_TROUBLESHOOTING_IF_THERE_IS_A_SPECIFIC_TECHNICAL_ISSUE_OR_VIEW_DETAILS_TO_TAKE_A_CLOSER_LOOK_AT_YOUR_INTERNET_SERVICE' },
    ],
  };

  public static router3rdPartyMessageSection: IMessageIssue = {
    header: 'Messages.NO_ISSUES_FOUND',
    body: [
      { title: 'Messages.WE_DIDNT_FIND_ANY_TECHNICAL_ISSUES' },
      { title: 'Messages.YOUR_INTERNET_SHOULD_WORK_NORMALLY' },
      { title: 'Messages.WE_NOTICED_THAT_YOU_ARE_FACING_A_CONTINUE_ISSUES_WITH_THE_INTERNET_WHILE_USING_A_NON-ETISALAT_ROUTER' },
      { title: 'Messages.ITS_HIGHLY_RECOMMENDED_TO_USE_AN_ETISALAT_ROUTER_FOR_BETTER_EXPERIENCE_AND_ELIMINATION_OF_REPEATED_INTERNET_ISSUES' },
      { title: 'Messages.TAP_BUY_NEW_ROUTER_IF_YOU_WISH_TO_BUY_NEW_ROUTER_FROM_ETISALAT' },
      { title: 'Messages.TAP_CONTINUE_TO_TROUBLESHOOTING_IF_THERE_IS_A_SPECIFIC_TECHNICAL_ISSUE_OR_VIEW_DETAILS_TO_TAKE_A_CLOSER_LOOK_AT_YOUR_INTERNET_SERVICE' },
    ],
  };

  public static routerNotReachableOwnRouterMessageSection: IMessageIssue = {
    header: 'Messages.ROUTER_IS_NOT_ACCESSIBLE',
    body: [
      {
        title: 'MESSAGES.PLEASE_MAKE_SURE_THAT',
        children: [
          'Messages.THE_ROUTER_IS_SWITCHED_ON',
          'Messages.THE_CABLE_FROM_THE_ROUTER_IS_CONNECTED_TO_THE_X_PORT_OF_THE_WALL_MOUNTED_FIBRE_BOX',
          'Messages.IF_ISSUE_IS_STILL_NOT_FIXED_PLEASE_RECONFIGURE_YOUR_ROUTER_WITH_THE_CORRECT_SETTINGS',
        ],
      },
      {
        title: 'Messages.VISIT_DEVICE_CARE_TO_FIND_MORE_DETAILS_ON_HOW_TO_RECONFIGURE_YOUR_ROUTER',
      },
    ],
  };

  public static customerNotUsingSameRouterAllServicesSection: IMessageIssue = {
    header: 'MESSAGES.DEVICES_IS_NOT_ACCESSIBLE',
    body: [
      {
        title: 'MESSAGES.PLEASE_MAKE_SURE_THAT',
        children: [
          'Messages.THE_ROUTER_IS_SWITCHED_ON',
          'MESSAGES.THE_TV_BOX_IS_SWITCHED_ON',
          'MESSAGES.THE_TELEPHONE_DEVICE_IS_SWITCHED_ON',
          'Messages.THE_CABLE_FROM_THE_ROUTER_IS_CONNECTED_TO_THE_X_PORT_OF_THE_WALL_MOUNTED_FIBRE_BOX',
          'MESSAGES.THE_TV_BOX_IS_CONNECTED_TO_X_PORT_ON_THE_FIBER_BOX',
          'MESSAGES.THE_TELEPHONE_IS_CONNECTED_TO_X_PORT_ON_THE_FIBER_BOX',
          'MESSAGES.IF_ISSUE_IS_STILL_NOT_FIXED_PLEASE_RECONFIGURE_YOUR_ROUTER_WITH_THE_CORRECT_SETTINGS',
        ],
      },
      {
        title: 'Messages.VISIT_DEVICE_CARE_TO_FIND_MORE_DETAILS_ON_HOW_TO_RECONFIGURE_YOUR_ROUTER',
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
    header: 'Messages.NO_ISSUES_FOUND',
    body: [
      { title: 'Messages.WE_DIDNT_FIND_ANY_TECHNICAL_ISSUES' },
      { title: 'Messages.YOUR_INTERNET_SHOULD_WORK_NORMALLY' },
      { title: 'Messages.WE_NOTICED_THAT_YOUR_WIFI_SETTINGS_ARE_NOT_TO_THE_STANDARDS_WE_CAN_HELP_YOU_TO_GET_YOUR_WIFI_CONFIGURATION_TO_THE_STANDARDS' },
      { title: 'Messages.TAP_CONFIGURE_WIFI_IF_YOU_WISH_TO_SET_YOUR_WIFI_CONFIGURATION' },
      { title: 'Messages.TAP_CONTINUE_TO_TROUBLESHOOTING_IF_THERE_IS_A_SPECIFIC_TECHNICAL_ISSUE_OR_VIEW_DETAILS_TO_TAKE_A_CLOSER_LOOK_AT_YOUR_INTERNET_SERVICE' },
    ],
  };

  public static routerConfig3rdPartyMessageSection: IMessageIssue = {
    header: 'MESSAGES.RECONFIGURE_YOUR_ROUTER',
    body: [
      {
        title: 'Messages.SINCE_YOU_ARE_USING_YOUR_OWN_ROUTER_MAKE_SURE_THAT',
        children: [
          'Messages.THE_ROUTER_IS_SWITCHED_ON',
          'Messages.THE_CABLE_FROM_THE_ROUTER_IS_CONNECTED_TO_THE_X_PORT_OF_THE_WALL_MOUNTED_FIBRE_BOX',
          'Messages.IF_ISSUE_IS_STILL_NOT_FIXED_PLEASE_RECONFIGURE_YOUR_ROUTER_WITH_THE_CORRECT_SETTINGS',
        ],
      },
      {
        title: 'Messages.TAP_BOOK_AN_APPOINTMENT_IF_YOU_WANT_TO_BOOK_A_TECHNICIAN_VISIT',
      },
      {
        title: 'Messages.VISIT_DEVICE_CARE_TO_FIND_MORE_DETAILS_ON_HOW_TO_RECONFIGURE_YOUR_ROUTER',
      },
    ],
  };

  public static tvBoxNotReachableMessageSection: IMessageIssue = {
    header: 'Messages.WE_CANT_REACH_YOUR_TV_BOX',
    body: [
      {
        title: 'Messages.THE_TV_BOX_SR_NO_53454534_COULDNT_BE_FOUND',
      },
      {
        title: 'Messages.PLEASE_CHECK_IF',
        children: ['Messages.THE_TV_BOX_IS_TURNED_ON', 'Messages.THE_CABLE_FROM_THE_TV_BOX_IS_CONNECTED_TO_THE_X_PORT_OF_THE_WALL_MOUNTED_FIBER_BOX'],
      },
    ],
  };

  public static tvBoxNotReachableAgainMessageSection: IMessageIssue = {
    header: 'Messages.WE_CANT_REACH_YOUR_TV_BOX',
    body: [
      {
        title: 'Messages.ONE_OF_THESE_OPTIONS_COULD_BE_CAUSING_THE_ISSUE',
        children: ['Messages.THE_TV_BOX_IS_NOT_SWITCHED_ON', 'Messages.THE_CABLE_ISNT_CONNECTED_PROPERLY', 'Messages.THE_TV_BOX_IS_FAULTY'],
      },
      {
        title: 'Messages.TAP_TRY_AGAIN_LATER_IF_YOU_WANT_TO_CHECK_THE_PROBLEM_LATER',
      },
      {
        title: 'Messages.TAP_BOOK_AN_APPOINTMENT_IF_YOU_WANT_TO_BOOK_A_TECHNICIAN_VISIT',
      },
    ],
  };

  public static tvBoxRestartMessageSection: IMessageIssue = {
    header: 'MESSAGES.ISSUE_FIXED_SUCCESSFULLY',
    body: [
      {
        title: 'Messages.TAP_BOOK_AN_APPOINTMENT_IF_YOU_WANT_TO_BOOK_A_TECHNICIAN_VISIT',
      },
      {
        title: 'Messages.PLEASE_RESTART_THE_TV_BOX_AND_THEN_TRY_USING_THE_TV_AGAIN',
      },
    ],
  };

  public static tvBoxFactoryResetSection: IMessageIssue = {
    header: 'Messages.RESET_TV_SET_TOP_BOX_TO_FACTORY_DEFAULT',
    body: [
      {
        title: 'Messages.DO_YOU_WANT_TO_RESET_THE_TV_SET_TOP_BOX_TO_THE_FACTORY_DEFAULT',
      },
    ],
  };

  public static ontRestartMessageSection: IMessageIssue = {
    header: 'MESSAGES.ISSUE_FIXED_SUCCESSFULLY',
    body: [
      {
        title: 'Messages.WE_HAVE_FIXED_ALL_THE_TECHNICAL_ISSUES',
      },
      {
        title: 'Messages.PLEASE_RESTART_THE_WALL_MOUNTED_FIBER_BOX_AND_THEN_TRY_USING_THE_PHONE_AGAIN',
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
        title: 'Messages.PLEASE_RESTART_THE_WALL_MOUNTED_FIBER_BOX_AND_THEN_TRY_USING_THE_TV_AGAIN',
      },
    ],
  };

  public static unableWatchChannelsMessageSection: IMessageIssue = {
    header: '',
    body: [
      {
        title: 'Messages.TV_BOX_TROUBLESHOOTING_GUIDELINES',
        children: [
          'Messages.PLUG_THE_TV_BOX_TO_TURN_IT_ON_AND_WAIT_FOR_THE_LED_TO_TURN_RED',
          'Messages.PRESS_THE_POWER_BUTTON_ON_YOUR_REMOTE_CONTROL',
          'Messages.IF_YOU_ARE_UNABLE_TO_TURN_THE_TV_BOX_ON_CHECK_THE_BATTERY_OF_THE_REMOTE_CONTROL',
          'Messages.IF_TV_BOX_WORKS_BUT_YOU_ARE_UNABLE_TO_WATCH_A_CHANNEL_CHECK_WHETHER_THE_CABLE_FROM_TV_BOX_IS_CONNECTED_TO_X_PORT_OF_THE_OPTICAL_NETWORK_TERMINAL_ONT',
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
    header: 'Messages.ROUTER_UPGRADE_REQUEST_WAS_RAISED_SUCCESSFULLY',
    paragraphs: ['Messages.THANK_YOU_FOR_YOUR_REQUEST_WE_WILL_CALL_YOU_BACK_WITHIN_24_HRS'],
  };

  public static eLifeUpgradeSuccess = {
    header: 'Messages.ELIFE_PACKAGE_UPGRADE_REQUEST_WAS_RAISED_SUCCESSFULLY',
    paragraphs: ['Messages.THANK_YOU_FOR_YOUR_REQUEST_WE_WILL_CALL_YOU_BACK_WITHIN_24_HRS'],
  };

  public static routerPackageUpgradesuccessfullyCase = {
    header: 'Messages.ROUTER_AND_PACKAGE_UPGRADE_REQUEST_WAS_RAISED_SUCCESSFULLY',
    paragraphs: ['Messages.THANK_YOU_FOR_YOUR_REQUEST_WE_WILL_CALL_YOU_BACK_WITHIN_24_HRS'],
  };

  public static tvAdminPinResetSuccessfully = {
    header: 'MESSAGES.TV_AMDIN_PIN_RESET_SUCCESSFULLY',
    paragraphs: [
      'Messages.YOUR_PIN_HAS_BEEN_SUCCESSFULLY_RESET_TO_THE_DEFAULT_PIN_1111',
      'Messages.PLEASE_RESTART_ALL_YOUR_TV_BOXES_TO_ACTIVATE_THE_NEW_PIN',
      'Messages.NOTE_YOU_WILL_BE_REQUIRED_TO_CHANGE_THE_DEFAULT_PIN_WHEN_YOU_LOG_IN_TO_ANY_PAID_SERVICE',
    ],
  };

  public static accountNotActive = {
    header: 'Messages.YOUR_ACCOUNT_IS_DISCONNECTED_TEMPORARILY',
    span: 'Messages.CLICK_HERE',
    spanListener: () => {},
    paragraphs: ['Messages.IF_YOU_WISH_TO_GET_BILL_DETAILS_MAKE_PAYMENT'],
  };

  public static thirdPartyRoutersuccessfullyCase = {
    header: 'Messages.NEW_ROUTER_REQUEST_WAS_RAISED_SUCCESSFULLY',
    paragraphs: ['Messages.THANK_YOU_FOR_YOUR_REQUEST_WE_WILL_CALL_YOU_BACK_WITHIN_24_HRS'],
  };

  public static resetWifiResetFirstsuccessfullyCase = {
    header: 'Messages.ROUTER_RESET_SUCCESSFUL',
    paragraphs: ['MESSAGES.PLEASE_WAIT_FOR_5_MINUTES_BEFORE_USING_THE_INTERNET_AGAIN', 'Messages.CONTINUE_TO_CONFIGURE_YOUR_WIFI_SETTINGS'],
  };

  public static resetWifiResetSecondsuccessfullyCase = {
    header: 'Messages.WIFI_PASSWORD_UPDATED_SUCCESSFULLY',
    paragraphs: [
      'MESSAGES.PLEASE_WAIT_FOR_5_MINUTES_AND_THEN_TRY_USING_THE_INTERNET_AGAIN_YOUR_NEW_PASSWORD_IS_XXXX_MAKE_SURE_TO_USE_THE_NEW_WIFI_PASSWORD_TO_CONNECT_TO_THE_ROUTER',
      //'MESSAGES.YOUR_NEW_PASSWORD_IS_XXXX_MAKE_SURE_TO_USE_THE_NEW_WIFI_PASSWORD_TO_CONNECT_TO_THE_ROUTER',
    ],
  };

  public static troubleshootComplete = {
    header: 'Messages.TROUBLESHOOTING_COMPLETE',
    paragraphs: [
      'Messages.WE_COULDNT_FIND_ANY_TECHNICAL_PROBLEM_WITH_THE_SERVICE_YOU_CAN_BOOK_AN_APPOINTMENT_WITH_A_TECHNICIAN_IF_YOURE_STILL_FACING_AN_ISSUE_PLEASE_NOTE_THAT_YOU_MIGHT_GET_CHARGED_AED_150_FOR_THE_TECHNICIAN_VISIT_IF_THE_ISSUE_ISNT_FROM_OUR_SIDE',
    ],
  };

  public static restELifeLoginPin = {
    header: 'Messages.UNABLE_TO_LOGIN',
    paragraphs: ['MESSAGES.PLEASE_RESET_YOUR_ELIFEON_PIN_TO_FIX_THE_ISSUE_IT_WILL_BE_RESET_TO_THE_DEFAULT_PIN_1111_ELIFE'],
  };

  public static restELifeLoginPinResetSuccess = {
    header: 'Messages.ELIFEON_PIN_RESET_SUCCESSFULLY',
    paragraphs: ['Messages.YOUR_PIN_HAS_BEEN_SUCCESSFULLY_RESET_TO_THE_DEFAULT_PIN'],
  };

  public static gameSessionCancelConfirmed = {
    header: 'Messages.GAME_SESSION',
    paragraphs: ['Messages.ELIFE_TV_GAME_NAME_HAS_BEEN_RESTARTED_SUCCESSFULLY_YOU_CAN_NOW_LAUNCH_A_NEW_GAME_SESSION_FROM_THE_MAIN_MENU_OF_ELIFE_TV_GAMING'],
  };

  public static packageTransferSuccess = {
    header: 'Messages.PACKAGE_TRANSFER_WAS_SUCCESSFUL',
    paragraphs: ['Messages.PLEASE_REBOOT_YOUR_TV_BOX_THEN_YOU_WILL_BE_ABLE_TO_ENJOY_THE_SERVICE'],
  };

  public static unableWatchSpecificChannelPackageTransferSuccess = {
    header: 'Messages.PACKAGE_TRANSFERRED_SUCCESSFULLY',
    paragraphs: ['Messages.YOU_CAN_NOW_WATCH_ALL_THE_CHANNELS_IN_PACKAGE_NAME_ON_TV_BOX_SL_NO'],
  };

  public static resetInternetPasswordSuccess = {
    header: 'Messages.INTERNET_PASSWORD_RESET_SUCCESSFULLY',
    paragraphs: [
      'Messages.THE_ROUTER_WILL_BE_CONFIGURED_WITH_THE_NEW_PASSWORD_AUTOMATICALLY',
      'Messages.MAKE_SURE_YOU_RESTART_YOUR_ROUTER_AFTER_A_FEW_MINUTES_AND_THEN_TRY_USING_THE_INTERNET',
    ],
  };

  public static InstallNewRouterComplaintRaisedSuccessfully = {
    header: 'Messages.COMPLAINT_RAISED_SUCCESSFULLY',
    paragraphs: ['MESSAGES.WE_HAVE_RECEIVED_YOUR_COMPLAINT_AND_BOOKED_AN_APPOINTMENT_OUR_TECHNICIAN_WILL_CONTACT_YOU_SOON'],
  };

  public static requestDetails = {
    header: 'MESSAGES.REQUEST_DETAILS',
    paragraphs: ['MESSAGES.HERE_ARE_THE_DETAILS_OF_YOUR_REQUEST'],
  };

  public static requestUnderProcess = {
    header: 'MESSAGES.REQUEST_UNDER_PROCESS',
    paragraphs: ['Messages.PLEASE_WAIT_YOUR_REQUEST_WILL_BE_PROCESSED_SOON'],
  };

  public static requestAlreadyExists = {
    header: 'MESSAGES.REQUEST_ALREADY_EXISTS',
    paragraphs: ['MESSAGES.THERE_IS_ALREADY_AN_APPOINTMENT_SCHEDULED_FOR_PROVIDING_THE_SERVICE'],
  };

  public static appointmentChangeSuccess = {
    header: 'MESSAGES.APPOINTMENT_CHANGED_SUCCESSFULLY',
    paragraphs: ['Messages.YOUR_APPOINTMENT_HAS_BEEN_CHANGED_SUCCESSFULLY_THANK_YOU_FOR_USING_OUR_TECHNICAL_SUPPORT'],
  };

  public static serviceUnavailable = {
    header: 'MESSAGES.SERVICE_UNAVAILABLE',
    paragraphs: ['Messages.THIS_SERVICE_IS_COMING_TO_YOUR_AREA_SOON_OUR_TEAM_WILL_CONTACT_YOU_ONCE_IT_IS_AVAILABLE'],
  };

  public static actionRequired = {
    header: 'MESSAGES.ACTION_REQUIRED',
    paragraphs: ['Messages.THERE_IS_SOME_WORK_PENDING_FROM_YOUR_SIDE_PLEASE_TAP_SET_AN_APPOINTMENT_IF_YOU_HAVE_ALREADY_COMPLETED_IT'],
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
    header: 'Messages.AN_ERROR_OCCURRED',
    paragraphs: ['Messages.SORRY_THE_OPERATION_HAS_TIMEOUT_PLEASE_TRY_AGAIN'],
  };

  public static tryAgainErrorOccured = {
    header: 'Messages.AN_ERROR_OCCURRED',
    paragraphs: ['Messages.SORRY_THE_OPERATION_HAS_TIMEOUT_PLEASE_TRY_AGAIN_AFTER_SOME_TIME'],
  };

  public static resetInternetPasswordSuccessDetail = {
    header: 'Messages.INTERNET_PASSWORD_RESET_SUCCESSFULLY',
    paragraphs: [
      'Messages.THE_ROUTER_NEEDS_TO_BE_CONFIGURED_WITH_THE_NEW_PASSWORD_VISIT_DEVICE_CARE_TO_FIND_MORE_DETAILS_ON_HOW_TO_RECONFIGURE_YOUR_ROUTER',
      'Messages.WE_RECOMMEND_USING_AN_ETISALAT_ROUTER_SO_THAT_WE_CAN_PROVIDE_REMOTE_SUPPORT',
    ],
  };

  public static resetRouterWifiPasswordSuccess = {
    header: 'Messages.ROUTERS_WIFI_PASSWORD_RESET_SUCCESSFULLY',
    paragraphs: ['Messages.PLEASE_WAIT_FOR_2_MINUTES_AND_THEN_TRY_CONNECTING_TO_THE_WIFI_NETWORK_WITH_THE_PASSWORD'],
  };

  public static unableToReachRouter = {
    header: 'Messages.WE_CANT_REACH_YOUR_ROUTER',
    paragraphs: ['Messages.MAKE_SURE_THAT_ROUTER_IS_TURNED_ON_AND_IS_CONNECTED_TO_THE_X_PORT_OF_THE_WALL_MOUNTED_FIBER_BOX'],
  };

  public static unableToReachRouterFailed = {
    header: 'Messages.WE_CANT_REACH_YOUR_ROUTER',
    paragraphs: ['Messages.TAP_CONTINUE_TO_TROUBLESHOOTING_IF_YOU_THINK_THIS_IS_RELATED_TO_A_TECHNICAL_ISSUE'],
  };

  public static unableToResetPassword = {
    header: 'MESSAGES.UNABLE_TO_RESET_PASSWORD',
    paragraphs: [
      'Messages.WE_CANT_RESET_YOUR_WIFI_PASSWORD_BECAUSE_YOU_DONT_HAVE_AN_ETISALAT_ROUTER',
      'Messages.WE_RECOMMEND_USING_AN_ETISALAT_ROUTER_SO_THAT_WE_CAN_PROVIDE_REMOTE_SUPPORT',
    ],
  };

  public static unableToProcessRequest = {
    header: 'MESSAGES.UNABLE_TO_PROCESS_REQUEST',
    paragraphs: ['Messages.IT_LOOKS_LIKE_YOU_ARE_NOT_SUBSCRIBED_TO_ELIFEON'],
  };

  //#region  Quick Links
  public static installNewRouterMessageCase = {
    header: 'MESSAGES.INSTALL_NEW_ROUTER',
    paragraphs: ['Messages.PLEASE_WAIT_THIS_MIGHT_TAKE_UP_TO_30_MINUTES', 'Messages.YOU_CAN_CONTACT_US_IF_THE_ROUTER_DOES_NOT_START_WORKING_AFTER_DATE_TIME'],
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
      'Messages.YOU_ARE_CURRENTLY_USING_A_THIRD_PARTY_ROUTER',
      'MESSAGES.WE_CAN_PROVIDE_REMOTE_SUPPORT_IF_YOU_INSTALL_AN_ETISALAT_ROUTER',
      'MESSAGES.IF_YOU_CHOOSE_THE_SECOND_OPTION_YOU_WILL_NEED_TO_WAIT_30_MINUTES_AND_THEN_RESET_YOUR_INTERNET_PASSWORD',
    ],
  };

  public static installNewRouterFlow4MessageCase = {
    header: 'Messages.INSTALLING_THIRD_PARTY_ROUTER',

    paragraphs: [
      {
        title: 'Messages.INSTALLATION_OF_ROUTER_IS_IN_PROGESS_IT_WILL_TAKE_UP_TO_30_MINUTEs',
      },
      {
        title: 'MESSAGES.FOLLOW_THESE_STEPS_AFTER_30_MINUTES',
        children: ['Messages.CONNECT_THE_NEW_ROUTER_TO_X_PORT_OF_THE_WALL_MOUNTED_FIBER_BOX', 'MESSAGES.SET_THE_ROUTER_WITH_A_NEW_PASSWORD'],
      },
    ],
  };

  public static installNewRouterFlow6MessageCase = {
    header: 'MESSAGES.INSTALLING_ETISALAT_ROUTER',

    paragraphs: [
      {
        title: 'Messages.INSTALLATION_OF_ROUTER_IS_IN_PROGESS_IT_WILL_TAKE_UP_TO_30_MINUTEs',
      },
      {
        title: 'MESSAGES.FOLLOW_THESE_STEPS_AFTER_30_MINUTES',
        children: [
          'Messages.CONNECT_THE_NEW_ROUTER_TO_X_PORT_OF_THE_WALL_MOUNTED_FIBER_BOX',
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
        children: ['MESSAGES.CONNECT_THE_NEW_ROUTER_TO_THE_X_PORT_OF_THE_WALL_MOUNTED_FIBER_BOX', 'MESSAGES.SET_THE_ROUTER_WITH_A_NEW_PASSWORD'],
      },
    ],
  };

  public static routerInstallSuccessfullyMessageCase = {
    header: 'Messages.ROUTER_INSTALLED_SUCCESSFULLY',
    paragraphs: ['Messages.YOUR_ROUTER_SHOULD_NOW_WORK_TAP_CONFIGURE_ROUTER_OR_CONTINUE_TO_TROUBLESHOOTING_IF_YOU_ARE_STILL_FACING_AN_ISSUE'],
  };

  public static routerInstallFailedMessageCase = {
    header: 'Messages.ROUTER_INSTALLATION_FAILED',
    paragraphs: ['Messages.ROUTER_INSTALLATION_FAILED_TAP_BOOK_COMPLAINT_IF_YOU_WISH_TO_BOOK_A_COMPLAINT_OR_PLEASE_TRY_AGAIN_LATER'],
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
    title: 'BUTTONS.YES_FOLLOW_UP',
    explanatoryNote: 'MESSAGES.DO_YOU_WANT_TO_FOLLOW_UP_THE_REQUEST',
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
    title: 'HEADER.BOOK_A_COMPLAINT',
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
    title: 'BUTTONS.RESTART_NOW_STB',
    clickListener: () => {},
    linkTo: '/tvBox-restart-required-successfully',
    behaviour: 'primary',
  };

  public static restartOntNowButton: IButton = {
    title: 'BUTTONS.RESTART_ONT_STB',
    clickListener: () => {},
    linkTo: '/ont-restart-required-successfully',
    behaviour: 'primary',
  };

  public static restartManuallyLink: IButton = {
    title: 'BUTTONS.ILL_RESTART_IT_MANYALLY',
    clickListener: () => {},
    linkTo: '/tvBox-restart-required-manually',
    behaviour: 'link',
  };

  public static ontrestartManuallyLink: IButton = {
    title: 'BUTTONS.ILL_RESTART_IT_MANYALLY',
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
    linkTo: '/issues/internet/reset-wifi-password',
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
    title: 'BUTTONS.UPGRADE_ROUTER_AND_PACKAGE',
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
    linkTo: '/issues/internet/reset-wifi-password',
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
    linkTo: '/issues/internet/reset-wifi-password',
    behaviour: 'primary',
  };

  public static usingSameRouterButton = {
    title: 'BUTTONS.YES_I_AM',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'primary',
    customListner: 'AppInternetIssuesDialog',
    explanatoryNote: 'MESSAGES.ARE_YOU_USING_THE_SAME_ROUTER',
  };

  public static usingSameRouterRouterNotReachableButton = {
    title: 'BUTTONS.YES_I_AM',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'primary',
    customListner: 'RouterNotReachableAppInternetIssuesDialog',
    explanatoryNote: 'MESSAGES.ARE_YOU_USING_THE_SAME_ROUTER',
  };

  public static usingOwnRouterButton = {
    title: 'BUTTONS.NO_I_M_USING_MY_OWN_ROUTER',
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
    title: 'BUTTONS.STILL_FACING_AN_ISSUE',
    clickListener: () => {},
    linkTo: '',
    behaviour: 'link',
  };

  public static stillFacingIssueResetTvBoxLink = {
    title: 'BUTTONS.STILL_FACING_AN_ISSUE',
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

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
    header: 'MESSAGES.APPOINTMENT_BOOK_SUCCFULLY',
    paragraphs: ['MESSAGES.APPOINTMENT_BOOK_SUCCFULLY_Body'],
  };

  public static OpenTechnicalSR = {
    header: 'MESSAGES.OPEN_SERVICE_REQUEST',
    paragraphs: ['MESSAGES.OPEN_SERVICE_REQUEST_BODY'],
  };
  public static packageUpgradesuccessfullyCase = {
    header: 'MESSAGES.PACKAGE_UPGRADE_REQUEST_SUCCFULLY',
    paragraphs: ['MESSAGES.PACKAGE_UPGRADE_REQUEST_SUCCFULLY_Body'],
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
}

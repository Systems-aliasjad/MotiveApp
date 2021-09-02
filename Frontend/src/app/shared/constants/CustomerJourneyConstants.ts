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
  public static openServiceRequestCaseButtons: IButton[] = [
    {
      title: 'BUTTONS.FOLLOW_UP',
      explanatoryNote: 'TEXT.FOLLOW_UP_QUESTION',
      clickListener: () => {},
      linkTo: '/thanks',
      behaviour: 'primary',
    },
    {
      title: 'LINKS.EXIT_TROUBLESHOOTING',
      clickListener: () => {},
      linkTo: '/thanks',
      behaviour: 'link',
    },
  ];
}

import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { ModalController } from '@ionic/angular';
import { IMotiveButton, IPageHeader, ITermsAndConditions } from '../../constants/types';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss'],
})
export class TermsConditionsComponent implements OnInit {
  termsCheck: string = '';

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.TERMS_AND_CONDITIONS',
    showBackBtn: false,
  };
  button3: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.YES,_I_AGREE',
    SM: '12',
  };
  termsAndCondition: boolean = true;

  TC: ITermsAndConditions[] = [
    {
      head: 'HEADER.TERMS_AND_CONDITIONS',
      body: [
        'MESSAGES.BY_ACCEPTING_THE_TC_YOU_CONFIRM_THAT_ALL_INFORMATION_BY_YOU_IS_CORRECT_AND_YOU_BEAR_RESPONSIBILITY_IF_THERE_WILL_BE_ANY_DISCREPANCY_IN_THE_DOCUMENTS_AND_WILL_LIABLE_FOR_THE_ACTION',
        'MESSAGES.DUIS_AUTE_IRURE_DOLOR_IN_REPREHENDERIT_IN_VOLUPTATE_VELIT_ESSE_CILLUM_DOLORE_EU_FUGIAT_NULLA_PARIATUR_EXCEPTEUR_SINT_OCCAECAT_CUPIDATAT_NON_PROIDENT_SUNT_IN_CULPA_QUI_OFFICIA_DESERUNT_MOLLIT_ANIM_ID_EST_LABORUM',
      ],
    },
    {
      head: 'MESSAGES.LOREM_IPSUM',
      body: [
        'MESSAGES.DUIS_AUTE_IRURE_DOLOR_IN_REPREHENDERIT_IN_VOLUPTATE_VELIT_ESSE_CILLUM_DOLORE_EU_FUGIAT_NULLA_PARIATUR_EXCEPTEUR_SINT_OCCAECAT_CUPIDATAT_NON_PROIDENT_SUNT_IN_CULPA_QUI_OFFICIA_DESERUNT_MOLLIT_ANIM_ID_EST_LABORUM',
      ],
    },
    {
      head: 'MESSAGES.LOREM_IPSUM',
      body: [
        'MESSAGES.DUIS_AUTE_IRURE_DOLOR_IN_REPREHENDERIT_IN_VOLUPTATE_VELIT_ESSE_CILLUM_DOLORE_EU_FUGIAT_NULLA_PARIATUR_EXCEPTEUR_SINT_OCCAECAT_CUPIDATAT_NON_PROIDENT_SUNT_IN_CULPA_QUI_OFFICIA_DESERUNT_MOLLIT_ANIM_ID_EST_LABORUM',
        'MESSAGES.DUIS_AUTE_IRURE_DOLOR_IN_REPREHENDERIT_IN_VOLUPTATE_VELIT_ESSE_CILLUM_DOLORE_EU_FUGIAT_NULLA_PARIATUR_EXCEPTEUR_SINT_OCCAECAT_CUPIDATAT_NON_PROIDENT_SUNT_IN_CULPA_QUI_OFFICIA_DESERUNT_MOLLIT_ANIM_ID_EST_LABORUM',
      ],
    },
    {
      head: 'MESSAGES.LOREM_IPSUM',
      body: [
        'MESSAGES.DUIS_AUTE_IRURE_DOLOR_IN_REPREHENDERIT_IN_VOLUPTATE_VELIT_ESSE_CILLUM_DOLORE_EU_FUGIAT_NULLA_PARIATUR_EXCEPTEUR_SINT_OCCAECAT_CUPIDATAT_NON_PROIDENT_SUNT_IN_CULPA_QUI_OFFICIA_DESERUNT_MOLLIT_ANIM_ID_EST_LABORUM',
        'MESSAGES.DUIS_AUTE_IRURE_DOLOR_IN_REPREHENDERIT_IN_VOLUPTATE_VELIT_ESSE_CILLUM_DOLORE_EU_FUGIAT_NULLA_PARIATUR_EXCEPTEUR_SINT_OCCAECAT_CUPIDATAT_NON_PROIDENT_SUNT_IN_CULPA_QUI_OFFICIA_DESERUNT_MOLLIT_ANIM_ID_EST_LABORUM',
      ],
    },
  ];
  constructor(private backendService: BackendService, private sharedService: SharedService, private modalCtrl: ModalController) {
    this.sharedService.setHeaderConfig('HEADER.TERMS_AND_CONDITIONS', true);
  }

  ngOnInit(): void {}

  AcceptContinue = (event: any) => {
    this.sharedService.setTermsConditions(true);
    this.sharedService.setLoader(true);
    this.backendService.nextSignal('Agree').subscribe((data: any) => {
      this.sharedService.setLoader(false);
      // this.helperService.InternetFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
    });
    this.modalCtrl.dismiss(true);
  };
}

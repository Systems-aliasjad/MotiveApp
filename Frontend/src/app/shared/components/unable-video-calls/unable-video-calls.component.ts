import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'unable-video-calls',
  templateUrl: './unable-video-calls.component.html',
  styleUrls: ['./unable-video-calls.component.css'],
})
export class UnableVideoCallsComponent implements OnInit {
  selectedLang: string = 'en';
  instructionList: any[] = [
    {
      text: 'Make sure your connected with your home internet.',
      child: [],
    },
    {
      text: 'Make sure you are using the one of these authorized apps:',
      child: ['Botim', "C'ME", 'HiU Messanger', 'Voice UAE', 'Yzer (android only)'],
    },
    {
      text: 'Please delete all available VPN.',
      child: [],
    },
    {
      text: 'If issue is still not fixed, install the app again.',
      child: [],
    },
  ];

  constructor(private sharedService: SharedService, private router: Router, private actRoute: ActivatedRoute) {
    actRoute.params.subscribe((val) => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.sharedService.setHeaderConfig('HEADER.UNABLE_TO_VIDEO_CALLS', true);
    this.selectedLang = this.sharedService.getDefaultLanguage();
    this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.issueFixed_BookAComplaint));
  }
  routeLinkHelper(arr) {
    return arr.map((obj) => {
      return {
        ...obj,
        clickListener: () => {
          this.router.navigate([obj.linkTo]);
        },
      };
    });
  }
}

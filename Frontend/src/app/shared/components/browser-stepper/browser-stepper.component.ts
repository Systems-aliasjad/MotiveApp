import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-browser-stepper',
  templateUrl: './browser-stepper.component.html',
  styleUrls: ['./browser-stepper.component.css'],
})
export class BrowserStepperComponent implements OnInit {
  selectedLang: string = 'en';
  step: number = 1;
  headerString: string = '';
  isBookComp: boolean = true;
  isContTroubleShoot: boolean = false;

  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.selectedLang = this.sharedService.getDefaultLanguage();
    this.activatedRoute.queryParams.subscribe((params) => {
      this.step = params['step'] || 1;
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.headerString = 'Step ' + this.step + '/3';
    this.sharedService.setHeaderConfig(this.headerString, true);
    if (this.step < 3) {
      this.isContTroubleShoot = false;
      this.isBookComp = true;
    } else {
      this.isContTroubleShoot = true;
      this.isBookComp = false;
    }
  }

  issueFixed() {
    this.router.navigate(['thanks']);
  }

  continueTroubleShoot() {
    this.step = +this.step + 1;
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { step: this.step },
      queryParamsHandling: 'merge',
    });
  }

  bookComplaint() {
    this.router.navigate(['bookComplaint']);
  }
}

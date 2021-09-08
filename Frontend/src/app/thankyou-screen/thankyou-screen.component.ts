import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-thankyou-screen',
  templateUrl: './thankyou-screen.component.html',
  styleUrls: ['./thankyou-screen.component.scss'],
})
export class ThankyouScreenComponent implements OnInit {
  constructor(public router: Router, private sharedService: SharedService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((data) => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.sharedService.setHeaderConfig('', false);
  }
  goToLandingScreen = () => {
    this.router.navigate(['/']);
  };
}

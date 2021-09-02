import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-thankyou-screen',
  templateUrl: './thankyou-screen.component.html',
  styleUrls: ['./thankyou-screen.component.scss'],
})
export class ThankyouScreenComponent implements OnInit {
  constructor(public router: Router, private sharedService: SharedService) {
    this.sharedService.setHeaderConfig('', false);
  }

  ngOnInit(): void {}
  goToLandingScreen = () => {
    this.router.navigate(['/']);
  };
}

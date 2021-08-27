import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou-screen',
  templateUrl: './thankyou-screen.component.html',
  styleUrls: ['./thankyou-screen.component.scss'],
})
export class ThankyouScreenComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
  goToLandingScreen = () => {
    this.router.navigate(['/']);
  };
}

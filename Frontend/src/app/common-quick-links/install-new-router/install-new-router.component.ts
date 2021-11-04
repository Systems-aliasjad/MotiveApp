import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IPageHeader } from 'src/app/shared/constants/types';

@Component({
  selector: 'app-install-new-router',
  templateUrl: './install-new-router.component.html',
  styleUrls: ['./install-new-router.component.scss'],
})
export class InstallNewRouterComponent implements OnInit {
  @Input()
  subHeader: string;
  @Input()
  packages: any;
  @Output()
  button1Click = new EventEmitter();
  @Output()
  button2Click = new EventEmitter();
  @Input()
  headerConfig: IPageHeader;

  @Output()
  cardClicked = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit() {}

  goToTransferPackage(card) {
    this.cardClicked.emit(card);
    // this.router.navigate(['/package-transfer']);
  }

  button1Listener() {
    this.button1Click.emit();
    // this.router.navigate(['/issues/tv/transfer-package/step1']);
  }

  button2Listener() {
    this.button2Click.emit();
    // this.router.navigate(['issues/tv/unable-to-watch-specific-channel']);
  }
}

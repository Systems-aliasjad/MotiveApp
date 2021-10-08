import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IPageHeader } from 'src/app/shared/constants/types';

@Component({
  selector: 'app-package-available',
  templateUrl: './package-available.component.html',
  styleUrls: ['./package-available.component.scss'],
})
export class PackageAvailableComponent implements OnInit {
  // unable-to-watch-package-available
  // package-available

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

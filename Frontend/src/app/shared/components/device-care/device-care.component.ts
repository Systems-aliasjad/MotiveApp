import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-device-care',
  templateUrl: './device-care.component.html',
  styleUrls: ['./device-care.component.scss'],
})
export class DeviceCareComponent implements OnInit {
  selectedLang: string;

  constructor(private sharedService: SharedService) {
    this.sharedService.setHeaderConfig('HEADER.DEVICE_CARE', true);
  }

  ngOnInit() {}
}

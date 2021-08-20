import { Component, Input, OnInit } from '@angular/core';
import { HelperService } from '../../../../shared/helper/helper.service';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quickLinks.component.html',
  styleUrls: ['./quickLinks.component.scss'],
})
export class QuickLinksComponent implements OnInit {
  @Input() codeType: string = '3P';
  quickLinks;
  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    this.quickLinks = this.helperService.filterCard(this.codeType, 'quickLinkCards');
  }
}

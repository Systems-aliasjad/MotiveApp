import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { SVGs } from 'src/app/shared/constants/constants';
import { IOntDetail, IRouterDetail } from 'src/app/shared/constants/types';
@Component({
  selector: 'app-six-layer',
  templateUrl: './six-layer.component.html',
  styleUrls: ['./six-layer.component.scss'],
})
export class SixLayerComponent implements OnInit, AfterViewInit {
  @Input()
  connectedDevices;
  @Input()
  ontConfig: IOntDetail;
  @Input()
  routerConfig: IRouterDetail;
  @Input()
  etisalatConfig;

  flag = 0;
  disableLeft:boolean=false
  disableRight:boolean=true
  
  constructor() {}
  ngAfterViewInit(): void {
   if(this.connectedDevices.length>4){
     this.disableRight=false;
     this.disableLeft=true;
   }
   else{
     this.disableLeft=false;
     this.disableRight=false;
   }
  }

  ngOnInit() {}

  onImgError(event) {
    event.target.src = SVGs.ont.default;
  }

  clickLeft() {
    if (this.flag > 0) {this.flag--;
      if(this.flag===0){
        this.disableLeft=true;
      }
    this.disableRight=false;
    }
    else { 
      this.disableLeft=true;
      this.disableRight=false;

    }
  }

  clickRight() {
    if (this.flag < this.connectedDevices.length - 4) {this.flag++;
    this.disableLeft=false;
    }
    else{   this.disableLeft=false;
      this.disableRight=true;}
  }
}

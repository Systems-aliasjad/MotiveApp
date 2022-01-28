import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { flowCodes } from 'src/app/shared/constants/constants';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-specific-channel-package-transfer',
  templateUrl: './specific-channel-package-transfer.component.html',
  styleUrls: ['./specific-channel-package-transfer.component.scss'],
})
export class SpecificChannelPackageTransferComponent implements OnInit {
  selectedRadioItem: string = '';
  formGroup: FormGroup;
  pageContent: string;
  selectedCard;
  filteredList: any = [];
  cardList: any[] = [
  ];
  constructor(private formBuilder: FormBuilder,
      private backendService: BackendService,
    private sharedService: SharedService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
      this.updateHeader();
      this.initialization();

     this.sharedService.setLoader(true);
     this.backendService.serviceDetailsSTB().subscribe((data: any) => {
      this.sharedService.setLoader(false);
      
      
        var apiResponse = this.sharedService.getApiResponseDataSTBContinue();
      //  var apiResponse = this.hardData;
      
      var nonSharedPackage= apiResponse?.result?.responseData?.stbList;
      var sharedPackage= apiResponse?.result?.responseData?.sharedPackages;
    

      nonSharedPackage?.forEach((element) => {
        element?.packages?.forEach(pac => {
          var index = {
          title:  pac?.packageName, 
           description:'STB SR#' + element?.stbSerialNumber,
          ID: pac?.packageId,
        };

        this.filteredList.push(index);
        });

      });
///////////////For Shared Package
       sharedPackage?.forEach((element) => {
        var index = {
          title:element?.packageName,  
           description: '',
          ID: element?.packageId,
        };

        this.filteredList.push(index);
        });

     this.cardList = this.filteredList;
    });


  }


 headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.SELECT_PACKAGE',
    showBackBtn: true,
  };

   initialization() {
    this.formGroup = this.formBuilder.group({
      radioButton: [''],
    });
  }


  radioGroupChange(event) {
    this.selectedRadioItem = event.detail.value;
    this.formGroup.controls['radioButton'].setValue(event.detail.value);
  }



  button1Listener() {
   if(this.selectedRadioItem==='')
   return;

    var trimValue=this.selectedRadioItem.split('#%^&_');

    var data = {
      packageID: trimValue[0]??'', ////Soure Sellected Package
    };

  this.sharedService.setLoader(true);
    this.backendService.specificChannelStage3(data).subscribe((data: any) => {
    this.sharedService.setLoader(false);
    if (data?.result?.screenCode === flowCodes.QAIPTVCL1) {
       this.sharedService.setApiResponseData(data);
       this.router.navigate(['issues/tv/unable-to-watch-specific-channel']);
    } else {
      this.router.navigate(['/error-comes']);
    }
    });

  }

  button2Listener() {

     this.router.navigate(['/thanks']);
     
  }

  updateHeader() {
    // this.sharedService.setHeaderConfig('HEADER.TRANSFER_PACKAGE', false, true);
    this.pageContent = 'MESSAGES.PLEASE_SELECT_THE_PACKAGE_YOU_ARE_FACING_ISSUE';
  }

    hardData= {
	"code": 200,
	"message": "Success",
	"result": {
		"screenCode": "IPTVSD1",
		"statusMessage": "IPTV Service Display, 4G/5G flag is disabled",
		"validSignals": [
			"QA Package Transfer",
			"QA eLifeOn Password Reset",
			"QA STB Admin Pin Reset",
			"GS Session Release",
			"no"
		],
		"responseData": {
			"agmaStatus": "",
			"stbStatus": "110551055759#false$316113173898#true",
			"packageStatus": "",
			"elifeResetPswd": "false",
			"stbList": [
				{
					"stbSerialNumber": "316113173898",
					"packages": [
						{
							"packageId": "3",
							"packageName": "Asiana Lite"
						},
						{
							"packageId": "602",
							"packageName": "ICC Cricket World Cup 2019"
						}
					]
				},
				{
					"stbSerialNumber": "110551055759",
					"packages": [
						{
							"packageId": "3",
							"packageName": "Asiana Lite"
						},
						{
							"packageId": "602",
							"packageName": "ICC Cricket World Cup 2019"
						}
					]
				}
			],
			"sharedPackages": [
				{
					"packageId": "100",
					"packageName": "Free TV Channels"
				},
				{
					"packageId": "72",
					"packageName": "beIN Ultimate (12 months contract)"
				},
				{
					"packageId": "600",
					"packageName": "FIFA World Cup 2018"
				},
				{
					"packageId": "111",
					"packageName": "FIFA World Cup 2014"
				},
				{
					"packageId": "102",
					"packageName": "Asian Choice Basic"
				}
			],
			"elifeGameStatus": "true"
		}
	}
}
}


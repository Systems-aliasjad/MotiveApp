import { Component, OnInit, OnChanges, SimpleChanges, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeaderService } from '../services/header.service';
import { environment } from '../../../../environments/environment';
import { AppConfigService } from '../../../base/service/app-config.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
    issuer = '';
    redirectUri = '';

    menuOpener = false;
    showRules = false;
    showMore = false;
    rulesCount = 0;
    archivedRules$;
    archivedRulesCount = 0;
    // allRules = [];
    userEmail;
    userName: string;
    isAuthenticated: boolean;
    error: Error;
    pageTitle;
    app_environments;
    showEnv = false;
    constructor(public cdr: ChangeDetectorRef, public headerService: HeaderService, public dialog: MatDialog, public appConfig: AppConfigService) {
        this.app_environments = environment.app_environments;
    }

    async ngOnInit() {
        this.headerService.getTitle().subscribe((title) => {
            this.pageTitle = title;
            //     console.log('in get header value header component', this.pageTitle);
            this.cdr.detectChanges();
        });
        // if (this.isAuthenticated) {
        //     const userClaims = await this.oktaAuth.getUser();
        //     this.userName = userClaims.email ? userClaims.email.split('@')[0].toLowerCase() : '';
        //     localStorage.setItem('logedInUser', this.userName);
        // }
    }

    ngAfterViewInit() {
        // this.pageTitle = this.headerService.getTitle();
    }

    // async login() {
    //   try {
    //     await this.oktaAuth.loginRedirect();
    //   } catch (err) {
    //     console.error(err);
    //     this.error = err;
    //   }
    // }
    async logout() {
        // Read idToken before local session is cleared
        // const idToken = await this.oktaAuth.getIdToken();
        // Clear local session
        // this.oktaAuth.signOut('/login');
        // Clear remote session
        // window.location.href = `${this.issuer}/v1/logout?id_token_hint=${idToken}&post_logout_redirect_uri=${this.redirectUri}`;
    }

    Settings() {}
    onAboutClick() {
        // this.dialog.open(AboutComponent);
    }

    onHelpClick() {
        this.downloadMyFile();
    }
    downloadMyFile() {
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', './assets/files/documentation.pdf');
        link.setAttribute('download', `documentation.pdf`);
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    onGeneratePswdClick() {
        // this.dialog.open(GeneratePasswordComponent);
    }
}

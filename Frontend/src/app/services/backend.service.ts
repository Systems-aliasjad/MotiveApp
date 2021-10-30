import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(public http: HttpClient) {}
  ontDetail = {
    ontSerial: '485754431E91C19B',
    ontType: 'I-240G-A',
    isReachable: true,
    isRebootRequired: false,
    isUpgradeRequired: false,
    url: '',
    className: '',
  };

  routerDetail = {
    routerSerial: '109461043164',
    routerModel: 'DIR850',
    isReachable: false,
    isRebootRequired: true,
    isUpgradeRequired: true,
    isManaged: true,
    isResetRequired: true,
    url: '',
    className: '',
  };

  stbDetail = {
    isReachable: true,
    isRebootRequired: false,
    sbSerialNumber: '130857101318',
    stbMac: '2832C52E3612',
    stbModel: 'NA',
  };

  hardData = {
    screenCode: 'CI72',
    responseData: {
      hsiPasswordReset: true,
      ppoeConnected: 'true',
      wifiEnabled: 'true',
      hsiUploadDownload: '50Mbps,250Mbps',
      noOfConnectedDevices: 1,
      routerDetails: this.routerDetail,
      ontDetails: this.ontDetail,
      stbDetails: [this.stbDetail],
      connectedDevices: [
        {
          addressSource: 'DHCP',
          isActive: '1',
          ipAddress: '192.168.1.101',
          leaseTimeRemaining: '21856',
          hostName: '',
          macAddress: 'a6:8d:22:64:e9:b3',
          interfaceType: '802.11',
        },
      ],
      upsellingOpportunity: 'UPSEL3',
      tsOutcome: 'No Issue Found',
    },
  };

  getUserDetail(token: string, lang: string) {
    return this.http.get(`token?lang=${lang}`, { headers: { Authorization: `Bearer ${token}` } });
  }

  getUserDetailFromAccountId(accountId) {
    return this.http.get(`token?lang=en&account-id=${accountId}`, { headers: { Authorization: `Bearer KKnKASBiRKMbsHvOMzcEwYmDLDnuPQnDzIHH5U1T358=` } });
  }

  getLandingPageData() {
    if (environment.shouldCallAPI) {
      return this.http.get(`motive/landing-screen`);
    } else {
      const response = { result: { productCode: '3P' } };
      return this.hardCoadedResponse(response);
    }
  }

  getIssueDiagnositic(forIssue: string) {
    if (environment.shouldCallAPI) {
      return this.http.get(`motive/troubleshoot/${forIssue}`);
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  nextSignal(signal: 'MandatoryOnly' | 'DontReboot' | 'Agree') {
    if (environment.shouldCallAPI) {
      return this.http.put(`motive/troubleshoot/next-step`, { signal: signal });
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  bookComplaint(data) {
    if (environment.shouldCallAPI) {
      return this.http.put(`motive/troubleshoot/book-complaint`, data);
    } else {
      const response = { result: { responseData: { referenceNo: '4365298739', dateOfVisit: 'Jul 10 2019, 10:30 AM', status: '--' } } };
      // return new Observable<object>((subscriber: Subscriber<object>) => subscriber.next(new Object())).pipe(map((o) => response));
      return this.hardCoadedResponse(response);
    }
  }

  upsellRequest(data) {
    if (environment.shouldCallAPI) {
      return this.http.put(`motive/troubleshoot/upsell`, data);
    } else {
      const response = { result: { referenceNo: '4365298739' } };
      return this.hardCoadedResponse(response);
    }
  }

  resetWifiPassword(data) {
    if (environment.shouldCallAPI) {
      return this.http.put(`motive/troubleshoot/reset-wifi-password`, { ...data });
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  resetRouter(data) {
    if (environment.shouldCallAPI) {
      return this.http.put(`motive/troubleshoot/next-step`, data);
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  rebootMyDevice(DeviceToReeboot: string) {
    if (environment.shouldCallAPI) {
      return this.http.get(`motive/troubleshoot/reboot/${DeviceToReeboot}`);
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  updateCCBPin(newPin) {
    if (environment.shouldCallAPI) {
      return this.http.get(` motive/troubleshoot/ccb-pin-reset?pin=${newPin}`);
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  rebootDeviceSTB(DeviceToReeboot) {
    if (environment.shouldCallAPI) {
      console.log('DeviceToReeboot', DeviceToReeboot);
      return this.http.put(`motive/troubleshoot/reboot-devices`, DeviceToReeboot);
    } else {
      const response = null; // { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  stbAdminPinReset(data) {
    if (environment.shouldCallAPI) {
      return this.http.get(`motive/troubleshoot/stb-admin-pin-reset/${data}`);
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  elifeOnReset() {
    if (environment.shouldCallAPI) {
      return this.http.get(`motive/troubleshoot/elife-password-reset`);
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  problemPlayingGame() {
    if (environment.shouldCallAPI) {
      return this.http.get(`motive/troubleshoot/session-release`);
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  stbDetails() {
    if (environment.shouldCallAPI) {
      return this.http.get(`motive/troubleshoot/stb-details`);
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  transferPackage(data) {
    if (environment.shouldCallAPI) {
      return this.http.put(`motive/troubleshoot/next-step`, data);
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  serviceDetailsSTB() {
    if (environment.shouldCallAPI) {
      return this.http.get(`motive/troubleshoot/continue`);
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  hardCoadedResponse(response) {
    return new Observable<object>((subscriber: Subscriber<object>) => subscriber.next(new Object())).pipe(map((o) => response));
  }
}

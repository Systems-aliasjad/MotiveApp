import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { TS_OUTCOME_ISSUE_FOUND_FIXED, TS_OUTCOME_ISSUE_FOUND_NOT_FIXED } from '../shared/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(public http: HttpClient) {}
  ontDetail = {
    ontSerial: '485754431E91C19B',
    ontType: 'I-240G-A',
    isReachable: false,
    isRebootRequired: false,
    isUpgradeRequired: false,
    url: '',
    className: '',
  };
  connectedDevice = {
    addressSource: 'DHCP',
    hostName: 'Unknown-d2:03:0d:8b:a0:fc',
    interfaceType: 'Ethernet',
    ipAddress: '192.168.1.47',
    isActive: true,
    leaseTimeRemaining: '81548',
    macAddress: 'D2:03:0D:8B:A0:FC',
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
    isReachable: false,
    isRebootRequired: false,
    sbSerialNumber: '130857101318',
    stbMac: '2832C52E3612',
    stbModel: 'NA',
  };

  hardData = {
    screenCode: 'CI72',
    responseData: {
      hsiPasswordReset: false,
      ppoeConnected: 'true',
      wifiEnabled: 'true',
      hsiUploadDownload: '50Mbps,250Mbps',
      noOfConnectedDevices: 1,
      routerDetails: this.routerDetail,
      ontDetails: this.ontDetail,
      stbDetails: [this.stbDetail],
      connectedDevices: [
        this.connectedDevice,
        this.connectedDevice,
        this.connectedDevice,
        this.connectedDevice,
        this.connectedDevice,
        this.connectedDevice,
        this.connectedDevice,
        this.connectedDevice,
        this.connectedDevice,
        this.connectedDevice,
      ],
      upsellingOpportunity: 'UPSEL1',
      tsOutcome: TS_OUTCOME_ISSUE_FOUND_FIXED,
    },
  };

  getUserDetail(token: string, lang: string) {
    if (environment.shouldCallAPI) {
      return this.http.get(`token?lang=${lang}`, { headers: { Authorization: `Bearer ${token}` } });
    } else {
      const response = { result: { productCode: '3P' } };
      return this.hardCoadedResponse(response);
    }
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

  nextSignal(signal: 'MandatoryOnly' | 'DontReboot' | 'Agree' | 'Reset STB') {
    if (environment.shouldCallAPI) {
      return this.http.put(`motive/troubleshoot/next-step`, { signal: signal });
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  resetInternetPassword() {
    if (environment.shouldCallAPI) {
      return this.http.put(`motive/troubleshoot/hsi-password-reset`, {});
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

  quickActionsResetWifiPassword(data) {
    if (environment.shouldCallAPI) {
      return this.http.put(`motive/troubleshoot/reset-wifi-config`, { ...data });
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }
  quickActionsResetWifiPasswordHomeZone(data, value) {
    if (environment.shouldCallAPI) {
      return this.http.put(`motive/troubleshoot/reset-hz-ap-config`, { ...data, value });
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
      return this.http.get(`motive/troubleshoot/ccb-pin-reset?pin=${newPin}`);
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  updateCCBPinQuickLinks(newPin) {
    if (environment.shouldCallAPI) {
      return this.http.get(`motive/troubleshoot/ccb-pin-reset-qa?pin=${newPin}`);
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

  stbAdminPinResetQuickLinks(data) {
    if (environment.shouldCallAPI) {
      return this.http.get(`motive/troubleshoot/stb-admin-pin-reset-qa/${data}`);
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  stbRebootQuickLinks(data) {
    if (environment.shouldCallAPI) {
      return this.http.put(`motive/troubleshoot/reboot-devices-qa`, data);
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
      return this.http.get(`motive/troubleshoot/stb-detail`);
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  installNewRouterRequest(routerType) {
    if (environment.shouldCallAPI) {
      return this.http.get(`motive/troubleshoot/install-router/${routerType}`);
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  complaintFollowupRemarks(remakrs) {
    if (environment.shouldCallAPI) {
      return this.http.get(`motive/troubleshoot/complaint-followup?remarks=${remakrs}`);
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  srFollowupRemarks(remakrs) {
    if (environment.shouldCallAPI) {
      return this.http.get(`motive/troubleshoot/sr-followup?srNo=${remakrs}`);
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  transferPackageNextStep(data) {
    if (environment.shouldCallAPI) {
      return this.http.put(`motive/troubleshoot/next-step`, {
        data: {
          ...data,
        },
        signal: 'next',
      });
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }
  transferPackage(data) {
    if (environment.shouldCallAPI) {
      return this.http.put(`motive/troubleshoot/transfer-pkg`, data);
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  quickTransferPackage(data) {
    if (environment.shouldCallAPI) {
      return this.http.put(`motive/troubleshoot/transfer-pkg-qa`, data);
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  quickActionsInitialData() {
    if (environment.shouldCallAPI) {
      return this.http.get(`motive/troubleshoot/QUICK_ACTIONS`);
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  quickActionsNextStep(forAction) {
    if (environment.shouldCallAPI) {
      return this.http.put(`motive/troubleshoot/next-step`, {
        data: {
          customerQASelection: forAction,
        },
        signal: 'next',
      });
    } else {
      const response = { result: this.hardData };
      return this.hardCoadedResponse(response);
    }
  }

  quickActionsJustNextStep() {
    if (environment.shouldCallAPI) {
      return this.http.put(`motive/troubleshoot/next-step`, {
        signal: 'next',
      });
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

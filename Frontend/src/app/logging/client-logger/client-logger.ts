import { environment } from '../../../environments/environment';

export enum ClientLogLevel {
    INFO,
    WARN,
    ERROR,
}

export class ClientLogger {
    writeLog(message: string, logLevel: ClientLogLevel) {
        if (environment.enableLog) {
            // tslint:disable-next-line: no-console
            switch (logLevel) {
                case ClientLogLevel.ERROR:
                    console.error(message);
                    break;
                case ClientLogLevel.WARN:
                    console.warn(message);
                    break;
                case ClientLogLevel.INFO:
                    console.log(message);
                    break;
                default:
                    console.log(message);
                    break;
            }
        }
    }
}

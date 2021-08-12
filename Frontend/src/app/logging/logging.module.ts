import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalErrorInterceptor } from './global-exception-interceptor';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [],
    providers: [
        {
            provide: ErrorHandler,
            useClass: GlobalErrorInterceptor,
        },
    ],
})
export class LoggingModule {}

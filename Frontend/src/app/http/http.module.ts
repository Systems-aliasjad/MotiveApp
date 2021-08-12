import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInterceptor } from './http-client-interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestCache, HttpCachingInterceptor } from './http-caching-interceptor';

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true },
        RequestCache,
        { provide: HTTP_INTERCEPTORS, useClass: HttpCachingInterceptor, multi: true },
    ],
})
export class HttpModule {}

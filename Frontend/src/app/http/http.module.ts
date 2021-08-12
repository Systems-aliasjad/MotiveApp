import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestCache, HttpCachingInterceptor } from './http-caching-interceptor';

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    providers: [RequestCache, { provide: HTTP_INTERCEPTORS, useClass: HttpCachingInterceptor, multi: true }],
})
export class HttpModule {}

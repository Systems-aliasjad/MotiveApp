import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HttpCachingInterceptor implements HttpInterceptor {
    constructor(private cache: RequestCache) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // continue if not cachable.
        if (!this.isCachable(req)) {
            return next.handle(req);
        }

        const cachedResponse = this.cache.get(req);
        return cachedResponse ? of(cachedResponse) : this.sendRequest(req, next, this.cache);
    }

    /**
     * Get server response observable by sending request to `next()`.
     * Will add the response to the cache on the way out.
     */
    sendRequest(req: HttpRequest<any>, next: HttpHandler, cache: RequestCache): Observable<HttpEvent<any>> {
        // No headers allowed in npm search request
        const noHeaderReq = req.clone({ headers: new HttpHeaders() });

        return next.handle(req).pipe(
            tap((event) => {
                // There may be other events besides the response.
                if (event instanceof HttpResponse) {
                    cache.put(req, event); // Update the cache.
                }
            })
        );
    }

    isCachable(req: HttpRequest<any>): boolean {
        if (req.url.endsWith('GetCountryLOBCurrencyGroup') || req.url.endsWith('GetRptOffSubDptTrtyTypFnlDispStatsLyrTechAsistGrp') || req.url.endsWith('GetAllUserListLookup')) {
            return true;
        }
        return false;
    }
}

const maxAge = 30000;
@Injectable()
export class RequestCache {
    cache = new Map();

    get(req: HttpRequest<any>): HttpResponse<any> | undefined {
        const url = req.urlWithParams;
        const cached = this.cache.get(url);

        if (!cached) {
            return undefined;
        }

        const isExpired = cached.lastRead < Date.now() - maxAge;
        const expired = isExpired ? 'expired ' : '';
        return cached.response;
    }

    put(req: HttpRequest<any>, response: HttpResponse<any>): void {
        const url = req.url;
        const entry = { url, response, lastRead: Date.now() };
        this.cache.set(url, entry);

        const expired = Date.now() - maxAge;
        this.cache.forEach((expiredEntry) => {
            if (expiredEntry.lastRead < expired) {
                this.cache.delete(expiredEntry.url);
            }
        });
    }
}

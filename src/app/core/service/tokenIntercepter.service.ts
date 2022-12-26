import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { TokenService } from './tokenService';

@Injectable()
export class TokenIntercepterService implements HttpInterceptor {

    constructor(private injector: Injector) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const tokenService = this.injector.get(TokenService);
        if (tokenService.hasToken()) {
            let token = tokenService.getToken();
            let req1 = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`),
            })
            return next.handle(req1);
        } else {
            return next.handle(req);
        }
    }
}

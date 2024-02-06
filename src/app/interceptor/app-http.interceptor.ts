import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private serviceLogin: LoginService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.includes("/auth/login")
    &&!request.url.includes("/Client/AddClient")
    &&!request.url.includes("/Demande/ajouterDemande")
    ) {
      let newRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'))
      })
      return next.handle(newRequest);
    } else
      return next.handle(request);

  }
}

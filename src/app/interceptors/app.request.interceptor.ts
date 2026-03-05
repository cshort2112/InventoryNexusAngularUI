import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {User} from '../model/shared/user.model';
import {Router} from '@angular/router';
import {tap} from 'rxjs';

@Injectable()
export class AppRequestInterceptor implements HttpInterceptor {
  user = new User();
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let httpHeaders = new HttpHeaders();
    if(sessionStorage.getItem('userdetails')) {
      this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    }
    if(this.user && this.user.password && this.user.username) {
      httpHeaders = httpHeaders.append('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));
    }


    let xsrf = sessionStorage.getItem('XSRF-TOKEN')!;
    if (xsrf) {
      httpHeaders = httpHeaders.append('X-XSRF-TOKEN', xsrf);
    }

    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    const xhr = req.clone({
      headers: httpHeaders
    });

    return next.handle(xhr).pipe(tap(
      (error: any) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status !== 401) {
            return;
          }
          this.router.navigate(['dashboard']);
        }
      }
    ));
  }
}

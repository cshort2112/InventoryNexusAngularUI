import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/user.model';
import {environment} from '../../../environments/environment';
import {AppConstants} from '../../constants/app.constants';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient) {

  }

  validateLoginDetails(user: User) {
    window.sessionStorage.setItem('user', JSON.stringify(user));
    return this.http.get(environment.rooturl + AppConstants.LOGIN_API_URL, {observe: 'response', withCredentials: true});
  }
}

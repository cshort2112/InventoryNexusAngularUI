import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AppConstants} from '../../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  constructor(private http: HttpClient) {
  }

  fetchAbout() {
    return this.http.get(environment.rooturl + AppConstants.ABOUT_API_URL, {observe: 'response', responseType: 'text'});
  }
}

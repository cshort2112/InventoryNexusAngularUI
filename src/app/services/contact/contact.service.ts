import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Contact} from '../../model/shared/contact.model';
import {environment} from '../../../environments/environment';
import {AppConstants} from '../../constants/app.constants';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private httpClient: HttpClient) {
  }

  submitContact(contact: Contact): Observable<Contact> {
    return this.httpClient.post<Contact>(environment.rooturl + AppConstants.CONTACT_API_URL, contact);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AppConstants} from '../../constants/app.constants';
import {Order} from '../../model/orders/order.model';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  constructor(private http: HttpClient) {}

  fetchOrders() {
     return this.http.get<Order[]>(environment.rooturl + AppConstants.ORDERS_API_URL, {observe: 'response', withCredentials: true});
   }
}

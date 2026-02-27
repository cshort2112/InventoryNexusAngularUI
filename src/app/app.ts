import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {from} from 'rxjs';
import { HeaderComponent } from './component/header/header';
import { Navbar } from './component/navbar/navbar';
import { Orders } from './component/orders/orders';
import { OrdersItems } from './component/orders-items/orders-items';
import { RouterLink } from '@angular/router';
import { Landing } from './component/landing/landing';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, Navbar, Orders, OrdersItems, Landing ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ShopifyIntegration');
}

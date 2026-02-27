import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {from} from 'rxjs';
import { HeaderComponent } from './header/header';
import { Navbar } from './navbar/navbar';
import { Orders } from './orders/orders';
import { OrdersItems } from './orders-items/orders-items';
import { RouterLink } from '@angular/router';
import { Landing } from './landing/landing';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, Navbar, Orders, OrdersItems, Landing ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ShopifyIntegration');
}

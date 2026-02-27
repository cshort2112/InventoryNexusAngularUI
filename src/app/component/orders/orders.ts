import { Component, signal } from '@angular/core';
import {AppNavbar} from '../app-navbar/app-navbar';

@Component({
  selector: 'app-orders',
  imports: [
    AppNavbar
  ],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
  dummyOrder = signal("111-123134-1231555");

  handleButtonClick() {
    this.dummyOrder.set('111-123134-12365499');
  }
}



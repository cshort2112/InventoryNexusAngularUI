import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-orders',
  imports: [],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
  dummyOrder = signal("111-123134-1231555");

  handleButtonClick() {
    this.dummyOrder.set('111-123134-12365499');
  }
}



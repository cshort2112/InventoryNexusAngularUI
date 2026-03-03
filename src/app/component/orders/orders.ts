import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../services/Orders/order.service';
import {Order} from '../../model/orders/order.model';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-orders',
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders implements OnInit {
  displayedColumns: string[] =
    ['id', 'creationTimestamp', 'status', 'state', 'marketplace', 'total'];
  dataSource = new MatTableDataSource<Order>();

  expandedOrder: Order | null = null;

  isLoading = true;


  ngOnInit() {
    this.loadOrders();
  }
  constructor(private orderService: OrderService) {
  }

  private loadOrders() {
    this.orderService.fetchOrders().subscribe({
      next: (data) => {
        this.dataSource.data = data.body ?? [];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching orders:', error);
        this.isLoading = false;
      }
    })
  }

  toggleExpandedOrder(order: Order | null) {
    this.expandedOrder = this.expandedOrder?.id === order?.id ? null : order;
  }
}



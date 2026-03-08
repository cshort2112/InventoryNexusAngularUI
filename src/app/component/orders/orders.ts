import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {OrderService} from '../../services/Order/order.service';
import {Order} from '../../model/orders/order.model';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-orders',
  imports: [
    MatProgressSpinnerModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders implements OnInit {
  displayedColumns = ['name', 'street1', 'status', 'state'];
  displayedColumnsExpanded = [...this.displayedColumns, 'expand'];
  dataSource = new MatTableDataSource<Order>();
  expandedOrder: Order | null = null;
  isLoading = true;

  constructor(private orderService: OrderService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.loadOrders();
  }

  private loadOrders() {
    this.orderService.fetchOrders().subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.isLoading = false;
        this.changeDetectorRef.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching orders:', error);
        this.isLoading = false;
        this.changeDetectorRef.detectChanges();
      }
    })
  }

  toggleExpandedOrder(order: Order) {
    this.expandedOrder = this.isExpanded(order) ? null : order;
  }

  isExpanded(order: Order) {
    return this.expandedOrder === order;
  }

}



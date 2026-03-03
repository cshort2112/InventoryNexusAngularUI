import {OrderItem} from './orderitem.model';


export class Order {
  id: string;
  orderItems: OrderItem[];
  name: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  postalCode: string;
  total: string;
  creationTimestamp: string;
  shipped: boolean;
  fulfilled: boolean;
  trackingNumber: string;
  marketplace: string;
  status: string;

  constructor(id: string,
              orderItems: OrderItem[],
              name: string,
              street1: string,
              street2: string,
              city: string,
              state: string,
              postalCode: string,
              total: string,
              creationTimestamp: string,
              shipped: boolean,
              fulfilled: boolean,
              trackingNumber: string,
              marketplace: string,
              status: string) {
    this.id = id;
    this.orderItems = orderItems;
    this.name = name;
    this.street1 = street1;
    this.street2 = street2;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.total = total;
    this.creationTimestamp = creationTimestamp;
    this.shipped = shipped;
    this.fulfilled = fulfilled;
    this.trackingNumber = trackingNumber;
    this.marketplace = marketplace;
    this.status = status;
  }
}

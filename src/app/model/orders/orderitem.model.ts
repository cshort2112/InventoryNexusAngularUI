export class OrderItem {
  id: string;
  sku: string;
  title: string;
  price: string;
  quantity: bigint;
  creationTimestamp: string;

  constructor(id: string, sku: string, title: string, price: string, quantity: bigint, creationTimestamp: string) {
    this.id = id;
    this.sku = sku;
    this.title = title;
    this.price = price;
    this.quantity = quantity;
    this.creationTimestamp = creationTimestamp;
  }
}

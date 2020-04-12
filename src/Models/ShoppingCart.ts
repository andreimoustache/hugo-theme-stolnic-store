import Product from './Product';

export default class ShoppingCart {
  items = new Map<string, CartLine>();
  totalPrice = 0.0;

  addProduct(item: Product, quantity = 1, note = '') {
    this.items.set(item.id, new CartLine(item, quantity, note));
    this.totalPrice += item.price;
  }

  removeProduct(item: Product) {
    this.items.delete(item.id);
    this.totalPrice -= item.price;
  }
}

export class CartLine {
  item: Product;
  quantity: number;
  total: number;
  note: string;

  constructor(item: Product, quantity = 0, note = '') {
    this.item = item;
    this.quantity = quantity;
    this.note = note;
    this.total = item.price * quantity;
  }
}

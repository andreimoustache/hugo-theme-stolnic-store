import {Product} from './Product';
import {View} from './View';

export class ShoppingCart {
  items = new Map<string, CartLine>();
  totalPrice = 0.0;
  view: View;

  constructor(domSelector: string) {
    this.view = new View(document.querySelector(domSelector) as Element);
  }

  addProduct(item: Product, quantity = 1, note = '') {
    const line = new CartLine(item, quantity, note);
    this.items.set(item.id, line);
    this.totalPrice += line.total;
    this.view.updateValue('.total', this.totalPrice.toString());
  }

  removeProduct(item: Product) {
    this.items.delete(item.id);
    this.totalPrice -= item.price;
    this.view.updateValue('.total', this.totalPrice.toString());
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

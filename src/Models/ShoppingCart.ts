import {Product} from './Product';
import {View} from './View';
import {Template} from 'hogan.js';

export class ShoppingCart {
  lines = new Map<string, CartLine>();
  totalPrice = 0.0;
  view: View;

  constructor(domSelector: string, template: Template) {
    this.view = new View(domSelector, template);
  }

  addProduct(item: Product, quantity = 1, note = '') {
    const line = new CartLine(item, quantity, note);
    this.lines.set(item.id, line);
    this.totalPrice += line.total;
    this.view.update({lines: this.lines, totalPrice: this.totalPrice});
  }

  removeProduct(item: Product) {
    this.lines.delete(item.id);
    this.totalPrice -= item.price;
    this.view.update({lines: this.lines, totalPrice: this.totalPrice});
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

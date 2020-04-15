import {Product} from './Product';
import {View} from './View';
import {Template} from 'hogan.js';
import {NumberRounder} from './NumberRounder';
import {CartLine} from './CartLine';

export class ShoppingCart {
  lines = new Map<string, CartLine>();
  view: View;

  get totalPrice(): number {
    let price = 0.0;
    for (const line of this.lines.values()) {
      price += line.total;
    }

    return NumberRounder.toTwoDecimals(price);
  }

  get vm(): Record<string, object | number> {
    const lines = [];
    for (const line of this.lines.values()) {
      lines.push({
        name: line.item.name,
        quantity: line.quantity,
        price: line.item.price,
      });
    }

    return {
      totalPrice: this.totalPrice,
      lines: lines,
    };
  }

  constructor(domSelector: string, template: Template) {
    this.view = new View(domSelector, template);
    this.view.update({totalPrice: this.totalPrice});
  }

  addProduct(item: Product, quantity = 1, note = '') {
    let line: CartLine;
    if (this.lines.has(item.id)) {
      line = this.lines.get(item.id) as CartLine;
      line.quantity += quantity;
    } else {
      line = new CartLine(item, quantity, note);
    }

    this.lines.set(item.id, line);
    this.view.update(this.vm);
  }

  removeProduct(item: Product) {
    this.lines.delete(item.id);
    this.view.update(this.vm);
  }
}

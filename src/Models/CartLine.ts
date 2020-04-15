import {Product} from './Product';
import {NumberRounder} from './NumberRounder';

export class CartLine {
  get total(): number {
    return NumberRounder.toTwoDecimals(this.quantity * this.item.price);
  }

  constructor(public item: Product, public quantity = 1, public note = '') {}
}

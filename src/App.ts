import {ShoppingCart} from './Models/ShoppingCart';
import {Product} from './Models/Product';

export class App {
  products: Map<string, Product>;
  shoppingCart: ShoppingCart;

  constructor() {
    this.products = this.getProducts();
    this.shoppingCart = new ShoppingCart();

    this.bindToButtons();
  }

  getProducts(): Map<string, Product> {
    fetch('/products/index.json').then(r => r.json());
    return new Map<string, Product>();
  }

  bindToButtons() {
    // const addToCartButtons = Array.from(document.querySelectorAll('.add-to-cart'));
    // addToCartButtons.forEach(b => console.log(b));
    throw new Error('Method not implemented.');
  }
}

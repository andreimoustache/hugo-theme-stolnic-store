import {ShoppingCart} from './Models/ShoppingCart';
import {Product} from './Models/Product';

export class App {
  products: Map<string, Product>;
  shoppingCart: ShoppingCart;
  productsEndpoint: string;

  constructor(
    products = new Map<string, Product>(),
    shoppingCart = new ShoppingCart(),
    productsEndpoint = '/products/index.json'
  ) {
    this.products = products;
    this.shoppingCart = shoppingCart;
    this.productsEndpoint = productsEndpoint;
  }

  async initialise() {
    this.products = await this.getProducts();
  }

  getProducts(): Promise<Map<string, Product>> {
    return fetch(this.productsEndpoint).then(r => r.json());
  }

  bindToButtons() {
    // const addToCartButtons = Array.from(document.querySelectorAll('.add-to-cart'));
    // addToCartButtons.forEach(b => console.log(b));
    throw new Error('Method not implemented.');
  }
}

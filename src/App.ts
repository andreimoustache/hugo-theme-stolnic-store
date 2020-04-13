import {ShoppingCart} from './Models/ShoppingCart';
import {Product} from './Models/Product';

export class App {
  products: Map<string, Product>;
  shoppingCart: ShoppingCart;
  productsEndpoint: string;

  constructor(
    products = new Map<string, Product>(),
    shoppingCart = new ShoppingCart(),
    productsEndpoint = 'http://www.mocky.io/v2/5e94533a3100004b005e300f'
  ) {
    this.products = products;
    this.shoppingCart = shoppingCart;
    this.productsEndpoint = productsEndpoint;
  }

  async initialise() {
    this.products = await this.getProducts();
    this.bindToButtons();
  }

  getProducts(): Promise<Map<string, Product>> {
    return fetch(this.productsEndpoint).then(r => r.json());
  }

  bindToButtons() {
    for (const [id, product] of Object.entries(this.products)) {
      document
        .querySelector(`[data-product-id="${id}"]`)
        ?.querySelector('.add-to-cart')
        ?.addEventListener('click', () => {
          this.shoppingCart.addProduct(product);
        });
    }
  }
}

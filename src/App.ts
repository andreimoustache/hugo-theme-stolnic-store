import {ShoppingCart} from './Models/ShoppingCart';
import {Product} from './Models/Product';

export class App {
  products: Map<string, Product>;
  shoppingCart: ShoppingCart;
  productsEndpoint: string;

  constructor(
    products = new Map<string, Product>(),
    shoppingCart = new ShoppingCart('#shopping-cart'),
    productsEndpoint = 'http://www.mocky.io/v2/5e946fc53100002d005e3155'
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
      const productCard = document.querySelector(`[data-product-id="${id}"]`);
      productCard
        ?.querySelector('.add-to-cart')
        ?.addEventListener('click', () => {
          const quantity = productCard.querySelector('.quantity')
            ?.textContent as string;
          const note = productCard.querySelector('.note')
            ?.textContent as string;
          this.shoppingCart.addProduct(product, parseInt(quantity, 10), note);
        });
    }
  }
}

import {ShoppingCart} from './Models/ShoppingCart';
import {Product} from './Models/Product';
import {Template} from 'hogan.js';

export class App {
  products: Map<string, Product>;
  shoppingCart: ShoppingCart;
  productsEndpoint: string;

  constructor(templates: Record<string, Template>, productsEndpoint: string) {
    this.products = new Map<string, Product>();
    this.shoppingCart = new ShoppingCart(
      '#shopping-cart',
      templates['shopping-cart']
    );
    this.productsEndpoint = productsEndpoint;
  }

  async initialise() {
    this.products = await this.getProducts();
    this.bindToButtons();
  }

  getProducts(): Promise<Map<string, Product>> {
    return fetch(this.productsEndpoint)
      .then(r => r.json())
      .catch(error => console.error(error));
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

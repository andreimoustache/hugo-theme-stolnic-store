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
    this.products = this.getProducts();
    this.bindToButtons();
  }

  getProducts(): Map<string, Product> {
    const products = new Map<string, Product>();
    document.querySelectorAll('[data-product-id]').forEach(el => {
      const product = {
        id: (el as HTMLElement).dataset.productId,
        name: (el as HTMLElement).dataset.productName,
        price: parseFloat((el as HTMLElement).dataset.productPrice || ''),
        images: [],
      };

      if (!product.id || !product.name || !product.price) return;

      products.set(product.id, product as Product);
    });

    return products;
  }

  bindToButtons() {
    for (const [id, product] of this.products.entries()) {
      const productCard = document.querySelector(`[data-product-id="${id}"]`);
      productCard
        ?.querySelector('.add-to-cart')
        ?.addEventListener('click', () => {
          const quantity = (productCard.querySelector(
            '.quantity'
          ) as HTMLInputElement).value;
          const note = productCard.querySelector('.note')
            ?.textContent as string;
          this.shoppingCart.addProduct(product, parseInt(quantity, 10), note);
        });
    }
  }
}

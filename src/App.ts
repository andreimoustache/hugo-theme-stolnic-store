import {ShoppingCart} from './Models/ShoppingCart';
import {Product} from './Models/Product';
import {Template} from 'hogan.js';
import {Order} from './Models/Order';

export class App {
  products: Map<string, Product>;
  shoppingCart: ShoppingCart;

  constructor(
    templates: Record<string, Template>,
    public productsEndpoint: string,
    public apiUrl: string
  ) {
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

  private _bindCartButtons(id: string, product: Product) {
    const productCard = document.querySelector(`[data-product-id="${id}"]`);
    productCard
      ?.querySelector('.add-to-cart')
      ?.addEventListener('click', () => {
        const quantity = (productCard.querySelector(
          '.quantity'
        ) as HTMLInputElement).value;
        const note = productCard.querySelector('.note')?.textContent as string;
        this.shoppingCart.addProduct(product, parseInt(quantity, 10), note);
      });
  }

  private _bindOrderButton() {
    const orderCard = document.querySelector('.order-details');
    orderCard?.querySelector('.send-order')?.addEventListener('click', e => {
      e.preventDefault();

      const order = new Order(
        (orderCard.querySelector('.name') as HTMLInputElement).value,
        (orderCard.querySelector('.email') as HTMLInputElement).value,
        (orderCard.querySelector('.telephone') as HTMLInputElement).value,
        this.shoppingCart.lines
      );

      order.submit();
    });
  }

  bindToButtons() {
    for (const [id, product] of this.products.entries()) {
      this._bindCartButtons(id, product);
    }

    this._bindOrderButton();
  }
}

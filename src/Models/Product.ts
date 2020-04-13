export class Product {
  id: string;
  title: string;
  price = 0.0;
  images: Array<ProductImage> = [];

  constructor(
    id: string,
    title: string,
    price = 0.0,
    images: Array<ProductImage> = []
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.images = images;
  }
}

export interface ProductImage {
  url: string;
  title: string;
}

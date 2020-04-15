export class Product {
  constructor(
    public id: string,
    public name: string,
    public price = 0.0,
    public images: Array<ProductImage> = []
  ) {}
}

export interface ProductImage {
  url: string;
  title: string;
}

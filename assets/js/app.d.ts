declare module "src/Models/Product" {
    export class Product {
        id: string;
        title: string;
        price: number;
        images: Array<ProductImage>;
        constructor(id: string, title: string, price?: number, images?: Array<ProductImage>);
    }
    export interface ProductImage {
        url: string;
        title: string;
    }
}
declare module "src/Models/ShoppingCart" {
    import { Product } from "src/Models/Product";
    export class ShoppingCart {
        items: Map<string, CartLine>;
        totalPrice: number;
        addProduct(item: Product, quantity?: number, note?: string): void;
        removeProduct(item: Product): void;
    }
    export class CartLine {
        item: Product;
        quantity: number;
        total: number;
        note: string;
        constructor(item: Product, quantity?: number, note?: string);
    }
}
declare module "src/App" {
    import { ShoppingCart } from "src/Models/ShoppingCart";
    import { Product } from "src/Models/Product";
    export class App {
        products: Map<string, Product>;
        shoppingCart: ShoppingCart;
        productsEndpoint: string;
        constructor(products?: Map<string, Product>, shoppingCart?: ShoppingCart, productsEndpoint?: string);
        initialise(): Promise<void>;
        getProducts(): Promise<Map<string, Product>>;
        bindToButtons(): void;
    }
}

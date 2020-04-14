/// <reference types="hogan.js" />
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
declare module "src/Models/View" {
    import { Template } from 'hogan.js';
    export class View {
        element: Element;
        template: Template;
        constructor(parentSelector: string, template: Template);
        update(props: Record<string, boolean | string | number | object>): void;
    }
}
declare module "src/Models/ShoppingCart" {
    import { Product } from "src/Models/Product";
    import { View } from "src/Models/View";
    import { Template } from 'hogan.js';
    export class ShoppingCart {
        lines: Map<string, CartLine>;
        totalPrice: number;
        view: View;
        constructor(domSelector: string, template: Template);
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
    import { Template } from 'hogan.js';
    export class App {
        products: Map<string, Product>;
        shoppingCart: ShoppingCart;
        productsEndpoint: string;
        constructor(templates: Record<string, Template>, productsEndpoint: string);
        initialise(): Promise<void>;
        getProducts(): Promise<Map<string, Product>>;
        bindToButtons(): void;
    }
}
declare const templates: Record<string, any>;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
System.register("src/Models/Product", [], function (exports_1, context_1) {
    "use strict";
    var Product;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Product = /** @class */ (function () {
                function Product(id, title, price, images) {
                    if (price === void 0) { price = 0.0; }
                    if (images === void 0) { images = []; }
                    this.price = 0.0;
                    this.images = [];
                    this.id = id;
                    this.title = title;
                    this.price = price;
                    this.images = images;
                }
                return Product;
            }());
            exports_1("Product", Product);
        }
    };
});
System.register("src/Models/ShoppingCart", [], function (exports_2, context_2) {
    "use strict";
    var ShoppingCart, CartLine;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            ShoppingCart = /** @class */ (function () {
                function ShoppingCart() {
                    this.items = new Map();
                    this.totalPrice = 0.0;
                }
                ShoppingCart.prototype.addProduct = function (item, quantity, note) {
                    if (quantity === void 0) { quantity = 1; }
                    if (note === void 0) { note = ''; }
                    this.items.set(item.id, new CartLine(item, quantity, note));
                    this.totalPrice += item.price;
                };
                ShoppingCart.prototype.removeProduct = function (item) {
                    this.items.delete(item.id);
                    this.totalPrice -= item.price;
                };
                return ShoppingCart;
            }());
            exports_2("ShoppingCart", ShoppingCart);
            CartLine = /** @class */ (function () {
                function CartLine(item, quantity, note) {
                    if (quantity === void 0) { quantity = 0; }
                    if (note === void 0) { note = ''; }
                    this.item = item;
                    this.quantity = quantity;
                    this.note = note;
                    this.total = item.price * quantity;
                }
                return CartLine;
            }());
            exports_2("CartLine", CartLine);
        }
    };
});
System.register("src/App", ["src/Models/ShoppingCart"], function (exports_3, context_3) {
    "use strict";
    var ShoppingCart_1, App;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (ShoppingCart_1_1) {
                ShoppingCart_1 = ShoppingCart_1_1;
            }
        ],
        execute: function () {
            App = /** @class */ (function () {
                function App(products, shoppingCart, productsEndpoint) {
                    if (products === void 0) { products = new Map(); }
                    if (shoppingCart === void 0) { shoppingCart = new ShoppingCart_1.ShoppingCart(); }
                    if (productsEndpoint === void 0) { productsEndpoint = 'http://www.mocky.io/v2/5e94533a3100004b005e300f'; }
                    this.products = products;
                    this.shoppingCart = shoppingCart;
                    this.productsEndpoint = productsEndpoint;
                }
                App.prototype.initialise = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = this;
                                    return [4 /*yield*/, this.getProducts()];
                                case 1:
                                    _a.products = _b.sent();
                                    this.bindToButtons();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                App.prototype.getProducts = function () {
                    return fetch(this.productsEndpoint).then(function (r) { return r.json(); });
                };
                App.prototype.bindToButtons = function () {
                    var _this = this;
                    var _a, _b;
                    var _loop_1 = function (id, product) {
                        (_b = (_a = document
                            .querySelector("[data-product-id=\"" + id + "\"]")) === null || _a === void 0 ? void 0 : _a.querySelector('.add-to-cart')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
                            _this.shoppingCart.addProduct(product);
                        });
                    };
                    for (var _i = 0, _c = Object.entries(this.products); _i < _c.length; _i++) {
                        var _d = _c[_i], id = _d[0], product = _d[1];
                        _loop_1(id, product);
                    }
                };
                return App;
            }());
            exports_3("App", App);
        }
    };
});
System.import('src/App').then(function (module) {
    var app = new module.App();
    app.initialise();
});
//# sourceMappingURL=app.js.map
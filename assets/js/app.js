"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
System.register("src/Models/Product", [], function (exports_1, context_1) {
    "use strict";
    var Product;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Product = /** @class */ (function () {
                function Product(id, name, price, images) {
                    if (price === void 0) { price = 0.0; }
                    if (images === void 0) { images = []; }
                    this.id = id;
                    this.name = name;
                    this.price = price;
                    this.images = images;
                }
                return Product;
            }());
            exports_1("Product", Product);
        }
    };
});
System.register("src/Models/View", [], function (exports_2, context_2) {
    "use strict";
    var View;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            View = /** @class */ (function () {
                function View(parentSelector, template) {
                    this.element = document.querySelector(parentSelector);
                    this.template = template;
                    if (!this.element)
                        throw Error("Couldn't find element for selector '" + parentSelector + "'.");
                    this.element.innerHTML = this.template.render({});
                }
                View.prototype.update = function (props) {
                    this.element.innerHTML = this.template.render(props);
                };
                return View;
            }());
            exports_2("View", View);
        }
    };
});
System.register("src/Models/NumberRounder", [], function (exports_3, context_3) {
    "use strict";
    var NumberRounder;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            exports_3("NumberRounder", NumberRounder = {
                toTwoDecimals: function (n) {
                    return Math.round((n + Number.EPSILON) * 100) / 100;
                },
            });
        }
    };
});
System.register("src/Models/CartLine", ["src/Models/NumberRounder"], function (exports_4, context_4) {
    "use strict";
    var NumberRounder_1, CartLine;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (NumberRounder_1_1) {
                NumberRounder_1 = NumberRounder_1_1;
            }
        ],
        execute: function () {
            CartLine = /** @class */ (function () {
                function CartLine(item, quantity, note) {
                    if (quantity === void 0) { quantity = 1; }
                    if (note === void 0) { note = ''; }
                    this.item = item;
                    this.quantity = quantity;
                    this.note = note;
                }
                Object.defineProperty(CartLine.prototype, "total", {
                    get: function () {
                        return NumberRounder_1.NumberRounder.toTwoDecimals(this.quantity * this.item.price);
                    },
                    enumerable: true,
                    configurable: true
                });
                return CartLine;
            }());
            exports_4("CartLine", CartLine);
        }
    };
});
System.register("src/Models/ShoppingCart", ["src/Models/View", "src/Models/NumberRounder", "src/Models/CartLine"], function (exports_5, context_5) {
    "use strict";
    var View_1, NumberRounder_2, CartLine_1, ShoppingCart;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            },
            function (NumberRounder_2_1) {
                NumberRounder_2 = NumberRounder_2_1;
            },
            function (CartLine_1_1) {
                CartLine_1 = CartLine_1_1;
            }
        ],
        execute: function () {
            ShoppingCart = /** @class */ (function () {
                function ShoppingCart(domSelector, template) {
                    this.lines = new Map();
                    this.view = new View_1.View(domSelector, template);
                    this.view.update({ totalPrice: this.totalPrice });
                }
                Object.defineProperty(ShoppingCart.prototype, "totalPrice", {
                    get: function () {
                        var e_1, _a;
                        var price = 0.0;
                        try {
                            for (var _b = __values(this.lines.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var line = _c.value;
                                price += line.total;
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return NumberRounder_2.NumberRounder.toTwoDecimals(price);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ShoppingCart.prototype, "vm", {
                    get: function () {
                        var e_2, _a;
                        var lines = [];
                        try {
                            for (var _b = __values(this.lines.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var line = _c.value;
                                lines.push({
                                    name: line.item.name,
                                    quantity: line.quantity,
                                    price: line.item.price,
                                });
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        return {
                            totalPrice: this.totalPrice,
                            lines: lines,
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                ShoppingCart.prototype.addProduct = function (item, quantity, note) {
                    if (quantity === void 0) { quantity = 1; }
                    if (note === void 0) { note = ''; }
                    var line;
                    if (this.lines.has(item.id)) {
                        line = this.lines.get(item.id);
                        line.quantity += quantity;
                    }
                    else {
                        line = new CartLine_1.CartLine(item, quantity, note);
                    }
                    this.lines.set(item.id, line);
                    this.view.update(this.vm);
                };
                ShoppingCart.prototype.removeProduct = function (item) {
                    this.lines.delete(item.id);
                    this.view.update(this.vm);
                };
                return ShoppingCart;
            }());
            exports_5("ShoppingCart", ShoppingCart);
        }
    };
});
System.register("src/App", ["src/Models/ShoppingCart"], function (exports_6, context_6) {
    "use strict";
    var ShoppingCart_1, App;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (ShoppingCart_1_1) {
                ShoppingCart_1 = ShoppingCart_1_1;
            }
        ],
        execute: function () {
            App = /** @class */ (function () {
                function App(templates, productsEndpoint) {
                    this.products = new Map();
                    this.shoppingCart = new ShoppingCart_1.ShoppingCart('#shopping-cart', templates['shopping-cart']);
                    this.productsEndpoint = productsEndpoint;
                }
                App.prototype.initialise = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.products = this.getProducts();
                            this.bindToButtons();
                            return [2 /*return*/];
                        });
                    });
                };
                App.prototype.getProducts = function () {
                    var products = new Map();
                    document.querySelectorAll('[data-product-id]').forEach(function (el) {
                        var product = {
                            id: el.dataset.productId,
                            name: el.dataset.productName,
                            price: parseFloat(el.dataset.productPrice || ''),
                            images: [],
                        };
                        if (!product.id || !product.name || !product.price)
                            return;
                        products.set(product.id, product);
                    });
                    return products;
                };
                App.prototype.bindToButtons = function () {
                    var e_3, _a;
                    var _this = this;
                    var _b;
                    var _loop_1 = function (id, product) {
                        var productCard = document.querySelector("[data-product-id=\"" + id + "\"]");
                        (_b = productCard === null || productCard === void 0 ? void 0 : productCard.querySelector('.add-to-cart')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
                            var _a;
                            var quantity = productCard.querySelector('.quantity').value;
                            var note = (_a = productCard.querySelector('.note')) === null || _a === void 0 ? void 0 : _a.textContent;
                            _this.shoppingCart.addProduct(product, parseInt(quantity, 10), note);
                        });
                    };
                    try {
                        for (var _c = __values(this.products.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var _e = __read(_d.value, 2), id = _e[0], product = _e[1];
                            _loop_1(id, product);
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                };
                return App;
            }());
            exports_6("App", App);
        }
    };
});
/* eslint-disable no-undef */
System.import('src/App').then(function (module) {
    window.addEventListener('load', function () {
        var app = new module.App(templates, '/index.json');
        app.initialise();
    });
});
//# sourceMappingURL=app.js.map
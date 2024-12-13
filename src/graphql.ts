
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface SignUpInput {
    email: string;
    password: string;
    roleIds: string[];
}

export interface ProductInput {
    name: string;
    description?: Nullable<string>;
    price: number;
    stock?: Nullable<number>;
    categoryIds?: Nullable<string[]>;
}

export interface BuyInput {
    products: BuyProductInput[];
}

export interface BuyProductInput {
    productId: string;
    quantity: number;
}

export interface IQuery {
    listProducts(page: number, pageSize: number): Nullable<PaginatedProducts> | Promise<Nullable<PaginatedProducts>>;
    searchProductsByCategory(categoryId: string): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;
    myOrders(): Nullable<Nullable<Order>[]> | Promise<Nullable<Nullable<Order>[]>>;
    showClientOrders(clientId: string): Nullable<Nullable<Order>[]> | Promise<Nullable<Nullable<Order>[]>>;
}

export interface IMutation {
    signUp(input: SignUpInput): Nullable<AuthPayload> | Promise<Nullable<AuthPayload>>;
    signIn(email: string, password: string): Nullable<AuthPayload> | Promise<Nullable<AuthPayload>>;
    signOut(): Nullable<boolean> | Promise<Nullable<boolean>>;
    forgotPassword(email: string): Nullable<boolean> | Promise<Nullable<boolean>>;
    resetPassword(token: string, newPassword: string): Nullable<boolean> | Promise<Nullable<boolean>>;
    createProduct(input: ProductInput): Nullable<Product> | Promise<Nullable<Product>>;
    updateProduct(productId: string, input: ProductInput): Nullable<Product> | Promise<Nullable<Product>>;
    deleteProduct(productId: string): Nullable<boolean> | Promise<Nullable<boolean>>;
    disableProduct(productId: string): Nullable<boolean> | Promise<Nullable<boolean>>;
    buyProducts(input: BuyInput): Nullable<Order> | Promise<Nullable<Order>>;
    addProductToCart(productId: string): Nullable<Cart> | Promise<Nullable<Cart>>;
    likeProduct(productId: string): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export interface Product {
    id: string;
    name: string;
    description?: Nullable<string>;
    stock?: Nullable<number>;
    isActive: boolean;
    price: number;
    createdAt: string;
    updatedAt: string;
    images?: Nullable<Nullable<string>[]>;
    categories?: Nullable<Nullable<Category>[]>;
}

export interface PaginatedProducts {
    products?: Nullable<Nullable<Product>[]>;
    total: number;
    page: number;
    pageSize: number;
}

export interface Order {
    id: string;
    client: User;
    products?: Nullable<OrderProduct[]>;
    totalAmount: number;
    status: string;
    createdAt: string;
}

export interface OrderProduct {
    product: Product;
    quantity: number;
}

export interface Cart {
    user: User;
    items?: Nullable<CartItem[]>;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface AuthPayload {
    token: string;
    user: User;
}

export interface User {
    id: string;
    email: string;
    phoneNumber?: Nullable<string>;
    username?: Nullable<string>;
    address?: Nullable<string>;
    verificatedAt?: Nullable<string>;
    createdAt: string;
    updatedAt: string;
    lastLoginAt?: Nullable<string>;
    likedProducts?: Nullable<Nullable<Product>[]>;
    roles?: Nullable<Nullable<Role>[]>;
}

export interface Role {
    id: string;
    name: string;
    description?: Nullable<string>;
}

export interface Category {
    id: string;
    name: string;
    description?: Nullable<string>;
    createdAt: string;
    updatedAt: string;
}

export interface ISubscription {
    stockLowNotification(productId: string): Nullable<StockLowPayload> | Promise<Nullable<StockLowPayload>>;
    passwordChangeNotification(userId: string): Nullable<PasswordChangePayload> | Promise<Nullable<PasswordChangePayload>>;
}

export interface StockLowPayload {
    product: Product;
    user: User;
}

export interface PasswordChangePayload {
    user: User;
}

type Nullable<T> = T | null;

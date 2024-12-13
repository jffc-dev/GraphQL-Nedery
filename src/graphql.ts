
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum ProviderPaymentStatus {
    SUCCEEDED = "SUCCEEDED",
    PROCESSING = "PROCESSING",
    CANCELED = "CANCELED",
    FAILED = "FAILED"
}

export class SignUpInput {
    email: string;
    password: string;
    phoneNumber?: Nullable<string>;
    address?: Nullable<string>;
}

export class LoginInput {
    email: string;
    password: string;
}

export class ResetPasswordInput {
    token: string;
    newPassword: string;
}

export class ForgotPasswordInput {
    email: string;
}

export class CreateProductInput {
    name: string;
    description?: Nullable<string>;
    price: number;
    stock?: Nullable<number>;
    categoryIds?: Nullable<string[]>;
}

export class UpdateProductInput {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    price?: Nullable<number>;
    stock?: Nullable<number>;
    categoryIds?: Nullable<string[]>;
}

export class BuyInput {
    products: BuyProductInput[];
}

export class BuyProductInput {
    productId: string;
    quantity: number;
}

export class CreateRoleInput {
    name: string;
    description?: Nullable<string>;
}

export class UpdateRoleInput {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
}

export class CreateCategoryInput {
    name: string;
    description?: Nullable<string>;
}

export class UpdateCategoryInput {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
}

export class AddProductToCartInput {
    productId: string;
    quantity: number;
}

export abstract class IQuery {
    abstract listAndSearchProducts(page: number, pageSize: number, categoryId?: Nullable<string>): Nullable<PaginatedProducts> | Promise<Nullable<PaginatedProducts>>;

    abstract myOrders(): Nullable<Nullable<Order>[]> | Promise<Nullable<Nullable<Order>[]>>;

    abstract showClientOrders(clientId: string): Nullable<Nullable<Order>[]> | Promise<Nullable<Nullable<Order>[]>>;
}

export abstract class IMutation {
    abstract signUp(input: SignUpInput): Nullable<AuthPayload> | Promise<Nullable<AuthPayload>>;

    abstract signIn(input: LoginInput): Nullable<AuthPayload> | Promise<Nullable<AuthPayload>>;

    abstract signOut(): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract forgotPassword(input: ForgotPasswordInput): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract resetPassword(input: ResetPasswordInput): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract createProduct(input: CreateProductInput): Nullable<Product> | Promise<Nullable<Product>>;

    abstract updateProduct(input: UpdateProductInput): Nullable<Product> | Promise<Nullable<Product>>;

    abstract deleteProduct(id: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract createRole(input: CreateRoleInput): Nullable<Role> | Promise<Nullable<Role>>;

    abstract updateRole(input: UpdateRoleInput): Nullable<Role> | Promise<Nullable<Role>>;

    abstract deleteRole(roleId: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract createCategory(input: CreateCategoryInput): Nullable<Category> | Promise<Nullable<Category>>;

    abstract updateCategory(input: UpdateCategoryInput): Nullable<Category> | Promise<Nullable<Category>>;

    abstract deleteCategory(id: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract buyProducts(input: BuyInput): Nullable<Order> | Promise<Nullable<Order>>;

    abstract addProductToCart(input: AddProductToCartInput): Nullable<CartItem> | Promise<Nullable<CartItem>>;

    abstract likeProduct(productId: string): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export class Product {
    id: string;
    name: string;
    description?: Nullable<string>;
    stock?: Nullable<number>;
    isActive: boolean;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    images?: Nullable<Nullable<string>[]>;
    createdBy: string;
    creator: User;
    categories?: Nullable<Nullable<Category>[]>;
}

export class PaginatedProducts {
    products?: Nullable<Nullable<Product>[]>;
    total: number;
    page: number;
    pageSize: number;
}

export class Order {
    id: string;
    clientId: string;
    totalAmount: number;
    status: string;
    createdAt: Date;
    products?: Nullable<OrderDetail[]>;
    client: User;
    payments: PaymentAttempt[];
}

export class PaymentAttempt {
    id: string;
    orderId: string;
    providerCustomerId: string;
    providerPaymentId: string;
    providerClientSecret: string;
    providerStatus: ProviderPaymentStatus;
    providerAmount: number;
    providerPaymentMethod: string;
    createdAt?: Nullable<Date>;
    updatedAt?: Nullable<Date>;
    order: Order;
}

export class OrderDetail {
    product: Product;
    quantity: number;
}

export class CartItem {
    userId: string;
    productId: string;
    quantity: number;
    createdAt: Date;
    updatedAt?: Nullable<Date>;
    product: Product;
    user: User;
}

export class AuthPayload {
    token: string;
    user: User;
}

export class User {
    id: string;
    email: string;
    phoneNumber?: Nullable<string>;
    address?: Nullable<string>;
    verificatedAt?: Nullable<string>;
    createdAt: Date;
    updatedAt: Date;
    lastLoginAt?: Nullable<string>;
    verificationToken?: Nullable<string>;
    verificationExpiresAt?: Nullable<string>;
    resetPasswordToken?: Nullable<string>;
    resetPasswordExpiresAt?: Nullable<string>;
    likedProducts: Nullable<UserProductLike>[];
    cartProducts: Nullable<CartItem>[];
    roles: Role[];
    createdProducts?: Nullable<Nullable<User>[]>;
    orders: Order[];
}

export class UserProductLike {
    productId: string;
    userId: string;
    createdAt: Date;
    user: User;
    product: Product;
}

export class Role {
    id: string;
    name: string;
    description?: Nullable<string>;
}

export class Category {
    id: string;
    name: string;
    description?: Nullable<string>;
    createdAt: Date;
    updatedAt: Date;
    products: Product[];
}

export abstract class ISubscription {
    abstract stockLowNotification(productId: string): Nullable<StockLowPayload> | Promise<Nullable<StockLowPayload>>;

    abstract passwordChangeNotification(userId: string): Nullable<PasswordChangePayload> | Promise<Nullable<PasswordChangePayload>>;
}

export class StockLowPayload {
    product: Product;
    user: User;
}

export class PasswordChangePayload {
    user: User;
}

type Nullable<T> = T | null;

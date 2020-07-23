import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};



export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
  products?: Maybe<Array<Product>>;
};

export type Customer = {
  __typename?: 'Customer';
  id: Scalars['Int'];
  lastname: Scalars['String'];
  frstname: Scalars['String'];
  orders?: Maybe<Array<Order>>;
};

export type Item = {
  __typename?: 'Item';
  quantity: Scalars['Int'];
  price: Scalars['Float'];
  product: Product;
};

export type ItemInput = {
  quantity: Scalars['Int'];
  price: Scalars['Float'];
  product: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCategory: Category;
  addCustomer: Customer;
  addVendor: Vendor;
  addProduct: Product;
  addOrder: Order;
  updateCategory?: Maybe<Category>;
  updateCustomer?: Maybe<Customer>;
  updateVendor?: Maybe<Vendor>;
  updateProduct?: Maybe<Product>;
  updateOrder?: Maybe<Order>;
  deleteCategory?: Maybe<Category>;
  deleteCustomer?: Maybe<Customer>;
  deleteVendor?: Maybe<Vendor>;
  deleteProduct?: Maybe<Product>;
  deleteOrder?: Maybe<Order>;
};


export type MutationAddCategoryArgs = {
  id: Scalars['Int'];
  name: Scalars['String'];
  products: Array<Maybe<Scalars['Int']>>;
};


export type MutationAddCustomerArgs = {
  id: Scalars['Int'];
  lastname: Scalars['String'];
  frstname: Scalars['String'];
  orders: Array<Maybe<Scalars['Int']>>;
};


export type MutationAddVendorArgs = {
  id: Scalars['Int'];
  name: Scalars['String'];
  products: Array<Maybe<Scalars['Int']>>;
};


export type MutationAddProductArgs = {
  id: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['Float'];
  category: Scalars['Int'];
  vendor: Scalars['Int'];
};


export type MutationAddOrderArgs = {
  id: Scalars['Int'];
  createdAt: Scalars['String'];
  state: Scalars['String'];
  total: Scalars['Float'];
  customer: Scalars['Int'];
  items: Array<Maybe<ItemInput>>;
};


export type MutationUpdateCategoryArgs = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type MutationUpdateCustomerArgs = {
  id?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['String']>;
  frstname?: Maybe<Scalars['String']>;
  orders?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type MutationUpdateVendorArgs = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type MutationUpdateProductArgs = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  category?: Maybe<Scalars['Int']>;
  vendor?: Maybe<Scalars['Int']>;
};


export type MutationUpdateOrderArgs = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  customer?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<ItemInput>>>;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteCustomerArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteVendorArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['Int'];
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['Int'];
  createdAt: Scalars['String'];
  state: Scalars['String'];
  total: Scalars['Float'];
  customer: Scalars['Int'];
  items?: Maybe<Array<Item>>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['Float'];
  category: Category;
  vendor: Vendor;
};

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<Array<Category>>;
  customers?: Maybe<Array<Customer>>;
  vendors?: Maybe<Array<Vendor>>;
  products?: Maybe<Array<Product>>;
  orders?: Maybe<Array<Order>>;
};


export type QueryCategoriesArgs = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  productname?: Maybe<Scalars['String']>;
};


export type QueryCustomersArgs = {
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  frstname?: Maybe<Scalars['String']>;
  orderID?: Maybe<Scalars['Int']>;
};


export type QueryVendorsArgs = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  productname?: Maybe<Scalars['String']>;
};


export type QueryProductsArgs = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  categoryID?: Maybe<Scalars['Int']>;
  vendorID?: Maybe<Scalars['Int']>;
};


export type QueryOrdersArgs = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  customerID?: Maybe<Scalars['Int']>;
  productname?: Maybe<Scalars['String']>;
};

export type Vendor = {
  __typename?: 'Vendor';
  id: Scalars['Int'];
  name: Scalars['String'];
  products: Array<Maybe<Product>>;
};



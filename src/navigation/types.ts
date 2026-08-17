import { Product } from '../types/Product';

export type RootStackParamList = {
  Home: undefined;
  ProductDetails: { product: Product };
  AddProduct: undefined;
  EditProduct: { product: Product };
  Settings: undefined;
};
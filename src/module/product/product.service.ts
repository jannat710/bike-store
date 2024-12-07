import { IProduct } from './product.interface';
import Product from './product.model';

const createProduct = async (productData: IProduct): Promise<IProduct> => {
  const result = await Product.create(productData);
  return result;
};
export const productService = {
  createProduct,
};

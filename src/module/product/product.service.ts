import { IProduct } from './product.interface';
import Product from './product.model';

const createProduct = async (productData: IProduct): Promise<IProduct> => {
  const result = await Product.create(productData);
  return result;
};
const getProduct = async (filter = {}) => {
  return await Product.find(filter);
};

// const getProduct = async () => {
//   const result = await Product.find();
//   return result;
// };

export const productService = {
  createProduct,
  getProduct,
};

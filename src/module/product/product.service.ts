import { IProduct } from './product.interface';
import Product from './product.model';

const createProduct = async (productData: IProduct): Promise<IProduct> => {
  const result = await Product.create(productData);
  return result;
};

const getProduct = async (filter = {}) => {
  const result = await Product.find(filter);
  return result;
};

const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

export const productService = {
  createProduct,
  getProduct,
  getSingleProduct,
};

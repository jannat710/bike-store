import { Request, Response } from 'express';
import Product from './product.model';

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await Product.create(productData);
  res.json({
    message: 'Bike created successfully',
    data: result,
  });
};

export const productController = {
  createProduct,
};

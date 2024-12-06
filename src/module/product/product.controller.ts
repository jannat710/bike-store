import { Request, Response } from 'express';
import Product from './product.model';

const createProduct = async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await Product.create(payload);
  res.json({
    message: 'Bike created successfully',
    data: result,
  });
};

export const productController = {
  createProduct,
};

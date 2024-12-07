import { Request, Response } from 'express';
import { productService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    const result = await productService.createProduct(productData);

    res.status(200).json({
      message: 'Bike created successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Validation failed',
      success: false,
      error: err,
    });
  }
};

export const productController = {
  createProduct,
};

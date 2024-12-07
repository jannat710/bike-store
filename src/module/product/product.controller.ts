import { Request, Response } from 'express';
import { productService } from './product.service';

// Create a Bike
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

//Get All Bikes
const getProduct = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    let filter = {};
    if (searchTerm) {
      filter = {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { brand: { $regex: searchTerm, $options: 'i' } },
          { category: { $regex: searchTerm, $options: 'i' } },
        ],
      };
    }

    const result = await productService.getProduct(filter);
    res.send({
      status: true,
      message: 'Bikes retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong',
      success: false,
      error: err,
    });
  }
};
// const getSingleProduct = async (req: Request, res: Response) => {
//   try {
//     const result = await productService.getProduct();
//     res.send({
//       status: true,
//       message: 'Bikes retrieved successfully',
//       data: result,
//     });
//   } catch (err) {
//     res.status(500).json({
//       message: 'Something went wrong',
//       success: false,
//       error: err,
//     });
//   }
// };

export const productController = {
  createProduct,
  getProduct,
};

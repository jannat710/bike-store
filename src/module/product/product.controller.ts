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
    const error = err as Error;
    res.status(500).json({
      message: 'Validation failed',
      success: false,
      error: err,
      stack: error.stack,
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
      message: 'Bikes retrieved successfully',
      status: true,
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

//Get a Specific Bike
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await productService.getSingleProduct(productId);

    res.send({
      message: 'Bike retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

//Update a Bike
const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const body = req.body;
    const result = await productService.updateProduct(productId, body);

    res.send({
      message: 'Bike updated successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

//Delete a Bike
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    await productService.deleteProduct(productId);

    res.send({
      message: 'Bike deleted successfully',
      status: true,
      data: {},
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

export const productController = {
  createProduct,
  getProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};

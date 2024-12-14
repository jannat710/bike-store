import { Request, Response } from 'express';
import { orderService } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    const result = await orderService.createOrder(orderData);

    res.status(200).json({
      message: 'Order created successfully',
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

export const orderController = {
  createOrder,
};

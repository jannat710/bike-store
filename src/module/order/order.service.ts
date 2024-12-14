import Product from '../product/product.model';
import { IOrder } from './order.interface';
import Order from './order.model';

//Order a Bike
const createOrder = async (orderData: IOrder): Promise<IOrder> => {
  const product = await Product.findById(orderData.product);
  if (!product || product.quantity < orderData.quantity) {
    throw new Error('Insufficient stock');
  }

  const totalPrice = product.price * orderData.quantity;
  const result = await Order.create({
    ...orderData,
    totalPrice: totalPrice,
  });

  product.quantity -= orderData.quantity;
  if (product.quantity === 0) {
    product.inStock = false;
  }
  await product.save();

  return result;
};

// Calculate Revenue
const calculateRevenue = async (): Promise<number> => {
  const [{ totalRevenue } = { totalRevenue: 0 }] = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: '$totalPrice',
        },
      },
    },
  ]);

  return totalRevenue;
};

export const orderService = {
  createOrder,
  calculateRevenue,
};

import mongoose, { model, Schema } from 'mongoose';

const orderSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});

const Order = model('Order', orderSchema);
export default Order;

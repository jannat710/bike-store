import { model, Schema } from 'mongoose';

const orderSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    validate: {
      validator: function (value: string) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
      },
      message: '{VALUE} is not a valid email',
    },
    immutable: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: [true, 'Please provide a valid quantity'],
    min: [1, 'Quantity must be at least 1'],
    validate: {
      validator: function (value: number) {
        return Number.isInteger(value);
      },
      message: 'Quantity must be an integer',
    },
  },
  totalPrice: {
    type: Number,
    required: [true, 'Please provide a valid total price'],
    min: [0, 'Total price must be a positive number'],
    validate: {
      validator: function (value: number) {
        return value > 0;
      },
      message: 'Total price must be greater than 0',
    },
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Order = model('Order', orderSchema);
export default Order;

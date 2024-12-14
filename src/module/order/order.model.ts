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
  },
  totalPrice: {
    type: Number,
    required: [true, 'Please provide a valid number'],
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Order = model('Order', orderSchema);
export default Order;

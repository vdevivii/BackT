import { Schema } from 'mongoose';

export const CartItemSchema = new Schema({
  id: Number,
  title: String,
  price: Number,
  quantity: Number,
  image: String,
});

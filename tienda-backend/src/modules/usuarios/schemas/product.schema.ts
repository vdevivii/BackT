import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  quantity: Number
});

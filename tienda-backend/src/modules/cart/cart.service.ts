import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CartService {
  constructor(@InjectModel('CartItem') private readonly cartModel: Model<any>) {}

  async getCart() {
    return this.cartModel.find();
  }

  async addToCart(item: any) {
    const existing = await this.cartModel.findOne({ id: item.id });
    if (existing) {
      existing.quantity += item.quantity || 1;
      return existing.save();
    }
    return new this.cartModel(item).save();
  }

  async updateQuantity(id: number, quantity: number) {
    return this.cartModel.updateOne({ id }, { $set: { quantity } });
  }

  async removeItem(id: number) {
    return this.cartModel.deleteOne({ id });
  }

  async clearCart() {
    return this.cartModel.deleteMany({});
  }
}

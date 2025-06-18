import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private readonly productModel: Model<any>) {}

  async findAll() {
    return this.productModel.find();
  }

  async findOne(id: number) {
    return this.productModel.findOne({ id });
  }

  async create(product: any) {
    return new this.productModel(product).save();
  }

  async update(id: number, product: any) {
    return this.productModel.updateOne({ id }, { $set: product });
  }

  async delete(id: number) {
    return this.productModel.deleteOne({ id });
  }
}

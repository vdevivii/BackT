import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsuarioService {
  constructor(@InjectModel('Usuario') private readonly usuarioModel: Model<any>) {}

  async findAll() {
    return this.usuarioModel.find();
  }

  async findById(id: number) {
    return this.usuarioModel.findOne({ id });
  }

  async create(usuario: any) {
    return new this.usuarioModel(usuario).save();
  }

  async update(id: number, usuario: any) {
    return this.usuarioModel.updateOne({ id }, { $set: usuario });
  }

  async delete(id: number) {
    return this.usuarioModel.deleteOne({ id });
  }
}

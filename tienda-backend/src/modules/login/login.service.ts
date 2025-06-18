import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LoginService {
  constructor(@InjectModel('Usuario') private readonly usuarioModel: Model<any>) {}

  async login(email: string, password: string) {
    const user = await this.usuarioModel.findOne({ email });
    console.log('User found:', user);
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    return {
      message: 'Login exitoso',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        name: user.name,
        phone: user.phone
      }
    };
  }
}

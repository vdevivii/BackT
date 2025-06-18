import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { CartItemSchema } from '../usuarios/schemas/cart.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'CartItem', schema: CartItemSchema }]),
  ],
  providers: [CartService],
  controllers: [CartController],
})
export class CartModule {}

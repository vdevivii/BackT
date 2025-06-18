import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('api/cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  getCart() {
    return this.cartService.getCart();
  }

  @Post()
  addToCart(@Body() item: any) {
    return this.cartService.addToCart(item);
  }

  @Put(':id')
  updateQuantity(@Param('id') id: string, @Body() body: any) {
    return this.cartService.updateQuantity(Number(id), body.quantity);
  }

  @Delete(':id')
  removeItem(@Param('id') id: string) {
    return this.cartService.removeItem(Number(id));
  }

  @Delete()
  clearCart() {
    return this.cartService.clearCart();
  }
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { CartModule } from './modules/cart/cart.module';
import { ProductsModule } from './modules/product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://back-user:CRwngw08PTFr6@db2.e0cracz.mongodb.net/tienda-tecweb?retryWrites=true&w=majority'),
    UsuariosModule,
    CartModule, 
    ProductsModule,
  ],
})
export class AppModule {}

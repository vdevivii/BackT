import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsuarioService } from './usuarios.service';

@Controller('api/usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.usuarioService.findById(Number(id));
  }

  @Post()
  create(@Body() usuario: any) {
    return this.usuarioService.create(usuario);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() usuario: any) {
    return this.usuarioService.update(Number(id), usuario);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usuarioService.delete(Number(id));
  }
}

/* eslint-disable prettier/prettier */
import {
    Controller,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Get,
  } from '@nestjs/common';
  import { ApiTags } from '@nestjs/swagger';
  import { CreateUserDto } from './dto/create-user-dto'
  import { UpdateUserDto } from './dto/update-user-dto';
  import { UsuarioService } from './usuario.service';
  
  @Controller('usuario')
  @ApiTags('Users')
  export class UsuarioController {
    constructor(private readonly userService: UsuarioService) {}
  
    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
      return this.userService.create(createUserDto);
    }
  
    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
      return this.userService.update({
        where: { id: Number(id) },
        data: { ...updateUserDto },
      });
    }
  
    @Delete(':id')
    deleteUser(@Param('id') id: string) {
      return this.userService.remove(+id);
    }
  
    @Get()
    findAll() {
      return this.userService.findAll();
    }
  
    @Get(':id')
    find(@Param('id') id: string) {
      return this.userService.find(+id);
    }
  }
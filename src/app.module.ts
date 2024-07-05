/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CadastroModule } from './cadastro/cadastro.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [ConfigModule.forRoot(), CadastroModule, UsuarioModule],
})
export class AppModule {}

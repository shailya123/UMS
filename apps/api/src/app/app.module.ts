import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';

import { AuthModule } from './auth/auth.module';

import { Module } from '@nestjs/common';

@Module({
  controllers: [AppController],
  imports: [LoginModule, UserModule, AuthModule],
  providers: [AppService, AuthService, JwtService],
})
export class AppModule {}

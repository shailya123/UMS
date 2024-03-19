import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [],
  controllers: [LoginController],
  providers: [LoginService,AuthService,UserService,JwtService],
})
export class LoginModule {}

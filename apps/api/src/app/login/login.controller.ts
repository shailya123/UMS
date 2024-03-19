import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LoginService } from './login.service';
import { AuthService } from '../auth/auth.service';
import { AppService } from '../app.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';

@Controller('user')
export class LoginController {
  constructor(private readonly _loginService: LoginService,
    private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async getUser(@Request() req) {
    return this.authService.login(req.user);
  }
  @Post('register')
  async addUser(@Body() body:any){
  try{
    const result= await this._loginService.addUser(body);

  }
  catch(err){
    console.log('somethiing went wrong');
    throw err;
  }
  }
}

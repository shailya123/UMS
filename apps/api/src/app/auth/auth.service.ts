import { ForbiddenException, Injectable } from '@nestjs/common';
import { Message } from '@shop-mart/api-interfaces';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly _userService: UserService,
    private readonly _jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this._userService.findOne(username,password);
    if (user) return user;
    return new ForbiddenException();
  }

  async login(user: any) {
    if(user&&user.length>0){
    const payload = { name: user.UserName, sub: user.userID };
    return { access_token: this._jwtService.sign(payload,{secret:'SECRET'}) ,userDetails:user};}
  }
}

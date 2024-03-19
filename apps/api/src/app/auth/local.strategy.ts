import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private _authService: AuthService) {
    super();
  }
  async validate(username: string, password: string) {
    const user = await this._authService.validateUser(username, password);
    if (!user) {
      return new UnauthorizedException();
    }
    return user;
  }
}

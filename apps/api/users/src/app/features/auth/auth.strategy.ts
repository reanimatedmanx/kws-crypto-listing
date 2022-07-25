import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserJwtPayload } from '../../shared/interfaces';
import { UsersService } from '../users/users.service';
import { User } from '@prisma/client';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
  constructor(private users: UsersService, configService: ConfigService) {
    super({
      secretOrKey: configService.get('AUTH_JWT_SECRET'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: UserJwtPayload): Promise<User> {
    const { email } = payload;
    const user = await this.users.findOne({ email });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}

import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiTags } from '@nestjs/swagger';
import { generateHash } from '../../utils/scrypt';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private users: UsersService, private jwtService: JwtService) {}

  @Post('register')
  async register(@Body() dto: RegisterDTO) {
    // Try to search for an existing user with this email.
    const existingUser = await this.users.findOne({
      email: dto.email,
    });

    if (existingUser) {
      throw new HttpException(
        'User with this email already exist.',
        HttpStatus.CONFLICT
      );
    }

    // All good, create a new user.
    const salt = process.env.AUTH_SALT_SECRET;
    const hash = await generateHash(dto.password, salt);

    await this.users.create({
      email: dto.email,
      password: hash,
    });

    return { message: `User '${dto.email}' created.` };
  }

  @Post('login')
  async login(@Body() dto: LoginDTO) {
    // Try to search for an existing user with this email/password combination.
    const existingUser = await this.users.findByEmailAndMatchingPassword({
      email: dto.email,
      password: dto.password,
    });

    if (!existingUser) {
      throw new UnauthorizedException('Incorrect email/password.');
    }

    // User exists, create a JWT access token for him.
    const accessToken = await this.jwtService.signAsync({
      email: dto.email,
    });

    return { accessToken };
  }

  @Get('session-verify')
  async sessionVerify() {
    console.log('login()');

    return { message: 'OK' };
  }
}

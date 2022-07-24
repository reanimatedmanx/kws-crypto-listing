import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { generateHash } from '../../utils/scrypt';
import { RegisterDTO } from './dto/register.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private users: UsersService) {}

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
  async login() {
    console.log('login()');

    return { message: 'OK' };
  }

  @Get('session-verify')
  async sessionVerify() {
    console.log('login()');

    return { message: 'OK' };
  }
}

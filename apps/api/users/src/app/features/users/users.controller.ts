import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  @Post('register')
  async register() {
    console.log('register()');

    return { message: 'OK' };
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

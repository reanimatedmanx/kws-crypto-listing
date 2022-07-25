import { forwardRef, Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthStrategy } from './auth.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [AuthStrategy],
  controllers: [],
  exports: [AuthStrategy, PassportModule.register({ defaultStrategy: 'jwt' })],
})
export class AuthModule {}

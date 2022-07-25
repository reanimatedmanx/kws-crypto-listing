import { Global, Module } from '@nestjs/common';
import { JwtModule } from './jwt/jwt.module';

@Global()
@Module({
  imports: [
    JwtModule,
  ],
  providers: [],
  exports: [JwtModule],
})
export class CoreModule {}

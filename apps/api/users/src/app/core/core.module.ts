import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from './jwt/jwt.module';
import { PrismaModule } from './prisma/prisma.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env.dev', '.env', '.env.prod'],
    }),
    JwtModule,
    PrismaModule,
  ],
  providers: [],
  exports: [JwtModule, PrismaModule, ConfigModule],
})
export class CoreModule {}

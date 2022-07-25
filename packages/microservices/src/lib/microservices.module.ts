import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './modules/prisma/prisma.module';

@Global()
@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env.test', '.env', '.env.prod'],
    }),
  ],
  controllers: [],
  providers: [],
  exports: [PrismaModule, ConfigModule],
})
export class MicroservicesModule {}

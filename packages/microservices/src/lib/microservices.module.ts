import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './modules/prisma/prisma.module';

const publicModules = [
  PrismaModule,
  ConfigModule.forRoot({
    envFilePath: ['.env.development', '.env.test', '.env', '.env.prod'],
  }),
];
@Global()
@Module({
  imports: [...publicModules],
  controllers: [],
  providers: [],
  exports: [...publicModules],
})
export class MicroservicesModule {}

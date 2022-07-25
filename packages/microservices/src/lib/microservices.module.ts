import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from './modules/prisma/prisma.module';

const publicModules = [
  ConfigModule.forRoot({
    isGlobal: true
  }),
  PrismaModule,
];
@Global()
@Module({
  imports: [...publicModules],
  controllers: [],
  providers: [ConfigService],
  exports: [...publicModules],
})
export class MicroservicesModule {}

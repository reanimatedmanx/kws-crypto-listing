import { TasksService } from './tasks.service';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MicroservicesModule } from '@kwc/microservices';
import { ScheduleModule } from '@nestjs/schedule';
import { InstrumentsModule } from '../instruments/instruments.module';

@Module({
  imports: [MicroservicesModule, ScheduleModule.forRoot(), InstrumentsModule],
  controllers: [],
  providers: [TasksService, ConfigService],
})
export class TasksModule {}

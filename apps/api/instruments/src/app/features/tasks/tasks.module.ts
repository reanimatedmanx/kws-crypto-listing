import { TasksService } from './tasks.service';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MicroservicesModule } from '@kwc/microservices';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [MicroservicesModule, ScheduleModule.forRoot()],
  controllers: [],
  providers: [TasksService, ConfigService],
})
export class TasksModule {}

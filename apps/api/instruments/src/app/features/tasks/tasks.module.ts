import { TasksService } from './tasks.service';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MicroservicesModule } from '@kwc/microservices';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [MicroservicesModule, HttpModule, ScheduleModule.forRoot()],
  controllers: [],
  providers: [TasksService, ConfigService],
})
export class TasksModule {}

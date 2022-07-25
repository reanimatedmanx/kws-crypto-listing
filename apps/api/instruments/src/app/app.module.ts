import { TasksModule } from './features/tasks/tasks.module';
import { InstrumentsModule } from './features/instruments/instruments.module';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MicroservicesModule } from '@kwc/microservices';

@Module({
  imports: [MicroservicesModule, TasksModule, InstrumentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

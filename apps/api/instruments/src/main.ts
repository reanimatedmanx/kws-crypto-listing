import { AppModule } from './app/app.module';
import { bootstrap } from '@kwc/microservices';

bootstrap('Instruments API', {
  appModule: AppModule,
  port: +process.env.PORT || 3333,
  description: 'API responsible for storing/updating and listing instruments.',
  globalPrefix: 'api',
  version: process.env.API_VERSION,
});

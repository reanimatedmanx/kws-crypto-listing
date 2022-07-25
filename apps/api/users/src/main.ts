import { AppModule } from './app/app.module';
import { bootstrap } from '@kwc/microservices';

bootstrap('Users API', {
  appModule: AppModule,
  port: +process.env.PORT || 3334,
  description: 'API responsible for creating and authenticating users.',
  globalPrefix: 'api',
  version: process.env.API_VERSION,
});

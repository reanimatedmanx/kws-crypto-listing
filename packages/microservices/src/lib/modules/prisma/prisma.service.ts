import {
  INestApplication,
  Injectable,
  OnModuleInit,
  Logger,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    Logger.log('Attempting to connect to DB via Prisma.');

    try {
      await this.$connect();
      Logger.log(`👍 Successfully connected to DB`);
    } catch (err) {
      Logger.error(
        '[FATAL] Something unexpected occured when attempting to connect to Prisma...',
        err
      );

      process.exit(1);
    }
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}

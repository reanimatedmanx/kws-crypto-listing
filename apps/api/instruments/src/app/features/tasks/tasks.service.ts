import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron } from '@nestjs/schedule';

/**
 * A barebones task service.
 * A much more sophisticated way of implementing this would be to make it unaware of what it should execute to make it trully generic.
 */
@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private configService: ConfigService) {}

  @Cron('*/5 * * * * *')
  async handleFetchCoins() {
    const uri = this.configService.get('API_EXTERNAL_COINGECKO');

    // TODO Add a queue (ex bull) to avoid race conditions
    this.logger.debug(`Fetching ${uri}`);
  }
}

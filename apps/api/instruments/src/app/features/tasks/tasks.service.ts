import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
/**
 * A barebones task service.
 * A much more sophisticated way of implementing this would be to make it unaware of what it should execute to make it trully generic.
 */
@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService
  ) {}

  @Cron('*/5 * * * * *')
  async handleFetchCoins() {
    const startTime = Date.now();
    const uri = this.configService.get('API_EXTERNAL_COINGECKO');

    let shouldUpdateDb = false;

    try {
      this.logger.debug(`Fetching ${uri}...`);

      const stream$ = this.httpService.get(uri);
      const res = await firstValueFrom(stream$);
      const endTime = Date.now();
      const totalTimeMs = endTime - startTime;
      shouldUpdateDb = !!res.data.length;

      this.logger.log(
        `Fetched ${res.data.length} entries successfully in ${totalTimeMs}ms.`
      );
    } catch (err) {
      this.logger.debug(`Fetching ${uri} failed. Skipping update.`);
      this.logger.error(err);
    }

    if (shouldUpdateDb) {
      // TODO the DB update goes here.
    }
  }
}

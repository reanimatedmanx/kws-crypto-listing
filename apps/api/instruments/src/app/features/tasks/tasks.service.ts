import { Injectable, Logger } from '@nestjs/common';

import { Cron } from '@nestjs/schedule';
import { CoinGeckoApiService } from '../instruments/coin-gecko-api.service';
import { InstrumentsService } from '../instruments/instruments.service';
/**
 * A barebones task service.
 * A much more sophisticated way of implementing this would be to make it unaware of what it should execute to make it trully generic.
 */
@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(
    private readonly coinGeckoApi: CoinGeckoApiService,
    private readonly instruments: InstrumentsService
  ) {}

  @Cron('*/5 * * * * *')
  async handleFetchCoins() {
    const startTime = Date.now();

    const res = await this.coinGeckoApi.fetch();

    if (!res.data.length) {
      this.logger.log(
        `Empty data received from ${CoinGeckoApiService.name}.fetch(),
         no need to insert/replace data in the DB.`
      );
      return;
    }

    try {
      await this.instruments.insertBulk(res.data);
      const totalTimeMs = Date.now() - startTime;
      this.logger.log(
        `Updated ${res.data.length} entries successfully in ${totalTimeMs}ms.`
      );
    } catch (err) {
      this.logger.error(
        `Something went wrong while bulk inserting instruments data.`
      );
      this.logger.error(err);
    }
  }
}

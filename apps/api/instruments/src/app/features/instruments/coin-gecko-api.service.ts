import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Instrument } from '@prisma/client';
import { HttpService } from '@nestjs/axios';
import { CoinProxyInterface } from './interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CoinGeckoApiService {
  private readonly logger = new Logger(CoinGeckoApiService.name);

  constructor(
    private readonly config: ConfigService,
    private readonly http: HttpService
  ) {}

  /**
   * Maps a CoinProxyInterface with internal Partial<Instrument>.
   */
  private static dataTransformer = (dataRaw: string): Partial<Instrument>[] => {
    let data: CoinProxyInterface[];

    try {
      data = JSON.parse(dataRaw);
    } catch (err) {
      Logger.error('Something went wrong when parsing JSON.');
      Logger.error(err);
      return [];
    }

    return data.map((proxy) => ({
      instrument_symbol: proxy.symbol,
      instrument_name: proxy.name,
      usd_price: proxy.market_data?.current_price?.['usd'],
      created_at: proxy.last_updated,
      updated_at: proxy.last_updated,
    }));
  };

  async fetch() {
    const uri: string = this.config.get('API_EXTERNAL_COINGECKO');

    try {
      this.logger.debug(`Fetching ${uri}...`);

      const stream$ = this.http.get<Instrument[]>(uri, {
        transformResponse: CoinGeckoApiService.dataTransformer,
      });
      return await firstValueFrom(stream$);
    } catch (err) {
      this.logger.error(`Fetching ${uri} failed.`);
      this.logger.error(err);
    }
  }
}

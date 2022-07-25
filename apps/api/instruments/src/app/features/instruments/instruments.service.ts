import { PrismaService } from '@kwc/microservices';
import { Injectable, Logger } from '@nestjs/common';
import { Instrument } from '@prisma/client';
import { RawSearchParams } from './models';

@Injectable()
export class InstrumentsService {
  constructor(private prisma: PrismaService) {}

  async findOneByInstrumentSymbol(instrumentSymbol: string): Promise<Instrument | null> {
    return this.prisma.instrument.findUnique({
      where: {
        instrument_symbol: instrumentSymbol,
      },
    });
  }

  async findAll({ take, skip }: RawSearchParams): Promise<Instrument[] | null> {
    return this.prisma.instrument.findMany({
      take,
      skip,
    });
  }

  async insertBulk(data: Partial<Instrument>[]): Promise<boolean | never> {
    const operations = data.map((obj) => {
      return this.prisma
        .$executeRaw`INSERT OR REPLACE INTO Instrument (instrument_name, instrument_symbol, usd_price, created_at, updated_at) VALUES (${obj.instrument_name}, ${obj.instrument_symbol}, ${obj.usd_price}, ${obj.updated_at}, ${obj.updated_at})`;
    });

    try {
      await this.prisma.$transaction(operations);
      return true;
    } catch (err) {
      Logger.error('[FATAL] Instrument transaction failed');
      throw err;
    }
  }
}

import { PrismaService } from '@kwc/microservices';
import { Injectable } from '@nestjs/common';
import { Instrument } from '@prisma/client';
import { RawSearchParams } from './models';

@Injectable()
export class InstrumentsService {
  constructor(private prisma: PrismaService) {}

  async findAll({ take, skip }: RawSearchParams): Promise<Instrument[] | null> {
    const searchParams = {
      take,
      skip,
    };

    return this.prisma.instrument.findMany({
      orderBy: {
        instrument_name: 'desc',
      },
      ...searchParams,
    });
  }
}

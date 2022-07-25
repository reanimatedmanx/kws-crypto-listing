import { InstrumentsController } from './instruments.controller';
import { InstrumentsService } from './instruments.service';
import { Module } from '@nestjs/common';
import { CoinGeckoApiService } from './coin-gecko-api.service';
import { HttpModule } from '@nestjs/axios'
@Module({
  imports: [HttpModule],
  controllers: [InstrumentsController],
  providers: [InstrumentsService, CoinGeckoApiService],
  exports: [InstrumentsService, CoinGeckoApiService],
})
export class InstrumentsModule {}

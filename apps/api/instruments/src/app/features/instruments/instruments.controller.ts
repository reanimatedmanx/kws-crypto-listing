import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { InstrumentsService } from './instruments.service';
import { FindAllQueryDTO } from './dto';

@ApiTags('instruments')
@Controller('instruments')
export class InstrumentsController {
  constructor(private instruments: InstrumentsService) {}

  @Get()
  @ApiOperation({ summary: 'List all instruments grabbed from CoinGecko API' })
  async findAll(@Query() query?: FindAllQueryDTO) {
    // TODO Probably extract as a pagination pipe ;)
    const page = query.page || 1;
    const take = query.size || 1000;
    const skip = (page - 1) * take;

    return this.instruments.findAll({
      take,
      skip,
    });
  }
}

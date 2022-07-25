import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { InstrumentsService } from './instruments.service';
import { FindAllInstrumentsQueryDTO } from './dto';

@ApiTags('instruments')
@Controller('instruments')
export class InstrumentsController {
  constructor(private instruments: InstrumentsService) {}

  @Get()
  @ApiOperation({ summary: 'List all instruments from internal DB.' })
  async findAll(@Query() query?: FindAllInstrumentsQueryDTO) {
    // TODO Probably extract as a pagination pipe 😭 ;)
    const page = query.page || 1;
    const take = query.size || 1000;
    const skip = (page - 1) * take;

    return this.instruments.findAll({
      take,
      skip,
    });
  }

  @Get(':instrument_symbol')
  @ApiOperation({ summary: 'Get a single instrument from internal DB.' })
  async findOne(@Param('instrument_symbol') instrumentSymbol: string) {
    const entry = await this.instruments.findOneByInstrumentSymbol(
      instrumentSymbol
    );

    if (!entry) {
      throw new HttpException(
        {
          message: `Instrument with 'instrument_symbol' of ${instrumentSymbol} is not found`,
        },
        HttpStatus.NOT_FOUND
      );
    }

    return this.instruments.findOneByInstrumentSymbol(instrumentSymbol);
  }
}

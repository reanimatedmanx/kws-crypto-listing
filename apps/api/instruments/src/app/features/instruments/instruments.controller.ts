import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindAllInstrumentsDTO } from './dto';
import { InstrumentsService } from './instruments.service';

@ApiTags('instruments')
@Controller('instruments')
export class InstrumentsController {
  constructor(private instruments: InstrumentsService) {}

  @Get('')
  async findAll(@Query() query?: FindAllInstrumentsDTO) {
    const page = query.page || 1;
    const take = query.limit || 100;
    const skip = (page - 1) * take;

    return this.instruments.findAll({
      take,
      skip,
    });
  }
}

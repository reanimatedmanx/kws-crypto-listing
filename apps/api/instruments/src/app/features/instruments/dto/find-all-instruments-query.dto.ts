import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class FindAllInstrumentsQueryDTO {
  @ApiProperty({
    required: false,
    description: 'Page number starting from 1.',
    default: 1,
    type: Number,
  })
  @Transform(({ value }) => +value)
  @IsNumber()
  @IsOptional()
  page: number;

  @ApiProperty({
    required: false,
    description: 'How many entries to show per page.',
    default: 1000,
    type: Number,
  })
  @Transform(({ value }) => +value)
  @IsNumber()
  @IsOptional()
  size: number;
}

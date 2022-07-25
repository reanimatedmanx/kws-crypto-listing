import { ApiProperty } from "@nestjs/swagger";

export class FindAllInstrumentsDTO {
    @ApiProperty({
        required: false,
        default: 1
    })
    page?: number;

    @ApiProperty({
        required: false,
        default: 100
    })
    limit?: number;
}
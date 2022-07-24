import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

const SPECIAL_CHARACTERS = '!@#$%^&*()\\-__+.';

export class RegisterDTO {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    example: 'test@example.com',
  })
  public email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(24)
  // Lowercase letters
  @Matches(/(?=(.*[a-z]){3,})/, {
    message: `password must have at least 3 lowercase letters`,
  })
  // Uppercase letters
  @Matches(/(?=(.*[A-Z]){2,})/, {
    message: `password must have at least 2 uppercase letters`,
  })
  // Numbers
  @Matches(/(?=(.*[0-9]){2,})/, {
    message: `password must have at least 2 numbers`,
  })
  // Special characters
  @Matches(new RegExp(`(?=(.*[${SPECIAL_CHARACTERS}]){1,})`), {
    message: `password must have at least 1 special character from ${SPECIAL_CHARACTERS}`,
  })
  @ApiProperty({
    example: '37os8vVOnZ#e',
  })
  public password: string;
}

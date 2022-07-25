import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule as JWT, JwtService } from '@nestjs/jwt';

const jwtFactory = {
  useFactory: async (configService: ConfigService) => {
    return {
      secret: configService.get('AUTH_JWT_SECRET'),
      signOptions: {
        expiresIn: configService.get('AUTH_JWT_EXP'),
      },
    }
  }, 
  imports: [],
  inject: [ConfigService],
};

/**
 * A wrapper around original @nestjs/jwt configured based on project requirements.
 */
@Module({
  imports: [JWT.registerAsync(jwtFactory)],
  providers: [ConfigService, JwtService],
  exports: [ConfigService, JWT.registerAsync(jwtFactory)],
})
export class JwtModule {}

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
    };
  },
  imports: [],
  inject: [ConfigService],
};

const publicModules = [
  JWT.registerAsync(jwtFactory),
];

/**
 * A wrapper around original @nestjs/jwt configured based on project requirements.
 */
@Module({
  imports: [...publicModules],
  providers: [ConfigService, JwtService],
  exports: [...publicModules],
})
export class JwtModule {}

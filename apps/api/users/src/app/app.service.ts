import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { name: string; version: string } {
    return { name: 'Users API', version: process.env.API_VERSION };
  }
}

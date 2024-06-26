import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { config } from './app.config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [config] })],
  controllers: [],
  providers: [],
})
export class AppModule {}

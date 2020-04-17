import { IndexController } from './application/controllers/index.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [IndexController],
  providers: [],
})
export class AppModule {}

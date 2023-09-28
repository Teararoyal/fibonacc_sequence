import { Controller, Get, Param, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':memberCount')
  getFibonacciSequence(@Param('memberCount') memberCount: number) {
   
    if (memberCount < 1 || memberCount > 100) {
      throw new BadRequestException('รับ input member count เฉพาะ 1-100.');
    }

    return this.appService.getFibonacciSequence(memberCount);    
  }
}

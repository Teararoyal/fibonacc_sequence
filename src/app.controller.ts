import { Controller, Get, Param, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':countingLength')
  getFibonacciSequence(@Param('countingLength') countingLength: number) {
   
    if (countingLength < 1 || countingLength > 100) {
      throw new BadRequestException('รับ input member count เฉพาะ 1-100.');
    }

    return this.appService.getFibonacciSequence(countingLength);    
  }
}

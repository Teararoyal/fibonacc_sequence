import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getFibonacciSequence(countingLength: number): any {
    
    const sequence = [0, 1];
    let total = 1;
    for (let i = 2; i < countingLength; i++) {
      const nextValue = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextValue);
      total += nextValue;
    }

    return {
      'member-count': countingLength,
      sequence,
      total,
    };
  }
}

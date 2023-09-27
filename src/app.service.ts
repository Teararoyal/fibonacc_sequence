import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getFibonacciSequence(memberCount: number): any {
    const sequence = [1];
    let total= 1;

    if (memberCount > 1) {
      sequence.push(1);
      total = 2;
    }

    for (let i = 2; i < memberCount; i++) {
      const nextValue = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextValue);
      total += nextValue;
    }

    return {
      'member-count': memberCount,
      sequence,
      total,
    };
  }
}

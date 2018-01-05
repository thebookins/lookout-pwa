import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const now = Date.now();

    const glucose = [
      { readDate: new Date(now), glucose: 100 },
      { readDate: new Date(now - 5*60*1000), glucose: 101 },
      { readDate: new Date(now - 10*60*1000), glucose: 102 }
    ];
    return {glucose};
  }
}

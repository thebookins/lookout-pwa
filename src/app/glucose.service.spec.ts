import { TestBed, inject } from '@angular/core/testing';

import { GlucoseService } from './glucose.service';

describe('GlucoseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlucoseService]
    });
  });

  it('should be created', inject([GlucoseService], (service: GlucoseService) => {
    expect(service).toBeTruthy();
  }));
});

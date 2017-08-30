import { TestBed, inject } from '@angular/core/testing';

import { AemService } from './aem.service';

describe('AemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AemService]
    });
  });

  it('should be created', inject([AemService], (service: AemService) => {
    expect(service).toBeTruthy();
  }));
});

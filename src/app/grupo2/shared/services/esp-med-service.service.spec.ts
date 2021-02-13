import { TestBed } from '@angular/core/testing';

import { EspMedServiceService } from './esp-med-service.service';

describe('EspMedServiceService', () => {
  let service: EspMedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspMedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

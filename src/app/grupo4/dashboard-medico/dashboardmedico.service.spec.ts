import { TestBed } from '@angular/core/testing';

import { DashboardmedicoService } from './dashboardmedico.service';

describe('DashboardmedicoService', () => {
  let service: DashboardmedicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardmedicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

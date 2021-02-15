import { TestBed } from '@angular/core/testing';

import { LoginmedicoService } from './loginmedico.service';

describe('LoginmedicoService', () => {
  let service: LoginmedicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginmedicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

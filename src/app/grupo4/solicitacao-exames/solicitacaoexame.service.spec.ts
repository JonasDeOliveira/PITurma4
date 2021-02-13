import { TestBed } from '@angular/core/testing';

import { SolicitacaoexameService } from './solicitacaoexame.service';

describe('SolicitacaoexameService', () => {
  let service: SolicitacaoexameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitacaoexameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

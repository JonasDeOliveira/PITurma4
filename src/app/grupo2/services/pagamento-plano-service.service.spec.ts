import { TestBed } from '@angular/core/testing';

import { PagamentoPlanoServiceService } from './pagamento-plano-service.service';

describe('PagamentoPlanoServiceService', () => {
  let service: PagamentoPlanoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagamentoPlanoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PagamentoCartaoServiceService } from './pagamento-cartao-service.service';

describe('PagamentoCartaoServiceService', () => {
  let service: PagamentoCartaoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagamentoCartaoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

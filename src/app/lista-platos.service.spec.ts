import { TestBed } from '@angular/core/testing';

import { ListaPlatosService } from './lista-platos.service';

describe('ListaPlatosService', () => {
  let service: ListaPlatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPlatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

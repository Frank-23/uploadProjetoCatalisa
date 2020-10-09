import { TestBed } from '@angular/core/testing';

import { GerenciarCovidService } from './gerenciar-covid.service';

describe('GerenciarCovidService', () => {
  let service: GerenciarCovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciarCovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

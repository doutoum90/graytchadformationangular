import { TestBed } from '@angular/core/testing';

import { RecuperationDataService } from './recuperation-data.service';

describe('RecuperationDataService', () => {
  let service: RecuperationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecuperationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

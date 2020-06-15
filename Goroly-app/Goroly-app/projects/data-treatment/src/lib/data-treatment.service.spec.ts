import { TestBed } from '@angular/core/testing';

import { DataTreatmentService } from './data-treatment.service';

describe('DataTreatmentService', () => {
  let service: DataTreatmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTreatmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

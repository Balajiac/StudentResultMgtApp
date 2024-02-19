import { TestBed } from '@angular/core/testing';

import { StudentResultService } from './student-result.service';

describe('StudentResultService', () => {
  let service: StudentResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

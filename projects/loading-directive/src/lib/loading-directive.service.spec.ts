import { TestBed } from '@angular/core/testing';

import { LoadingDirectiveService } from './loading-directive.service';

describe('LoadingDirectiveService', () => {
  let service: LoadingDirectiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingDirectiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

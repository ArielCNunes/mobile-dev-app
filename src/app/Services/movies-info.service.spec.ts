import { TestBed } from '@angular/core/testing';

import { MoviesInfoService } from './movies-info.service';

describe('MoviesInfoService', () => {
  let service: MoviesInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

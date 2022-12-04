import { TestBed } from '@angular/core/testing';

import { GifListService } from './gif-list.service';

describe('GifListService', () => {
  let service: GifListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

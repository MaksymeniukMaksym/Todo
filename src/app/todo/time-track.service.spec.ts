import { TestBed } from '@angular/core/testing';

import { TimeTrackService } from './time-track.service';

describe('TimeTrackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeTrackService = TestBed.get(TimeTrackService);
    expect(service).toBeTruthy();
  });
});

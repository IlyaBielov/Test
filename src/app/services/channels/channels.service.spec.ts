import { TestBed } from '@angular/core/testing';

import { ChannelsService } from './channels.service';

describe('ChanelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChannelsService = TestBed.get(ChannelsService);
    expect(service).toBeTruthy();
  });
});

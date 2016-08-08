import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { UnlvOeLocalData } from './unlv-oe-local-data';

describe('UnlvOeLocalData Service', () => {
  beforeEachProviders(() => [UnlvOeLocalData]);

  it('should ...',
      inject([UnlvOeLocalData], (service: UnlvOeLocalData) => {
    expect(service).toBeTruthy();
  }));
});

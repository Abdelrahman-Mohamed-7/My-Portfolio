import { TestBed } from '@angular/core/testing';

import { StaticProjects } from './static-projects';

describe('StaticProjects', () => {
  let service: StaticProjects;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticProjects);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

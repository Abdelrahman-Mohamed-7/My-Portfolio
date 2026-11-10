import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbdelrahmanCv } from './abdelrahman-cv';

describe('AbdelrahmanCv', () => {
  let component: AbdelrahmanCv;
  let fixture: ComponentFixture<AbdelrahmanCv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbdelrahmanCv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbdelrahmanCv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

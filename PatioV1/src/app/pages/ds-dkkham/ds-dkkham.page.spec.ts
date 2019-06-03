import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsDkkhamPage } from './ds-dkkham.page';

describe('DsDkkhamPage', () => {
  let component: DsDkkhamPage;
  let fixture: ComponentFixture<DsDkkhamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsDkkhamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsDkkhamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

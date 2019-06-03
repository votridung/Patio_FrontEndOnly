import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyLichHenPage } from './quan-ly-lich-hen.page';

describe('QuanLyLichHenPage', () => {
  let component: QuanLyLichHenPage;
  let fixture: ComponentFixture<QuanLyLichHenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyLichHenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyLichHenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

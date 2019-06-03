import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiemTraThongTinPage } from './kiem-tra-thong-tin.page';

describe('KiemTraThongTinPage', () => {
  let component: KiemTraThongTinPage;
  let fixture: ComponentFixture<KiemTraThongTinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiemTraThongTinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiemTraThongTinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

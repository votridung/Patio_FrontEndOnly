import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XacNhanThongTinPage } from './xac-nhan-thong-tin.page';

describe('XacNhanThongTinPage', () => {
  let component: XacNhanThongTinPage;
  let fixture: ComponentFixture<XacNhanThongTinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XacNhanThongTinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XacNhanThongTinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

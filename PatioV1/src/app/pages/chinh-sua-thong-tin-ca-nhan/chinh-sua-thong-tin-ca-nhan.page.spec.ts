import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhSuaThongTinCaNhanPage } from './chinh-sua-thong-tin-ca-nhan.page';

describe('ChinhSuaThongTinCaNhanPage', () => {
  let component: ChinhSuaThongTinCaNhanPage;
  let fixture: ComponentFixture<ChinhSuaThongTinCaNhanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinhSuaThongTinCaNhanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinhSuaThongTinCaNhanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangKyBacSiKhamPage } from './dang-ky-bac-si-kham.page';

describe('DangKyBacSiKhamPage', () => {
  let component: DangKyBacSiKhamPage;
  let fixture: ComponentFixture<DangKyBacSiKhamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangKyBacSiKhamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangKyBacSiKhamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

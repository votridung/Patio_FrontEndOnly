import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangKyKhamPage } from './dang-ky-kham.page';

describe('DangKyKhamPage', () => {
  let component: DangKyKhamPage;
  let fixture: ComponentFixture<DangKyKhamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangKyKhamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangKyKhamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

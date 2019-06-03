import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangKyTheoBacSiPage } from './dang-ky-theo-bac-si.page';

describe('DangKyTheoBacSiPage', () => {
  let component: DangKyTheoBacSiPage;
  let fixture: ComponentFixture<DangKyTheoBacSiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangKyTheoBacSiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangKyTheoBacSiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

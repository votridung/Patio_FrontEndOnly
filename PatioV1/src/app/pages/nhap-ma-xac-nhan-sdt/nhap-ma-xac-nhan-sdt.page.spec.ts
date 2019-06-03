import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhapMaXacNhanSdtPage } from './nhap-ma-xac-nhan-sdt.page';

describe('NhapMaXacNhanSdtPage', () => {
  let component: NhapMaXacNhanSdtPage;
  let fixture: ComponentFixture<NhapMaXacNhanSdtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhapMaXacNhanSdtPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhapMaXacNhanSdtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

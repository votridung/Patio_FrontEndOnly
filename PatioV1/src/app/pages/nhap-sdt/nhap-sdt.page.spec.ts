import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhapSdtPage } from './nhap-sdt.page';

describe('NhapSdtPage', () => {
  let component: NhapSdtPage;
  let fixture: ComponentFixture<NhapSdtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhapSdtPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhapSdtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

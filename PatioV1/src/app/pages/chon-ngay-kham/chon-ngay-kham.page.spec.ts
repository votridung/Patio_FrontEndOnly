import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChonNgayKhamPage } from './chon-ngay-kham.page';

describe('ChonNgayKhamPage', () => {
  let component: ChonNgayKhamPage;
  let fixture: ComponentFixture<ChonNgayKhamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChonNgayKhamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChonNgayKhamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

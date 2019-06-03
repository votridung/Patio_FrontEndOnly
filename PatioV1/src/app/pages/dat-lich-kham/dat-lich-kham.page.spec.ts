import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatLichKhamPage } from './dat-lich-kham.page';

describe('DatLichKhamPage', () => {
  let component: DatLichKhamPage;
  let fixture: ComponentFixture<DatLichKhamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatLichKhamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatLichKhamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

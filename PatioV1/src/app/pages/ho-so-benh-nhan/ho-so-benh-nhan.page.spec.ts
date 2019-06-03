import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoSoBenhNhanPage } from './ho-so-benh-nhan.page';

describe('HoSoBenhNhanPage', () => {
  let component: HoSoBenhNhanPage;
  let fixture: ComponentFixture<HoSoBenhNhanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoSoBenhNhanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoSoBenhNhanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

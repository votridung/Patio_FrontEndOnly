import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoSoKhamPage } from './ho-so-kham.page';

describe('HoSoKhamPage', () => {
  let component: HoSoKhamPage;
  let fixture: ComponentFixture<HoSoKhamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoSoKhamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoSoKhamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

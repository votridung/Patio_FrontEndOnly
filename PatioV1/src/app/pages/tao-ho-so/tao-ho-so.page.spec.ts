import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoHoSoPage } from './tao-ho-so.page';

describe('TaoHoSoPage', () => {
  let component: TaoHoSoPage;
  let fixture: ComponentFixture<TaoHoSoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaoHoSoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaoHoSoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

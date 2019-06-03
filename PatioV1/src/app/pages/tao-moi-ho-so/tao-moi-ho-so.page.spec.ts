import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoMoiHoSoPage } from './tao-moi-ho-so.page';

describe('TaoMoiHoSoPage', () => {
  let component: TaoMoiHoSoPage;
  let fixture: ComponentFixture<TaoMoiHoSoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaoMoiHoSoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaoMoiHoSoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

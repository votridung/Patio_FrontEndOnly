import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimKiemBenhNhanPage } from './tim-kiem-benh-nhan.page';

describe('TimKiemBenhNhanPage', () => {
  let component: TimKiemBenhNhanPage;
  let fixture: ComponentFixture<TimKiemBenhNhanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimKiemBenhNhanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimKiemBenhNhanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

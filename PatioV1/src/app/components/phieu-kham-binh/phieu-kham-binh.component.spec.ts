import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuKhamBinhComponent } from './phieu-kham-binh.component';

describe('PhieuKhamBinhComponent', () => {
  let component: PhieuKhamBinhComponent;
  let fixture: ComponentFixture<PhieuKhamBinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuKhamBinhComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuKhamBinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtinnguoibenhComponent } from './thongtinnguoibenh.component';

describe('ThongtinnguoibenhComponent', () => {
  let component: ThongtinnguoibenhComponent;
  let fixture: ComponentFixture<ThongtinnguoibenhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongtinnguoibenhComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtinnguoibenhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

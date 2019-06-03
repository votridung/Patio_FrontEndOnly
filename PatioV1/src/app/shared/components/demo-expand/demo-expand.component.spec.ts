import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoExpandComponent } from './demo-expand.component';

describe('DemoExpandComponent', () => {
  let component: DemoExpandComponent;
  let fixture: ComponentFixture<DemoExpandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoExpandComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

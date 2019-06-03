import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChonbacsiPage } from './chonbacsi.page';

describe('ChonbacsiPage', () => {
  let component: ChonbacsiPage;
  let fixture: ComponentFixture<ChonbacsiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChonbacsiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChonbacsiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

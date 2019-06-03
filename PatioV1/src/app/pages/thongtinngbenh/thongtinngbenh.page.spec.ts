import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtinngbenhPage } from './thongtinngbenh.page';

describe('ThongtinngbenhPage', () => {
  let component: ThongtinngbenhPage;
  let fixture: ComponentFixture<ThongtinngbenhPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongtinngbenhPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtinngbenhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

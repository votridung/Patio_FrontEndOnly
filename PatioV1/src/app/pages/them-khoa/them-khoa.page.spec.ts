import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemKhoaPage } from './them-khoa.page';

describe('ThemKhoaPage', () => {
  let component: ThemKhoaPage;
  let fixture: ComponentFixture<ThemKhoaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemKhoaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemKhoaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinCaNhanPage } from './thong-tin-ca-nhan.page';

describe('ThongTinCaNhanPage', () => {
  let component: ThongTinCaNhanPage;
  let fixture: ComponentFixture<ThongTinCaNhanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinCaNhanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinCaNhanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

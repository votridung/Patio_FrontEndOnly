import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongBaoPage } from './thong-bao.page';

describe('ThongBaoPage', () => {
  let component: ThongBaoPage;
  let fixture: ComponentFixture<ThongBaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongBaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongBaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

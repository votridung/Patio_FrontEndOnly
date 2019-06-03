import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinPhieuKhamPage } from './thong-tin-phieu-kham.page';

describe('ThongTinPhieuKhamPage', () => {
  let component: ThongTinPhieuKhamPage;
  let fixture: ComponentFixture<ThongTinPhieuKhamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinPhieuKhamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinPhieuKhamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

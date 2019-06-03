import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinPhieuHuyPage } from './thong-tin-phieu-huy.page';

describe('ThongTinPhieuHuyPage', () => {
  let component: ThongTinPhieuHuyPage;
  let fixture: ComponentFixture<ThongTinPhieuHuyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinPhieuHuyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinPhieuHuyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

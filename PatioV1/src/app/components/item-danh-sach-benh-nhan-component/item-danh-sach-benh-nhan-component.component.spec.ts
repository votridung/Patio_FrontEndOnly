import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDanhSachBenhNhanComponentComponent } from './item-danh-sach-benh-nhan-component.component';

describe('ItemDanhSachBenhNhanComponentComponent', () => {
  let component: ItemDanhSachBenhNhanComponentComponent;
  let fixture: ComponentFixture<ItemDanhSachBenhNhanComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDanhSachBenhNhanComponentComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDanhSachBenhNhanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

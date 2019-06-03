import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HoSoBenhNhanPage } from './ho-so-benh-nhan.page';
import { ItemDanhSachBenhNhanComponentComponent } from 'src/app/components/item-danh-sach-benh-nhan-component/item-danh-sach-benh-nhan-component.component';
import { ItemDanhSachBenhNhanModule } from 'src/app/components/item-danh-sach-benh-nhan-component/item-danh-sach-benh-nhan.module';

const routes: Routes = [
  {
    path: '',
    component: HoSoBenhNhanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ItemDanhSachBenhNhanModule,
    HttpClientModule
  ],
  declarations: [HoSoBenhNhanPage]
})
export class HoSoBenhNhanPageModule {}

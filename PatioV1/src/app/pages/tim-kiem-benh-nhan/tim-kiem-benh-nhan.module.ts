import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TimKiemBenhNhanPage } from './tim-kiem-benh-nhan.page';
import { ItemDanhSachBenhNhanModule } from 'src/app/components/item-danh-sach-benh-nhan-component/item-danh-sach-benh-nhan.module';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    component: TimKiemBenhNhanPage
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
  declarations: [TimKiemBenhNhanPage]
})
export class TimKiemBenhNhanPageModule {}

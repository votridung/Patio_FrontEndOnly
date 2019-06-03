import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { XacNhanThongTinNguoiBenhPage } from './xac-nhan-thong-tin-nguoi-benh.page';

const routes: Routes = [
  {
    path: '',
    component: XacNhanThongTinNguoiBenhPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [XacNhanThongTinNguoiBenhPage]
})
export class XacNhanThongTinNguoiBenhPageModule {}

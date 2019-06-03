import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NhapMaXacNhanSdtPage } from './nhap-ma-xac-nhan-sdt.page';

const routes: Routes = [
  {
    path: '',
    component: NhapMaXacNhanSdtPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NhapMaXacNhanSdtPage]
})
export class NhapMaXacNhanSdtPageModule {}

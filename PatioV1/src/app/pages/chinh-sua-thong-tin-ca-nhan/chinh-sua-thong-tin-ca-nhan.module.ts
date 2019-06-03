import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChinhSuaThongTinCaNhanPage } from './chinh-sua-thong-tin-ca-nhan.page';

const routes: Routes = [
  {
    path: '',
    component: ChinhSuaThongTinCaNhanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChinhSuaThongTinCaNhanPage]
})
export class ChinhSuaThongTinCaNhanPageModule {}

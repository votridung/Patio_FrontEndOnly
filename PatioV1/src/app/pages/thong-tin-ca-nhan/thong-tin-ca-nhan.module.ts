import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ThongTinCaNhanPage } from './thong-tin-ca-nhan.page';

const routes: Routes = [
  {
    path: '',
    component: ThongTinCaNhanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ThongTinCaNhanPage]
})
export class ThongTinCaNhanPageModule {}

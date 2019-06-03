import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ThongBaoPage } from './thong-bao.page';

const routes: Routes = [
  {
    path: '',
    component: ThongBaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ThongBaoPage]
})
export class ThongBaoPageModule {}

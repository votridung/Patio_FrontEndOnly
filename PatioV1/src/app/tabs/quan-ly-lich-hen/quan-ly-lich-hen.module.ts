import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QuanLyLichHenPage } from './quan-ly-lich-hen.page';

const routes: Routes = [
  {
    path: '',
    component: QuanLyLichHenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuanLyLichHenPage]
})
export class QuanLyLichHenPageModule {}

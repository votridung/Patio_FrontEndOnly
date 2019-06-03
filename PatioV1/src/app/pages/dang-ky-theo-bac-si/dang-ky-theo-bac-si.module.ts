import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DangKyTheoBacSiPage } from './dang-ky-theo-bac-si.page';

const routes: Routes = [
  {
    path: '',
    component: DangKyTheoBacSiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DangKyTheoBacSiPage]
})
export class DangKyTheoBacSiPageModule {}

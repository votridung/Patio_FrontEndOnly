import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TaoMoiHoSoKhamBenhPage } from './tao-moi-ho-so-kham-benh.page';

const routes: Routes = [
  {
    path: '',
    component: TaoMoiHoSoKhamBenhPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TaoMoiHoSoKhamBenhPage]
})
export class TaoMoiHoSoKhamBenhPageModule {}

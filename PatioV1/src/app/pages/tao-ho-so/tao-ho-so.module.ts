import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TaoHoSoPage } from './tao-ho-so.page';

const routes: Routes = [
  {
    path: '',
    component: TaoHoSoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TaoHoSoPage]
})
export class TaoHoSoPageModule {}

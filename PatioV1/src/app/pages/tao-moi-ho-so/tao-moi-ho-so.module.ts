import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TaoMoiHoSoPage } from './tao-moi-ho-so.page';

const routes: Routes = [
  {
    path: '',
    component: TaoMoiHoSoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TaoMoiHoSoPage]
})
export class TaoMoiHoSoPageModule {}

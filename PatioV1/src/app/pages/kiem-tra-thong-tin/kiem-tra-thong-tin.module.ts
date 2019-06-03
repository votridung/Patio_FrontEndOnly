import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KiemTraThongTinPage } from './kiem-tra-thong-tin.page';
import { componentModule } from 'src/app/components/component.module';


const routes: Routes = [
  {
    path: '',
    component: KiemTraThongTinPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    componentModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KiemTraThongTinPage]
})
export class KiemTraThongTinPageModule {}

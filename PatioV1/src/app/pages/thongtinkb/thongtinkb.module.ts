import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ThongtinkbPage } from './thongtinkb.page';
import { phieukhambinhModule } from 'src/app/components/phieu-kham-binh/phieu-kham-binh.module';


const routes: Routes = [
  {
    path: '',
    component: ThongtinkbPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    phieukhambinhModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ThongtinkbPage]
})
export class ThongtinkbPageModule {}

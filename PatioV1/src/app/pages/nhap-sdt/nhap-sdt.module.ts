import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NhapSdtPage } from './nhap-sdt.page';

const routes: Routes = [
  {
    path: '',
    component: NhapSdtPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NhapSdtPage]
})
export class NhapSdtPageModule {}

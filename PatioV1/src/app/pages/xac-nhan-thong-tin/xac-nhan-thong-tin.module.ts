import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { XacNhanThongTinPage } from './xac-nhan-thong-tin.page';
import { componentModule } from 'src/app/components/component.module';


const routes: Routes = [
  {
    path: '',
    component: XacNhanThongTinPage
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
  declarations: [XacNhanThongTinPage]
})
export class XacNhanThongTinPageModule {
  
}

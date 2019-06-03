import { DangKyTheoBacSiPageModule } from './../dang-ky-theo-bac-si/dang-ky-theo-bac-si.module';
import { DemoActionsheetComponentModule } from './../../components/demo-actionsheet-component/demo-actionsheet-component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DangKyBacSiKhamPage } from './dang-ky-bac-si-kham.page';
import { DemoActionsheetComponentComponent } from 'src/app/components/demo-actionsheet-component/demo-actionsheet-component.component';

const routes: Routes = [
  {
    path: '',
    component: DangKyBacSiKhamPage
  }
];

@NgModule({
  imports: [

    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    DemoActionsheetComponentModule
  ],
  declarations: [DangKyBacSiKhamPage]
})
export class DangKyBacSiKhamPageModule {}

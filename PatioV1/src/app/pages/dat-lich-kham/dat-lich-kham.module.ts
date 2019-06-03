import { DemoActionsheetComponentModule } from './../../components/demo-actionsheet-component/demo-actionsheet-component.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DatLichKhamPage } from './dat-lich-kham.page';
import { DemoActionsheetComponentComponent } from 'src/app/components/demo-actionsheet-component/demo-actionsheet-component.component';

const routes: Routes = [
  {
    path: '',
    component: DatLichKhamPage
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
  declarations: [DatLichKhamPage]
})
export class DatLichKhamPageModule {}

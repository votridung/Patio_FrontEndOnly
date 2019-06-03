import { PhieuKhamBinhComponent } from './../../components/phieu-kham-binh/phieu-kham-binh.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ThongTinPhieuKhamPage } from './thong-tin-phieu-kham.page';
import { phieukhambinhModule } from 'src/app/components/phieu-kham-binh/phieu-kham-binh.module';


const routes: Routes = [
  {
    path: '',
    component:ThongTinPhieuKhamPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes) ,
    phieukhambinhModule
  ],
  declarations: [ThongTinPhieuKhamPage]
})
export class ThongTinPhieuKhamPageModule {}

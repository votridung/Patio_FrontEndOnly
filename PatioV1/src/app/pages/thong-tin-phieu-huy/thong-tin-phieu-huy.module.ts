import { PhieuKhamBinhComponent } from './../../components/phieu-kham-binh/phieu-kham-binh.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ThongTinPhieuHuyPage } from './thong-tin-phieu-huy.page';
import { phieukhambinhModule } from 'src/app/components/phieu-kham-binh/phieu-kham-binh.module';


const routes: Routes = [
  {
    path: '',
    component:ThongTinPhieuHuyPage
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
  declarations: [ThongTinPhieuHuyPage]
})
export class ThongTinPhieuHuyPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';
import { HoSoKhamPage } from './ho-so-kham.page';
import { ItemDanhSachKhamComponent } from 'src/app/components/item-danh-sach-kham/item-danh-sach-kham.component';

const routes: Routes = [
  {
    path: '',
    component: HoSoKhamPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  declarations: [HoSoKhamPage,ItemDanhSachKhamComponent]
})
export class HoSoKhamPageModule {}

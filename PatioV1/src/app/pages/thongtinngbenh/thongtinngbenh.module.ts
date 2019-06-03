import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ThongtinngbenhPage } from './thongtinngbenh.page';

const routes: Routes = [
  {
    path: '',
    component: ThongtinngbenhPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ThongtinngbenhPage]
})
export class ThongtinngbenhPageModule {}

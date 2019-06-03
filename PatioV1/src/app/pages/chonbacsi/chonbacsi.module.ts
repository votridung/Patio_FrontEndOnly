import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChonbacsiPage } from './chonbacsi.page';

const routes: Routes = [
  {
    path: '',
    component: ChonbacsiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChonbacsiPage]
})
export class ChonbacsiPageModule {}

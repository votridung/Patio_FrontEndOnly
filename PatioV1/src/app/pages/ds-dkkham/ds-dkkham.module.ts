import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DsDkkhamPage } from './ds-dkkham.page';

const routes: Routes = [
  {
    path: '',
    component: DsDkkhamPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DsDkkhamPage]
})
export class DsDkkhamPageModule {}

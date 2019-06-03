import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TaohsnbPage } from './taohsnb.page';

const routes: Routes = [
  {
    path: '',
    component: TaohsnbPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TaohsnbPage]
})
export class TaohsnbPageModule {}

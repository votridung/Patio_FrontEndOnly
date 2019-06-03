import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DangKyKhamPage } from './dang-ky-kham.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: DangKyKhamPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [DangKyKhamPage],
    entryComponents: []
})
export class DangKyKhamPageModule {}

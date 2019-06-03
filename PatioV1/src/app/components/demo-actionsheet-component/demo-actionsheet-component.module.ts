import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoActionsheetComponentComponent } from './demo-actionsheet-component.component';

@NgModule({
  declarations: [DemoActionsheetComponentComponent],
  imports: [
    CommonModule,IonicModule
  ],
  exports:[DemoActionsheetComponentComponent]
})
export class DemoActionsheetComponentModule { }

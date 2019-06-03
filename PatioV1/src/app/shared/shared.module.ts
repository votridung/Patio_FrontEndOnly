import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { DemoComponentComponent } from './components/demo-component/demo-component.component';
import { DemoExpandComponent } from './components/demo-expand/demo-expand.component';
const components = [DemoComponentComponent, DemoExpandComponent];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        IonicModule.forRoot(),
    ],
    declarations: [...components],
    exports: [
        ...components
    ],
    //entryComponents: components,
})
export class SharedModule {}

import { DangKyTheoBacSiPageModule } from './pages/dang-ky-theo-bac-si/dang-ky-theo-bac-si.module';
import { ChonNgayKhamPageModule } from './pages/chon-ngay-kham/chon-ngay-kham.module';
import { DatLichKhamPageModule } from './pages/dat-lich-kham/dat-lich-kham.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCalendarModule  } from 'ionic2-calendar';
import { CoreModule } from './core/core.module';
import { StateModule } from './state/state.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, NgCalendarModule ,IonicModule.forRoot(), AppRoutingModule,
    
    DangKyTheoBacSiPageModule,
    
    DatLichKhamPageModule,
    ChonNgayKhamPageModule,
    StateModule.forRoot(),
    CoreModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

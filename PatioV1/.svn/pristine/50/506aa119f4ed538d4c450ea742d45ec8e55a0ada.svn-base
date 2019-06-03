import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Observable } from 'rxjs';
import * as fromStore from './state/app.reducer';
import { Store } from '@ngrx/store';
import * as fromAppSelector from './state/app/app-core.selectors';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
    error$: Observable<string>;
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private alert: AlertController,
        private store: Store<fromStore.AppState>
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.error$ = this.store.select(fromAppSelector.addError);
            this.error$.subscribe(async val => {
                console.log('error$', val);
                if (val) {
                    const confirm = await this.alert.create({
                        message: val,
                        buttons: [
                            {
                                text: 'Ok',
                            },
                        ],
                    });

                    await confirm.present();
                }
            });
        });
        
    }
}

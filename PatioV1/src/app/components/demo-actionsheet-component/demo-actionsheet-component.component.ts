import { ofType } from '@ngrx/effects';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-demo-actionsheet-component',
  templateUrl: './demo-actionsheet-component.component.html',
  styleUrls: ['./demo-actionsheet-component.component.scss'],
})
export class DemoActionsheetComponentComponent implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }

  // async presentActionSheet() {
  //   const actionSheet = await this.actionSheetController.create({
  //     mode: 'ios',
  //     buttons: [{
  //       text: 'Có giấy chuyển BHYT đúng tuyến BV FPT',
        
  //       handler: () => {
  //         console.log();
  //       }
  //     }, {
  //       text: 'Tái khám theo hạn trên toa thuốc BHYT của BV FPT',   
  //       handler: () => {
  //         console.log();
  //       }
  //     }, {
  //       text: 'Không phải hai trường hợp trên',  
  //       handler: () => {
  //         console.log();
  //       }
  //     }]
  //   });
  //   await actionSheet.present();
  // }
  ngOnInit() {}

}

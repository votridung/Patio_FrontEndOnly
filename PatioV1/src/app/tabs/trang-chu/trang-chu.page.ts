import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PickerController } from '@ionic/angular';
import { PickerOptions, PickerButton } from '@ionic/core';


@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.page.html',
  styleUrls: ['./trang-chu.page.scss'],
})
export class TrangChuPage  {
 tenbv ='Chọn địa điểm bệnh viện';
 selected = [''];

  constructor(public actionSheetController: ActionSheetController, public router : Router,private pickerCtrl: PickerController) { }
  DSClick(){
    this.router.navigate(['ds-dkkham']);
  }
  quanlyhoso() {
    this.router.navigate(['taohsnb']);
  }
  taohoso() {
    this.router.navigate(['tao-ho-so']);
  }
  async tenbvPicker() {
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Hủy',
          role: 'cancel'
        },
        {
          text: 'Đồng Ý'
        }
      ],
      columns: [
        {
          name: 'tenbv',
          options: [
            { text: 'Bệnh viện FPT cơ sở 1', value: 'FPT00001' },
            { text: 'Bệnh viện FPT cơ sở 2', value: 'FPT00002' },

          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('tenbv');
      this.tenbv = col.options[col.selectedIndex].text;
    });
  }
  async TaoMoiHoSoTabs(){
    this.router.navigateByUrl('./app/pages/tao-moi-ho-so/thong-tin-nguoi-benh');
    //this.navCtrl.navigateRoot('/app/tabs/(home:home)')
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      mode:"ios",
      cssClass: "action-sheet",
      buttons: [{
        text: 'Đăng ký khám theo ngày',
        role: 'btn',
        cssClass: "btn1",

        handler: () => {
          console.log('Chọn đăng ký khám theo ngày');
          this.router.navigate(['taohsnb']);
        }
      }, {
        text: 'Đăng ký khám theo bác sĩ',
        role: 'btn',
        cssClass: "btn2",
        handler: () => {
          console.log('Chọn đăng ký khám theo bác sĩ');
          this.router.navigate(['taohsnb']);
        }
      },
      //  {
      //   text: 'Thoát',
      //   role: 'cancel',
      //   handler: () => {
      //     console.log('Cancel clicked');
      //   }
      // }
    ]
    });
    await actionSheet.present();
  }
}

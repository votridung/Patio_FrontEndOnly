import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions, PickerButton } from '@ionic/core';

@Component({
  selector: 'app-chinh-sua-thong-tin-ca-nhan',
  templateUrl: './chinh-sua-thong-tin-ca-nhan.page.html',
  styleUrls: ['./chinh-sua-thong-tin-ca-nhan.page.scss'],
})
export class ChinhSuaThongTinCaNhanPage {

  framework = '';
  selected = [''];
  sexo: string;
  constructor(private pickerCtrl: PickerController) { 
    this.sexo="Nam";
  }
  mode:"ios";
  async showNgheNhiepPicker() {
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
          name: 'framework',
          options: [
            { text: 'Giáo viên', value: 'GV' },
            { text: 'Công nhân', value: 'CN' },
            { text: 'Nông dân', value: 'ND' },
            { text: 'Hưu trí', value: 'HT' },
            { text: 'Buôn bán', value: 'BB' },
            { text: 'Thất nghiệp', value: 'TN' },
            { text: 'Học sinh', value: 'HS' },
            { text: 'Sinh viên', value: 'SV' },
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('framework');
      this.framework = col.options[col.selectedIndex].text;
    });
  }
}

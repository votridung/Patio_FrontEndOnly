import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PickerController } from '@ionic/angular';
import { PickerOptions, PickerButton } from '@ionic/core';

@Component({
  selector: 'app-tao-moi-ho-so',
  templateUrl: './tao-moi-ho-so.page.html',
  styleUrls: ['./tao-moi-ho-so.page.scss'],
})
export class TaoMoiHoSoPage implements OnInit {
  gioitinh = 'Chọn';
  quocgia = 'Chọn';
  tinhthanh = 'Chọn';
  quanhuyen = 'Chọn';
  phuongxa = 'Chọn';
  quanhe = 'Chọn';

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  segment: string;
  constructor(private router: Router, private pickerCtrl: PickerController) {
    this.segment = "thong-tin-nguoi-benh";
  }
  xacnhanthongtin() {
    this.router.navigate(['xac-nhan-thong-tin-nguoi-benh']);
  }
  changeTab(value) {
    this.segment = value;
  }
  taohsnb() {
    this.router.navigate(['taohsnb']);
  }


  ngOnInit() {
  }
  async GioiTinhPicker() {
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
          name: 'gioitinh',
          options: [
            { text: 'Nam', value: 'Nam' },
            { text: 'Nữ', value: 'Nu' },

          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('gioitinh');
      this.gioitinh = col.options[col.selectedIndex].text;
    });
  }
  async QuocGiaPicker() {
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
          name: 'quocgia',
          options: [
            { text: 'Việt Nam', value: 'VN' },
            { text: 'Mỹ', value: 'US' },
            { text: 'Thái Lan', value: 'TL' },
            { text: 'Campuchia', value: 'CP' },
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('quocgia');
      this.quocgia = col.options[col.selectedIndex].text;
    });
  }
  async TinhThanhPicker() {
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
          name: 'tinhthanh',
          options: [
            { text: 'Vĩnh Long', value: 'VL' },
            { text: 'Trà Vinh', value: 'TV' },
            { text: 'Tp.HCM', value: 'HCM' },
            { text: 'Huế', value: 'H' },
            { text: 'Bến Tre', value: 'BT' },
            { text: 'Đồng Nai', value: 'DN' },
            { text: 'Vinh', value: 'V' },
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('tinhthanh');
      this.tinhthanh = col.options[col.selectedIndex].text;
    });
  }
  async QuanPicker() {
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
          name: 'quanhuyen',
          options: [
            { text: '1', value: '1' },
            { text: '2', value: '2' },
            { text: '4', value: '4' },
            { text: '5', value: '5' },
            { text: '7', value: '7' },
            { text: '8', value: '8' },
            { text: '9', value: '9' },
            { text: '10', value: '10' },
            { text: '11', value: '11' },
            { text: '12', value: '12' },
            { text: 'Bình Thạnh', value: 'BT' },
            { text: 'Tân Bình', value: 'TB' },
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('quanhuyen');
      this.quanhuyen = col.options[col.selectedIndex].text;
    });
  }
  async HuyenPicker() {
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
          name: 'phuongxa',
          options: [
            { text: 'Phường 10', value: 'p10' },
            { text: 'Phường 15', value: 'p15' },

          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('phuongxa');
      this.phuongxa = col.options[col.selectedIndex].text;
    });
  }
  async quanheGDPicker() {
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
          name: 'quanhe',
          options: [
            { text: 'Cha', value: 'cha' },
            { text: 'Mẹ', value: 'me' },
            { text: 'Con', value: 'con' },
            { text: 'Anh', value: 'anh' },
            { text: 'Chi', value: 'chi' },
            { text: 'Em', value: 'em' },
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('quanhe');
      this.quanhe = col.options[col.selectedIndex].text;
    });
  }
}

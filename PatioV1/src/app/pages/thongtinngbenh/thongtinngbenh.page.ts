import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thongtinngbenh',
  templateUrl: './thongtinngbenh.page.html',
  styleUrls: ['./thongtinngbenh.page.scss'],
})
export class ThongtinngbenhPage implements OnInit {


    title = 'Thông tin người bệnh';
    nameHospital = 'Bệnh viện nhân dân Gia Định';
    name = 'Trần An';
    Specialist = 'Chăm sóc da';
    DrName = 'Đặng Thùy Trâm';
    RoomTime = 'Phòng 20';
    date = new Date();
    MaSo = 'Đang cập nhật';
    NgaySinh = '11 / 11 / 2011';
    GioiTinh = 'nam';
    Cmnd = '123456789';
    NgheNghiep = 'Bac Sĩ';
    QuocGia = 'Viet Nam';
    DanToc = 'Kinh';
    SoDienThoai = 83242374327;
    Email = '123@fpt.com';
    Adress = 'Quận 7';
    quanhe ='cha'

  constructor(public actionSheetController: ActionSheetController, public router : Router) { }

  ngOnInit() {
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
          this.router.navigate(['dat-lich-kham']);
        }
      }, {
        text: 'Đăng ký khám theo bác sĩ',
        role: 'btn',
        cssClass: "btn2",
        handler: () => {
          console.log('Chọn đăng ký khám theo bác sĩ');
          this.router.navigate(['dang-ky-bac-si-kham']);
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

import { formatPercent } from '@angular/common';
import { ActionSheetController } from '@ionic/angular';
import { DateServiceService } from './../../date-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dat-lich-kham',
  templateUrl: './dat-lich-kham.page.html',
  styleUrls: ['./dat-lich-kham.page.scss'],
})
export class DatLichKhamPage implements OnInit {

  title = "Đặt lịch khám";
  // @Input() Date: string;
  DateServiceService: any;
  constructor(private router: Router, private dateServ: DateServiceService, public actionSheetController: ActionSheetController) {
  }
  public checkedN:boolean = true;
  public checkedY:boolean;

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      mode: 'ios',
      cssClass:'ActionSheet',
      buttons: [{
        cssClass:'button',
        text: 'Có giấy chuyển BHYT đúng tuyến BV FPT',

        handler: () => {
          console.log();
        }
      }, {
        cssClass:'button',
        text: 'Tái khám theo hạn trên toa thuốc BHYT của BV FPT',
        handler: () => {
          console.log();
        }
      }, {
        cssClass:'button',
        text: 'Không phải hai trường hợp trên',
        handler: () => {
          console.log();
          this.checkedY =false;
          this.checkedN =true;
        }
      }]
    });
    await actionSheet.present();
  }
  changeY() {
    this.checkedN =false;
    this.checkedY =true;
    
  }
  changeN() {
    this.checkedY =false;
    this.checkedN =true;
  }
  //----TestData---------------------------
  nameHospital = "Bệnh viện nhân dân Gia Định"
  name = "Trần An";
  Specialist = "Chăm sóc da";
  DrName = "Đặng Thùy Trâm";
  RoomTime = "Phòng 20";
  date = "30/05/2019";
  chonkhoa() {
    this.router.navigate(['modal']);
  }

  
  onClick(){
    this.router.navigate(['xac-nhan-thong-tin']);
  }
  chonngay() {
    this.router.navigate(['chon-ngay-kham']);
  }
  chonphongkham(){
    this.router.navigate(['chonbacsi']);
  }
  ngOnInit() {
    // this.dateServ.date(data => (this.sentData = data));
    // console.log("sent data from login page : ", this.sentData);
  }

}

import { ActionSheetController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DateServiceService } from 'src/app/date-service.service';
import { Router } from '@angular/router';
import { DangKyTheoBacSiPage } from 'src/app/pages/dang-ky-theo-bac-si/dang-ky-theo-bac-si.page';


@Component({
  selector: 'app-dang-ky-bac-si-kham',
  templateUrl: './dang-ky-bac-si-kham.page.html',
  styleUrls: ['./dang-ky-bac-si-kham.page.scss'],
})
export class DangKyBacSiKhamPage implements OnInit {

  title="Đăng ký khám";
  // @Input() Date: string;
  DateServiceService: any;
  constructor(private router: Router,private dateServ: DateServiceService,public actionSheetController: ActionSheetController, private modalController: ModalController) {  
   }
   public checkedN = true;
   public checkedY = false;
   async Dangkytheobacsi(){
    const dangkytheobacsi= await this.modalController.create({
      component: DangKyTheoBacSiPage,
    });
    dangkytheobacsi.present();
  }
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
  changeY(){
    this.checkedN =false;
    this.checkedY =true;
  }
  changeN(){
    this.checkedY =false;
    this.checkedN =true;
  }
  //----TestData---------------------------
  nameHospital="Bệnh viện nhân dân Gia Định"
  name="Trần An"; 
  Specialist="Chăm sóc da";
  DrName="Đặng Thùy Trâm";
  RoomTime="Phòng 20";
  date="30/05/2019";


  nextPageChonBacSi() {
    this.router.navigate(['dang-ky-theo-bac-si']);
  }
  chonkhoa() {
    this.router.navigate(['modal']);
  }
  chonbacsi(){
    this.router.navigate(['dang-ky-theo-bac-si']);
  }
  chonphongkham(){
    this.router.navigate(['chonbacsi']);
  }
  
  onClick(){
    this.router.navigate(['xac-nhan-thong-tin']);
  }
  ngOnInit() { 
    // this.dateServ.date(data => (this.sentData = data));
    // console.log("sent data from login page : ", this.sentData);
  }

}

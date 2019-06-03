import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-dang-ky-theo-bac-si',
  templateUrl: './dang-ky-theo-bac-si.page.html',
  styleUrls: ['./dang-ky-theo-bac-si.page.scss'],
})
export class DangKyTheoBacSiPage implements OnInit {

  constructor(private navParams:NavController,private modalController:ModalController) { }

  ngOnInit() {
  }
  dongdangkykhamtheobs(){
    this.modalController.dismiss();
  }
}

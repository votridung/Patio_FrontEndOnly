import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nhap-ma-xac-nhan-sdt',
  templateUrl: './nhap-ma-xac-nhan-sdt.page.html',
  styleUrls: ['./nhap-ma-xac-nhan-sdt.page.scss'],
})
export class NhapMaXacNhanSdtPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  async navTabs(){
    //you can use either of below
    this.router.navigateByUrl('/app/tabs/trang-chu');
    //this.navCtrl.navigateRoot('/app/tabs/(home:home)')
}
}

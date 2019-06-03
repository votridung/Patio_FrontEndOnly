import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-xac-nhan-thong-tin-nguoi-benh',
  templateUrl: './xac-nhan-thong-tin-nguoi-benh.page.html',
  styleUrls: ['./xac-nhan-thong-tin-nguoi-benh.page.scss'],
})
export class XacNhanThongTinNguoiBenhPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  xacnhan(){
    this.route.navigate(['trang-chu']);
  }
}

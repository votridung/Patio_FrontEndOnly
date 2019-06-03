import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-xac-nhan-thong-tin',
  templateUrl: './xac-nhan-thong-tin.page.html',
  styleUrls: ['./xac-nhan-thong-tin.page.scss'],
})
export class XacNhanThongTinPage implements OnInit {

  constructor(private router:Router) { }
  xacnhan: string = "thong-tin-kham";
  ngOnInit() {
  }
  segmentChanged(event) {
    const valorsegmnet = event.detail.value;
    console.log(valorsegmnet);
  }
  xacnhanQR(){
    this.router.navigate(['thongtinkb']);
  }
  onClick(){
    this.router.navigate(['them-khoa']);
  }
  changeTab(value) {
    this.xacnhan = value;
  }
  public disabled = false;
  public change() {
    this.disabled = !this.disabled;
  }
}

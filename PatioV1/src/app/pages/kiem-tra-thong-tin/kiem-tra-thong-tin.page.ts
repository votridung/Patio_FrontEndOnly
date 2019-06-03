import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kiem-tra-thong-tin',
  templateUrl: './kiem-tra-thong-tin.page.html',
  styleUrls: ['./kiem-tra-thong-tin.page.scss'],
})
export class KiemTraThongTinPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  hoantat(){
    this.route.navigate(['thongtinngbenh']);
  }
  async trangchu(){
    this.route.navigateByUrl('/app/tabs/trang-chu');
  }
}

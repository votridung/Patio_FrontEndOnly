import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-thong-tin-ca-nhan',
  templateUrl: './thong-tin-ca-nhan.page.html',
  styleUrls: ['./thong-tin-ca-nhan.page.scss'],
})
export class ThongTinCaNhanPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  nextPage() {
    this.router.navigate(['chinh-sua-thong-tin-ca-nhan']);
  }
}

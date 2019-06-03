import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-taohsnb',
  templateUrl: './taohsnb.page.html',
  styleUrls: ['./taohsnb.page.scss'],
})
export class TaohsnbPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  NhapHS() {
    this.router.navigate(['tim-kiem-benh-nhan']);
  }
  TaoHS() {
    this.router.navigate(['tao-moi-ho-so-kham-benh']);
  }
  DacoHS() {
    this.router.navigate(['ho-so-benh-nhan']);
  }
}

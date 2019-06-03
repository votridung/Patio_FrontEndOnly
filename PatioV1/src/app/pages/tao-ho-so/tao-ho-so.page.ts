import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tao-ho-so',
  templateUrl: './tao-ho-so.page.html',
  styleUrls: ['./tao-ho-so.page.scss'],
})
export class TaoHoSoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  NhapHS() {
    this.router.navigate(['tim-kiem-benh-nhan']);
  }
  TaoHS() {
    this.router.navigate(['tao-moi-ho-so']);
  }
  DacoHS() {
    this.router.navigate(['ho-so-kham']);
  }
}

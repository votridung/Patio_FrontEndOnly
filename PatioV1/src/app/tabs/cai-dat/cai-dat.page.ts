import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cai-dat',
  templateUrl: './cai-dat.page.html',
  styleUrls: ['./cai-dat.page.scss'],
})
export class CaiDatPage implements OnInit {

  constructor(private router: Router  ) { }

  ngOnInit() {
  }
  nextPage() {
    this.router.navigate(['thong-tin-ca-nhan']);
  }
  logout() {
    this.router.navigate(['dang-nhap']);
  }
}


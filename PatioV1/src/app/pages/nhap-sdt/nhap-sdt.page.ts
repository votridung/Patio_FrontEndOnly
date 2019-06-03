import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nhap-sdt',
  templateUrl: './nhap-sdt.page.html',
  styleUrls: ['./nhap-sdt.page.scss'],
})
export class NhapSdtPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  nextPage() {
    this.router.navigate(['nhap-ma-xac-nhan-sdt']);
  }
}

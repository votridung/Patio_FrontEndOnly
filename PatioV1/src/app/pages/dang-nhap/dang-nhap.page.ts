import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.page.html',
  styleUrls: ['./dang-nhap.page.scss'],
})
export class DangNhapPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  nextPage() {
    this.router.navigate(['nhap-sdt']);
  }
}

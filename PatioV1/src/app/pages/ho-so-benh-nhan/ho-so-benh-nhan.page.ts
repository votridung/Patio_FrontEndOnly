import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ho-so-benh-nhan',
  templateUrl: './ho-so-benh-nhan.page.html',
  styleUrls: ['./ho-so-benh-nhan.page.scss'],
})
export class HoSoBenhNhanPage implements OnInit {
  title="Hồ sơ bệnh nhân";
  constructor(private http: HttpClient, private router: Router) { }
  // public benhnhan: Array<{ name: string, address: string, mobile: string }> = [
  //   {
  //       name: 'Angular',
  //       address: 'Quan Binh Thanh',
  //       mobile: '090113000'
  //   },
  //   {
  //       name: 'Nodejs',
  //       address: 'Quan 9',
  //       mobile: '090114000'
  //   },
  //   {
  //     name: 'Ionic',
  //     address: 'Quan 7',
  //     mobile: '090115000'
  //   },
  //   {
  //     name: 'Khiem',
  //     address: 'Quan 2',
  //     mobile: '090116000'
  //   },
  // ];
  results;
  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/users").subscribe(data => {
    this.results = data;
    });
  }
  TaoHS() {
    this.router.navigate(['tao-moi-ho-so']);
  }
}

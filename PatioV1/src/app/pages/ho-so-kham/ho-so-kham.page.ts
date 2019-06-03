import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ho-so-kham',
  templateUrl: './ho-so-kham.page.html',
  styleUrls: ['./ho-so-kham.page.scss'],
})
export class HoSoKhamPage implements OnInit {
  results;
  constructor(private http: HttpClient, private router: Router) {
   }
   TaoHS() {
    this.router.navigate(['tao-moi-ho-so']);
  }
  //  public benhnhan: Array<{ name: string, address: string, mobile: string }> = [
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
  //     },
  //     {
  //       name: 'Khiem',
  //       address: 'Quan 2',
  //       mobile: '090116000'
  //   },
  // ];
  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/users").subscribe(data => {
    this.results = data;
 });
    
  }

}

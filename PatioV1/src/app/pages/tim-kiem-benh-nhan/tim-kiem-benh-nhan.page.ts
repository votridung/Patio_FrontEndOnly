import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tim-kiem-benh-nhan',
  templateUrl: './tim-kiem-benh-nhan.page.html',
  styleUrls: ['./tim-kiem-benh-nhan.page.scss'],
})
export class TimKiemBenhNhanPage implements OnInit {

  constructor(private http: HttpClient) { }
  title="Tìm bệnh nhân";
  results;
  ngOnInit() {
      this.http.get("http://jsonplaceholder.typicode.com/users").subscribe(data => {
     this.results = data;
    });
  }

}

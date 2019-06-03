import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-danh-sach-kham',
  templateUrl: './item-danh-sach-kham.component.html',
  styleUrls: ['./item-danh-sach-kham.component.css']
})
export class ItemDanhSachKhamComponent implements OnInit {

  constructor(private router:Router) { }
  @Input() name: string;
  @Input() address: string;
  @Input() mobile: string;


  ngOnInit() {}
  xacnhanthongtin() {
    this.router.navigate(['xac-nhan-thong-tin-nguoi-benh']);
  }

}

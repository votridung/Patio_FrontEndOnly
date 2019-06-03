import { Router } from '@angular/router';
import { Component, OnInit ,Input,Output} from '@angular/core';

@Component({
  selector: 'app-item-danh-sach-benh-nhan-component',
  templateUrl: './item-danh-sach-benh-nhan-component.component.html',
  styleUrls: ['./item-danh-sach-benh-nhan-component.component.scss'],
})
export class ItemDanhSachBenhNhanComponentComponent implements OnInit {

  constructor(private router:Router) { }
  @Input() name: string;
  @Input() address: string;
  @Input() mobile: string;


  ngOnInit() {}
  kiemtrathongtin() {
    this.router.navigate(['thongtinngbenh']);
  }
}

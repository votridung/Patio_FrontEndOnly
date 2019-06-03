import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thongtinkb',
  templateUrl: './thongtinkb.page.html',
  styleUrls: ['./thongtinkb.page.scss'],
})
export class ThongtinkbPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  async trangchu(){
    this.router.navigateByUrl('/app/tabs/trang-chu');
  }
 
}

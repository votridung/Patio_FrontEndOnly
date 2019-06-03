import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  ModalController: any;

  constructor( private modalcontroller: ModalController,private router : Router ) { }
  
  chonkhoa(){
    this.router.navigate(['dat-lich-kham'])
  }
  ngOnInit() {
  }
  async Openmodal() {
    const  modal = await this.ModalController({
      Component: ModalPage


    });
  }
}

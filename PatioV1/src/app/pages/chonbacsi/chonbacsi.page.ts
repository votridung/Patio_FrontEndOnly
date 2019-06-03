import { Component, OnInit, EventEmitter,Input, Output, } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-chonbacsi',
  templateUrl: './chonbacsi.page.html',
  styleUrls: ['./chonbacsi.page.scss'],
})
export class ChonbacsiPage implements OnInit {
    @Input()
    name: string;

    @Input()
    description: string;

    @Input()
    image: string;

    @Output()
    change: EventEmitter<string> = new EventEmitter<string>();
  public isMenuOpen: boolean = false;
  constructor(private navParams:NavController,private modalController:ModalController) { }

  ngOnInit() {
    
  }
  isenabled:boolean=false;
 
  dongchonbacsi(){
    this.modalController.dismiss();
  }
  toggleAccordion(): void {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }


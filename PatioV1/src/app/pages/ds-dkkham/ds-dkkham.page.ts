import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-ds-dkkham',
  templateUrl: './ds-dkkham.page.html',
  styleUrls: ['./ds-dkkham.page.scss'],
})
export class DsDkkhamPage implements OnInit {
@ViewChild(IonSegment) segment: IonSegment;
  patient: string;
  segmentChange: string;
  constructor(private router:Router) {
    this.segmentChange = 'inocent';
   }
   onClick(){
    this.router.navigate(['thong-tin-phieu-huy']);
   }
   phieuhuy(){
    this.router.navigate(['thong-tin-phieu-huy']);
   }
  ngOnInit() {

  }
  // onSegmentClicked(item) {
  // }
  segmentChanged(event) {
    const ValueSegment = event.detail.value;
    console.log(ValueSegment);
  }
}

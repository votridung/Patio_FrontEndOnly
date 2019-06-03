import * as core from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-phieu-kham-binh',
  templateUrl: './phieu-kham-binh.component.html',
  styleUrls: ['./phieu-kham-binh.component.scss'],
})
export class PhieuKhamBinhComponent implements core.OnInit {
  @Input() params: any;
  @Output() eventFromComponentToPage = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {

  }
  eventClick(params: any) {
      this.eventFromComponentToPage.emit(params);
  }
}


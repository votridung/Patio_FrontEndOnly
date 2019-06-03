import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-thongtinnguoibenh',
  templateUrl: './thongtinnguoibenh.component.html',
  styleUrls: ['./thongtinnguoibenh.component.scss'],
})
export class ThongtinnguoibenhComponent implements OnInit {
  @Input() params: any;
    @Output() eventFromComponentToPage = new EventEmitter<any>();
    constructor() { }

    ngOnInit() {

    }
    eventClick(params: any) {
        this.eventFromComponentToPage.emit(params);
    }
}

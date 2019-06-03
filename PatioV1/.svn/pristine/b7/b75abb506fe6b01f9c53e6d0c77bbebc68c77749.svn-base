import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.scss'],
})
export class DemoComponentComponent implements OnInit {
    @Input() params: any;
    @Output() eventFromComponentToPage = new EventEmitter<any>();
    constructor() { }

    ngOnInit() {

    }
    eventClick(params: any) {
        this.eventFromComponentToPage.emit(params);
    }
}

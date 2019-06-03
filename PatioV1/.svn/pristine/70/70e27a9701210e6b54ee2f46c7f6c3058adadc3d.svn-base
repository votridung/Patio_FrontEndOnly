import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo-expand',
  templateUrl: './demo-expand.component.html',
  styleUrls: ['./demo-expand.component.scss'],
})
export class DemoExpandComponent implements OnInit {

    @Input()
    name: string;

    @Input()
    description: string;

    @Input()
    image: string;

    @Output()
    change: EventEmitter<string> = new EventEmitter<string>();

    public isMenuOpen: boolean = false;
    constructor() { }

    ngOnInit() {
    }

    public toggleAccordion(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }

    public broadcastName(name: string): void {
        this.change.emit(name);
    }
}

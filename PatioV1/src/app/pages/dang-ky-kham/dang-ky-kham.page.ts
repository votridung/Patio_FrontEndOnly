import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dang-ky-kham',
  templateUrl: './dang-ky-kham.page.html',
  styleUrls: ['./dang-ky-kham.page.scss'],
})
export class DangKyKhamPage implements OnInit {
    passParams: any;
    constructor() { }
    public technologies: Array<{ name: string, description: string, image: string }> = [
        {
            name: 'Angular',
            description: 'Google\'s front-end development framework - default option for Ionic development',
            image: '/assets/images/angular-logo.png'
        },
        {
            name: 'VueJS',
            description: 'Latest cutting edge front-end development framework - can be enabled as an option for Ionic development',
            image: '/assets/images/vuejs-logo.png'
        },
    ];
    ngOnInit() {
        this.passParams = "abcd";
    }

    handleEventFromComponent(params: any) {
        console.log(params);
    }

    public captureName(event: any): void {
        console.log(`Captured name by event value: ${event}`);
    }
}

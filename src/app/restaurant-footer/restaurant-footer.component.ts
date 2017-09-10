import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-restaurant-footer',
    templateUrl: './restaurant-footer.component.html',
    styleUrls: ['./restaurant-footer.component.css']
})
export class RestaurantFooterComponent implements OnInit {
    nameFooter = "assets/images/nameFooter.png";
    contactFooter = "assets/images/contactFooter.png";
    atmosphereFooter = "assets/images/atmosphereFooter.png";
    imgfooter1 = "assets/images/imgfooter1.jpg";
    imgfooter2 = "assets/images/imgfooter2.jpg";
    imgfooter3 = "assets/images/imgfooter3.jpg";
    imgfooter4 = "assets/images/imgfooter4.jpg";
    imgfooter5 = "assets/images/imgfooter5.jpg";
    imgfooter6 = "assets/images/imgfooter6.jpg";
    constructor() { }

    ngOnInit() {
    }

}

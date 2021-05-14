import { Component } from '@angular/core';

@Component({
    selector: 'app-property-card',
    // template: '<h1>Test</h1>',
    // styles: ['property-card.component.css']
    templateUrl: 'property-card.component.html',
    styleUrls: ['property-card.component.css']
})

export class PropertyCardComponent{

    Property: any = {
        "Id": 1,
        "Name": "Birla",
        "Type": "House",
        "Price": 120000
    }
}
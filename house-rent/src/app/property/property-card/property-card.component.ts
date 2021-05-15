import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-property-card',
    // template: '<h1>Test</h1>',
    // styles: ['property-card.component.css']
    templateUrl: 'property-card.component.html',
    styleUrls: ['property-card.component.css']
})

export class PropertyCardComponent{
    @Input() property:any;
}
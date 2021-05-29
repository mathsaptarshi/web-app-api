import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Birla",
      "Type": "House",
      "Price": 120000
    },
    {
      "Id": 2,
      "Name": "Exa",
      "Type": "Villa",
      "Price": 120000
    },
    {
      "Id": 3,
      "Name": "TTs",
      "Type": "House",
      "Price": 120000
    },
    {
      "Id": 4,
      "Name": "Exa123",
      "Type": "Villa",
      "Price": 120000
    },
    {
      "Id": 5,
      "Name": "TTs456",
      "Type": "House",
      "Price": 120000
    },
    {
      "Id": 6,
      "Name": "Exa789",
      "Type": "Villa",
      "Price": 120000
    },
    {
      "Id": 7,
      "Name": "TTsOOOO",
      "Type": "House",
      "Price": 120000
    },
    {
      "Id": 8,
      "Name": "TTs",
      "Type": "House",
      "Price": 120000
    },
    {
      "Id": 9,
      "Name": "YYYY",
      "Type": "Villa",
      "Price": 120000
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

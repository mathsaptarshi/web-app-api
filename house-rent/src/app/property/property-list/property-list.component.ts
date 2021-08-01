import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  public properties: Array<any> = [];

  constructor(
    private http: HttpClient,
    private housingService: HousingService
    ) { }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe((data)=>{
      this.properties = data;
    },(err) =>{
      console.log(err)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(private dataService: DataService) {
  }

  countries : string[] = [];
  visible: boolean = true;

  ngOnInit(): void {
    this.dataService.getCountries().subscribe({
      next : data => this.countries = data,
      error : error => console.log("error",error)
    });
  }

  toggleVisible() {
    this.visible= !this.visible;
  }


}

import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'payments';

  readonly myName = 'Matt';

  constructor(private dataService: DataService) {
    this.dataService.getCountries().subscribe({
      next : data => console.log(data),
      error : error => console.log("error",error)
    }
    )
  }

}


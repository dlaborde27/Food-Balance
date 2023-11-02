import { Component } from '@angular/core';
import { DataService } from '../providers/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataProvider: DataService,) {}

  deleteMeals(){
    this.dataProvider.deleteResponse().subscribe((response) => {
      console.log(response)
    });
  }
}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewmealComponent } from '../modals/newmeal/newmeal.component';
import { DataService } from '../providers/data.service';
import { Meal } from '../intefaces/meal';

@Component({
  selector: 'app-foodaddbar',
  templateUrl: './foodaddbar.component.html',
  styleUrls: ['./foodaddbar.component.css']
})
export class FoodaddbarComponent {
  name:string | undefined
  weight:number | undefined
  kcal:number | undefined

  constructor(public dialog: MatDialog, private dataProvider: DataService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NewmealComponent, {
      height: '460px',
      width: '320px',
      data: {name:this.name, weight:this.weight, kcal:this.kcal}
    });

    dialogRef.afterClosed().subscribe((result: Meal) => {
      console.log('The dialog was closed');
      console.log(result)
      this.dataProvider.postResponse(result);
    });
  }
}

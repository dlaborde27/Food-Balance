import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewmealComponent } from '../modals/newmeal/newmeal.component';

@Component({
  selector: 'app-foodaddbar',
  templateUrl: './foodaddbar.component.html',
  styleUrls: ['./foodaddbar.component.css']
})
export class FoodaddbarComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NewmealComponent, {
      height: '460px',
      width: '320px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

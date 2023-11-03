import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Meal } from 'src/app/intefaces/meal';

@Component({
  selector: 'app-newmeal',
  templateUrl: './newmeal.component.html',
  styleUrls: ['./newmeal.component.css']
})
export class NewmealComponent {
  constructor(
    public dialogRef: MatDialogRef<NewmealComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Meal
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-newmeal',
  templateUrl: './newmeal.component.html',
  styleUrls: ['./newmeal.component.css']
})
export class NewmealComponent {
  constructor(
    public dialogRef: MatDialogRef<NewmealComponent>,
    /*@Inject(MAT_DIALOG_DATA) public data: DialogData,*/
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

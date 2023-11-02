import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-changegoal',
  templateUrl: './changegoal.component.html',
  styleUrls: ['./changegoal.component.css']
})
export class ChangegoalComponent {
  constructor(
    public dialogRef: MatDialogRef<ChangegoalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

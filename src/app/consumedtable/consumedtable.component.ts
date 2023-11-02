import { Component } from '@angular/core';
import { DataService } from '../providers/data.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ChangegoalComponent } from '../modals/changegoal/changegoal.component';

@Component({
  selector: 'app-consumedtable',
  templateUrl: './consumedtable.component.html',
  styleUrls: ['./consumedtable.component.css']
})
export class ConsumedtableComponent {
  goal: number = 2000;
  totalCalories: number = 0;
  private subscription: Subscription | undefined;

  constructor(private dataProvider: DataService, public dialog: MatDialog) {}

  ngOnInit() {
    this.subscription = this.dataProvider.getTotalCalories().subscribe(total => {
      this.totalCalories = total;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChangegoalComponent, {
      height: '300px',
      width: '320px',
      data: this.goal
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.goal = result;
      this.dataProvider.changeGoal(this.goal);
    });
  }
}
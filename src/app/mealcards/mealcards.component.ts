import { Component } from '@angular/core';
import { Meal } from '../intefaces/meal';
import { DataService } from '../providers/data.service';

@Component({
  selector: 'app-mealcards',
  templateUrl: './mealcards.component.html',
  styleUrls: ['./mealcards.component.css']
})
export class MealcardsComponent {
  public data: Meal[] = [];

  constructor(private dataProvider: DataService,) {}

  ngOnInit() {
    this.dataProvider.currentGoal.subscribe(goal => {
      this.dataProvider.getResponse().subscribe((response) => {
        this.data = response as Meal[];
        this.dataProvider.updateCalories(this.data, goal);
        console.log(this.data);
      });
    });
  }
}

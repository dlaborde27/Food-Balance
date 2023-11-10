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
  currentGoal: number = 0;

  constructor(private dataProvider: DataService) {}

  ngOnInit() {
    this.dataProvider.currentGoal.subscribe(goal => {
      this.currentGoal = goal;
      this.updateData(goal);
    });

    this.dataProvider.mealAdded$.subscribe((newMeal) => {
      if (newMeal === null) {
        this.data = [];
      } else {
        this.data.push(newMeal);
      }
      this.dataProvider.updateCalories(this.data, this.currentGoal);
    });
  }

  updateData(goal: number) {
    this.dataProvider.getResponse().subscribe((response) => {
      if (!response) return;
      console.log(Object.keys(response));
      this.data = Object.entries(response).map(([id, value]) => ({id, ...value})) as Meal[];
      this.dataProvider.updateCalories(this.data, goal);
      console.log(this.data);
    });
  }

  deleteData(idMeal: string){
    this.dataProvider.deleteEachResponse(idMeal).subscribe((response) => {
      console.log('Ha sido eliminado el alimento con id' + idMeal);
      this.data = this.data.filter(meal => meal.id !== idMeal);
      this.dataProvider.updateCalories(this.data, this.currentGoal);
    });
  }
}
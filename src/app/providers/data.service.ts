import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meal } from '../intefaces/meal';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private URL: string ='https://food-balance-1b408-default-rtdb.firebaseio.com/meals.json';
  private totalCalories = new BehaviorSubject<number>(0);
  private remainingCalories = new BehaviorSubject<number>(1);
  private goalSource = new BehaviorSubject<number>(2000);
  currentGoal = this.goalSource.asObservable();

  constructor(private http: HttpClient) { }
  changeGoal(goal: number) {
    this.goalSource.next(goal);
  }
  getTotalCalories() {
    return this.totalCalories.asObservable();
  }
  getRemainingCalories() {
    return this.remainingCalories.asObservable();
  }
  updateCalories(meals: Meal[], goal: number) {
    const total = meals.reduce((sum, meal) => sum + Number(meal.kcal), 0);
    this.totalCalories.next(total);
    this.remainingCalories.next(goal - total);
  }
  getResponse() {
    return this.http.get(this.URL);
  }
  deleteResponse(){
    return this.http.delete(this.URL);
  }
}

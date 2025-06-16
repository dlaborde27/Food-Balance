import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meal } from '../intefaces/meal';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly URL: string ='https://food-balance-1b408-default-rtdb.firebaseio.com/meals.json';
  private readonly totalCalories = new BehaviorSubject<number>(0);
  private readonly remainingCalories = new BehaviorSubject<number>(2000);
  private readonly goalSource = new BehaviorSubject<number>(2000);
  private readonly mealAddedSource = new Subject<Meal | null>();
  mealAdded$ = this.mealAddedSource.asObservable();
  currentGoal = this.goalSource.asObservable();
  
  constructor(private readonly http: HttpClient) { }
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
  postResponse(meal:Meal){
    const postRequest = this.http.post(this.URL,meal);
    postRequest.subscribe(result => {
      console.log(result)
      meal.id = Object.values(result) as unknown as string;
      this.mealAddedSource.next(meal);
    });
    return postRequest;
  }
  deleteResponse(){
    const deleteRequest = this.http.delete(this.URL);
    deleteRequest.subscribe(result => {
      this.mealAddedSource.next(null);
    });
    return deleteRequest;
  }
  deleteEachResponse(idmeal: string){
    const deleteRequest = this.http.delete('https://food-balance-1b408-default-rtdb.firebaseio.com/meals/'+idmeal+'.json');
    return deleteRequest;
  }
}
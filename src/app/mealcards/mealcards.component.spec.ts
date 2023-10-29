import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealcardsComponent } from './mealcards.component';

describe('MealcardsComponent', () => {
  let component: MealcardsComponent;
  let fixture: ComponentFixture<MealcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealcardsComponent]
    });
    fixture = TestBed.createComponent(MealcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodaddbarComponent } from './foodaddbar.component';

describe('FoodaddbarComponent', () => {
  let component: FoodaddbarComponent;
  let fixture: ComponentFixture<FoodaddbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodaddbarComponent]
    });
    fixture = TestBed.createComponent(FoodaddbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

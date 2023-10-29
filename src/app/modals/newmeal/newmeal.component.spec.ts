import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmealComponent } from './newmeal.component';

describe('NewmealComponent', () => {
  let component: NewmealComponent;
  let fixture: ComponentFixture<NewmealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewmealComponent]
    });
    fixture = TestBed.createComponent(NewmealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

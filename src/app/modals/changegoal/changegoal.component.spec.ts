import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangegoalComponent } from './changegoal.component';

describe('ChangegoalComponent', () => {
  let component: ChangegoalComponent;
  let fixture: ComponentFixture<ChangegoalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangegoalComponent]
    });
    fixture = TestBed.createComponent(ChangegoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumedtableComponent } from './consumedtable.component';

describe('ConsumedtableComponent', () => {
  let component: ConsumedtableComponent;
  let fixture: ComponentFixture<ConsumedtableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumedtableComponent]
    });
    fixture = TestBed.createComponent(ConsumedtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

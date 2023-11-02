import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DonutchartComponent } from './donutchart/donutchart.component';
import { HeaderComponent } from './header/header.component';
import { ConsumedtableComponent } from './consumedtable/consumedtable.component';
import { StadisticsComponent } from './stadistics/stadistics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodaddbarComponent } from './foodaddbar/foodaddbar.component';
import { MealcardsComponent } from './mealcards/mealcards.component';
import { NewmealComponent } from './modals/newmeal/newmeal.component';
import { ChangegoalComponent } from './modals/changegoal/changegoal.component';

@NgModule({
  declarations: [
    AppComponent,
    DonutchartComponent,
    HeaderComponent,
    ConsumedtableComponent,
    StadisticsComponent,
    FoodaddbarComponent,
    MealcardsComponent,
    NewmealComponent,
    ChangegoalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

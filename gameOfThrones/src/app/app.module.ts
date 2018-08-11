import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { GotHttpService } from './got-http.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BookViewComponent } from './book-view/book-view.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { HouseViewComponent } from './house-view/house-view.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookViewComponent,
    CharacterViewComponent,
    HouseViewComponent
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'', redirectTo:'home',pathMatch:'full'},
      {path:'characters/:id',component:CharacterViewComponent},
      {path:'houses/:id',component:HouseViewComponent},
      {path:'books/:id',component:BookViewComponent}
      


    ])
  ],
  providers: [GotHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

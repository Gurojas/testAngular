import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PeopleService } from './people.service';
import { ListPeopleComponent } from './list-people/list-people.component';
import { AppRoutingModule } from './/app-routing.module';
import { InfoPeopleComponent } from './info-people/info-people.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPeopleComponent,
    InfoPeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

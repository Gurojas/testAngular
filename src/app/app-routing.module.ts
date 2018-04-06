import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { ListPeopleComponent } from './list-people/list-people.component';
import { InfoPeopleComponent } from './info-people/info-people.component';

const routes : Routes = [
  { path: 'list-people', component : ListPeopleComponent},
  { path: '', redirectTo: '/list-people', pathMatch: 'full' },
  { path: 'info-people/:id', component:InfoPeopleComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }

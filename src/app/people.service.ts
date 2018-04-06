import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {People} from './People';
import {peoples} from './Mock-People';


@Injectable()
export class PeopleService {

  constructor() { }

  getPeoples() : Observable<People[]> {
    return of(peoples);
  }

  getPeople(id : number) : Observable<People> {
    return of(peoples.find(people => people.id === id));
  }

}

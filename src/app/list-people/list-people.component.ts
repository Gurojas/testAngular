import { Component, OnInit } from '@angular/core';
import {People} from '../people';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

  peoples : People[] = [];

  constructor(private peopleService : PeopleService) { 
  }

  ngOnInit() {
    this.getPeoples();
  }

  getPeoples() : void{
    this.peopleService.getPeoples().subscribe(peoples => this.peoples = peoples);
  }

}

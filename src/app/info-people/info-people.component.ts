import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {PeopleService} from '../people.service';
import {People} from '../People';

@Component({
  selector: 'app-info-people',
  templateUrl: './info-people.component.html',
  styleUrls: ['./info-people.component.css']
})
export class InfoPeopleComponent implements OnInit {

  people : People;

  constructor(private route : ActivatedRoute, private peopleService : PeopleService, private location: Location) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() : void{
     var id  = +this.route.snapshot.paramMap.get('id');
     this.peopleService.getPeople(id).subscribe(people => this.people = people);
  }



}

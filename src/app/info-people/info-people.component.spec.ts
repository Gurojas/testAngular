import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPeopleComponent } from './info-people.component';

describe('InfoPeopleComponent', () => {
  let component: InfoPeopleComponent;
  let fixture: ComponentFixture<InfoPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PeopleListComponent } from './people-list.component';
import { PersonService } from '../person.service';
import { Person } from '../person.service';

describe('PeopleListComponent', () => {
  let component: PeopleListComponent;
  let fixture: ComponentFixture<PeopleListComponent>;
  let personService: jasmine.SpyObj<PersonService>;

  beforeEach(async () => {
    personService = jasmine.createSpyObj('PersonService', ['getAllPeople']);

    await TestBed.configureTestingModule({
      declarations: [PeopleListComponent],
      providers: [
        { provide: PersonService, useValue: personService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch all people on init', () => {
    const mockPeople: Person[] = [
      { id: 1, firstName: 'John', lastName: 'Doe' },
      { id: 2, firstName: 'Jane', lastName: 'Doe' }
    ];

    personService.getAllPeople.and.returnValue(of(mockPeople));

    component.ngOnInit();

    expect(personService.getAllPeople).toHaveBeenCalled();
    expect(component.people).toEqual(mockPeople);
  });
});
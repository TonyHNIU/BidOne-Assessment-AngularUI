import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PersonFormComponent } from './person-form.component';
import { PersonService } from '../person.service';
import { Person } from '../person.service';

describe('PersonFormComponent', () => {
  let component: PersonFormComponent;
  let fixture: ComponentFixture<PersonFormComponent>;
  let personService: jasmine.SpyObj<PersonService>;

  beforeEach(async () => {
    personService = jasmine.createSpyObj('PersonService', ['addPerson']);

    await TestBed.configureTestingModule({
      declarations: [PersonFormComponent],
      providers: [
        { provide: PersonService, useValue: personService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addPerson on submit', () => {
    const mockPerson: Person = { firstName: 'John', lastName: 'Doe' };
    component.person = mockPerson;

    personService.addPerson.and.returnValue(of({ id: 1, ...mockPerson }));

    spyOn(window, 'alert');

    component.submit();

    expect(personService.addPerson).toHaveBeenCalledWith(mockPerson);
    expect(window.alert).toHaveBeenCalledWith('Person added successfully!');
    expect(component.person).toEqual({ firstName: '', lastName: '' });
  });
});
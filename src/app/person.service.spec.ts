import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PersonService, Person } from './person.service';

describe('PersonService', () => {
  let service: PersonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PersonService]
    });
    service = TestBed.inject(PersonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all people', () => {
    const mockPeople: Person[] = [
      { id: 1, firstName: 'John', lastName: 'Doe' },
      { id: 2, firstName: 'Jane', lastName: 'Doe' }
    ];

    service.getAllPeople().subscribe(people => {
      expect(people.length).toBe(2);
      expect(people).toEqual(mockPeople);
    });

    const req = httpMock.expectOne('https://localhost:44310/api/Person');
    expect(req.request.method).toBe('GET');
    req.flush(mockPeople);
  });

  it('should get person by id', () => {
    const mockPerson: Person = { id: 1, firstName: 'John', lastName: 'Doe' };

    service.getPersonById(1).subscribe(person => {
      expect(person).toEqual(mockPerson);
    });

    const req = httpMock.expectOne('https://localhost:44310/api/Person/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockPerson);
  });

  it('should add a person', () => {
    const newPerson: Person = { firstName: 'Alice', lastName: 'Smith' };
    const createdPerson: Person = { id: 3, ...newPerson };

    service.addPerson(newPerson).subscribe(person => {
      expect(person).toEqual(createdPerson);
    });

    const req = httpMock.expectOne('https://localhost:44310/api/Person');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newPerson);
    req.flush(createdPerson);
  });
});
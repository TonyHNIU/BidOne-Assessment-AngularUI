import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Person {
    id?: number;
    firstName: string;
    lastName: string;
}

@Injectable({
    providedIn: 'root'
})
export class PersonService {
    private apiUrl = 'https://localhost:44310/api/Person';

    constructor(private http: HttpClient) {}

    getAllPeople(): Observable<Person[]> {
        return this.http.get<Person[]>(`${this.apiUrl}`);
    }

    getPersonById(id: number): Observable<Person> {
        return this.http.get<Person>(`${this.apiUrl}/${id}`);
    }

    addPerson(person: Person): Observable<Person> {
        return this.http.post<Person>(this.apiUrl, person);
    }
}
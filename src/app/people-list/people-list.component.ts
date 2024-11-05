import { Component, OnInit } from '@angular/core';
import { PersonService, Person } from '../person.service';

@Component({
    selector: 'app-people-list',
    templateUrl: './people-list.component.html',
    styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
    people: Person[] = [];
    searchId: number | null = null;
    searchedPerson: Person | null = null;

    constructor(private personService: PersonService) {}

    ngOnInit(): void {
        this.getAllPeople();
    }

    getAllPeople(): void {
        this.personService.getAllPeople().subscribe(data => {
            this.people = data;
        });
    }

    refreshPage(): void {
        window.location.reload();
    }
}
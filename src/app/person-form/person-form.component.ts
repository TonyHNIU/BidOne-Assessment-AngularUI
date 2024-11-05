import { Component } from '@angular/core';
import { PersonService, Person } from '../person.service';

@Component({
    selector: 'app-person-form',
    templateUrl: './person-form.component.html',
    styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {
    person: Person = { firstName: '', lastName: '' };

    constructor(private personService: PersonService) {}

    submit() {
        this.personService.addPerson(this.person).subscribe(() => {
            alert('Person added successfully!');
            this.person = { firstName: '', lastName: '' };
        });
    }
}
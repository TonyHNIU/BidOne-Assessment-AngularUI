import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PeopleListComponent } from './people-list/people-list.component';

@NgModule({
    declarations: [
        AppComponent,
        PersonFormComponent,
        PeopleListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
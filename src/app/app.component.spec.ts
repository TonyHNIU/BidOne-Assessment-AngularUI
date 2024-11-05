import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PeopleListComponent } from './people-list/people-list.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [AppComponent, PersonFormComponent, PeopleListComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'person-form'`, () => {
    expect(component.title).toEqual('person-form');
  });

  it('should render title in a header tag', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('header h1').textContent).toContain('Simple Form UI');
  });
});
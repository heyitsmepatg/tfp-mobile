import {
  //FormBuilder,
  ReactiveFormsModule
} from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'

import { RegistrationFormComponent } from './registration-form.component';

describe('RegistrationFormComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ RegistrationFormComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // create reusable function for a dry spec.
  function updateForm(userName: string, userEmail: string, userPassword: string, userRole: string, userContact: number) {
    component.registrationForm.controls['name'].setValue(userName);
    component.registrationForm.controls['email'].setValue(userEmail);
    component.registrationForm.controls['password'].setValue(userPassword);
    component.registrationForm.controls['role'].setValue(userRole);
    component.registrationForm.controls['contact'].setValue(userContact);
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create JSON object on submit', () => {
    updateForm("First Last", "email@example.com", "password1", "user role", 123456789)
    component.onSubmit();
    let expectedJSON = JSON.parse(`{
      "name": "First Last",
      "email": "email@example.com",
      "password": "password1",
      "role": "user role",
      "contact": 123456789
    }`);
    expect(component.formData).toEqual(expectedJSON);
  });
});

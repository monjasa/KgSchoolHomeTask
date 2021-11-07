import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-third',
  templateUrl: './task-third.component.html',
  styleUrls: ['./task-third.component.scss'],
})
export class TaskThirdComponent implements OnInit {

  public signUpForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: [''],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    passwords: this.formBuilder.group({
      password: ['', Validators.compose([Validators.required, Validators.min(6)])],
      passwordConfirmation: ['', Validators.required],
    }, {validators : this.validatePasswordConfirmation}),
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.signUpForm.patchValue({
      firstName: 'Arthur',
      lastName: 'Monja',
    });
  }

  public onSubmit(): void {
    console.log(this.signUpForm.value);
  }

  public validatePasswordConfirmation(formControl: AbstractControl): ValidationErrors | void {
    if (formControl.get('password')?.value !== formControl.get('passwordConfirmation')?.value) {
      return { doesNotMatch: true };
    }
  }
}

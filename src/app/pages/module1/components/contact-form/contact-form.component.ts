import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TextInputComponent } from '../../../../shared/components/inputs/text-input/text-input.component';
import { TextAreaComponent } from '../../../../shared/components/inputs/text-area/text-area.component';
import { PrimaryButtonComponent } from '../../../../shared/components/buttons/primary-button/primary-button.component';

@Component({
  selector: 'app-contact-form',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    TextInputComponent,
    TextAreaComponent,
    PrimaryButtonComponent,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent implements OnInit {
  form!: FormGroup;

  get nameField(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get lastNameField(): FormControl {
    return this.form.get('lastName') as FormControl;
  }

  get emailField(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get messageField(): FormControl {
    return this.form.get('message') as FormControl;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  handleSubmit(): void {
    this.form.markAllAsTouched();
    this.form.markAsDirty();

    if (!this.form.valid) {
      alert('Formulario no valido');
    } else {
      const formData: any = this.form.getRawValue();

      console.log(formData);
    }
  }
}

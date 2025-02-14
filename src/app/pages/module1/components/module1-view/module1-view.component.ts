import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Observable, Subject } from 'rxjs';
import { AppState } from '../../../../shared/store/app.reducer';
import { Store } from '@ngrx/store';
import { selectNumberState } from '../../store/module1.selectors';
import { CommonModule } from '@angular/common';
import { Module1Actions } from '../../store/action.types';
import { PrimaryButtonComponent } from '../../../../shared/components/buttons/primary-button/primary-button.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TextInputComponent } from '../../../../shared/components/inputs/text-input/text-input.component';

@Component({
  selector: 'app-module1-view',
  imports: [
    ButtonModule,
    CommonModule,
    PrimaryButtonComponent,
    TextInputComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './module1-view.component.html',
  styleUrl: './module1-view.component.scss',
})
export class Module1ViewComponent implements OnInit, OnDestroy {
  numberState$!: Observable<number>;

  form!: FormGroup;

  get nameField(): FormControl {
    return this.form.get('name') as FormControl;
  }

  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.selectStoreData();
    this.initForm();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  selectStoreData(): void {
    this.numberState$ = this.store.select(selectNumberState);
  }

  initForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  handleNumberChange(type: number): void {
    if (type === 0) {
      this.store.dispatch(Module1Actions.incrementAction());
    } else {
      this.store.dispatch(Module1Actions.decrementAction());
    }
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    const currentAttribute = element!.getAttribute('data-theme');
    element!.setAttribute(
      'data-theme',
      currentAttribute === 'theme-dark' ? 'theme-light' : 'theme-dark'
    );
  }

  handleSubmit(): void {
    this.form.markAllAsTouched();
    this.form.markAsDirty();

    if (this.form.valid) {
      const formValues: any = this.form.getRawValue();
      console.log(formValues);
    } else {
      console.log('Not valid');
    }
  }
}

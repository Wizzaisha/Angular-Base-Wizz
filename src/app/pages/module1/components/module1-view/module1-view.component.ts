import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Observable, Subject } from 'rxjs';
import { AppState } from '../../../../shared/store/app.reducer';
import { Store } from '@ngrx/store';
import { selectNumberState } from '../../store/module1.selectors';
import { CommonModule } from '@angular/common';
import { Module1Actions } from '../../store/action.types';
import { PrimaryButtonComponent } from '../../../../shared/components/buttons/primary-button/primary-button.component';

@Component({
  selector: 'app-module1-view',
  imports: [ButtonModule, CommonModule, PrimaryButtonComponent],
  templateUrl: './module1-view.component.html',
  styleUrl: './module1-view.component.scss',
})
export class Module1ViewComponent implements OnInit, OnDestroy {
  numberState$!: Observable<number>;

  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.selectStoreData();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  selectStoreData(): void {
    this.numberState$ = this.store.select(selectNumberState);
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
}

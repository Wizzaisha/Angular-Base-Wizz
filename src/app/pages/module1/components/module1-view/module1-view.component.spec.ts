import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1ViewComponent } from './module1-view.component';

describe('Module1ViewComponent', () => {
  let component: Module1ViewComponent;
  let fixture: ComponentFixture<Module1ViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module1ViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module1ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

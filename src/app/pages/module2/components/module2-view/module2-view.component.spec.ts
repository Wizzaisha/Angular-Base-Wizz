import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2ViewComponent } from './module2-view.component';

describe('Module2ViewComponent', () => {
  let component: Module2ViewComponent;
  let fixture: ComponentFixture<Module2ViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module2ViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module2ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

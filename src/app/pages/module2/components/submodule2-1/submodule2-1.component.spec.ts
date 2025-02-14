import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Submodule21Component } from './submodule2-1.component';

describe('Submodule21Component', () => {
  let component: Submodule21Component;
  let fixture: ComponentFixture<Submodule21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Submodule21Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Submodule21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

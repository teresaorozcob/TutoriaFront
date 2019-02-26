import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradoNuevoComponent } from './grado-nuevo.component';

describe('GradoNuevoComponent', () => {
  let component: GradoNuevoComponent;
  let fixture: ComponentFixture<GradoNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradoNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradoEditarComponent } from './grado-editar.component';

describe('GradoEditarComponent', () => {
  let component: GradoEditarComponent;
  let fixture: ComponentFixture<GradoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

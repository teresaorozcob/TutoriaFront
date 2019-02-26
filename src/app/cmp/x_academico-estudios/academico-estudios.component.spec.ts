import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicoEstudiosComponent } from './academico-estudios.component';

describe('AcademicoEstudiosComponent', () => {
  let component: AcademicoEstudiosComponent;
  let fixture: ComponentFixture<AcademicoEstudiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicoEstudiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicoEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

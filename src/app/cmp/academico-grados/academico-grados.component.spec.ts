import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicoGradosComponent } from './academico-grados.component';

describe('AcademicoGradosComponent', () => {
  let component: AcademicoGradosComponent;
  let fixture: ComponentFixture<AcademicoGradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicoGradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicoGradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

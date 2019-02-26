import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicoCatComponent } from './academico-cat.component';

describe('AcademicoCatComponent', () => {
  let component: AcademicoCatComponent;
  let fixture: ComponentFixture<AcademicoCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicoCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicoCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

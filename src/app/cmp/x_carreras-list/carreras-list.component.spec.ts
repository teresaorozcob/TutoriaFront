import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerasListComponent } from './carreras-list.component';

describe('CarrerasListComponent', () => {
  let component: CarrerasListComponent;
  let fixture: ComponentFixture<CarrerasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrerasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrerasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

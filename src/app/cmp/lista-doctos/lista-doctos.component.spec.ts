import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDoctosComponent } from './lista-doctos.component';

describe('ListaDoctosComponent', () => {
  let component: ListaDoctosComponent;
  let fixture: ComponentFixture<ListaDoctosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDoctosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDoctosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

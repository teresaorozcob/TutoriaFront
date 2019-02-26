import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoDoctoComponent } from './nuevo-docto.component';

describe('NuevoDoctoComponent', () => {
  let component: NuevoDoctoComponent;
  let fixture: ComponentFixture<NuevoDoctoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoDoctoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoDoctoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

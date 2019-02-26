import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoComponent } from './docto.component';

describe('DoctoComponent', () => {
  let component: DoctoComponent;
  let fixture: ComponentFixture<DoctoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

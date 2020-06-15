import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTreatmentComponent } from './data-treatment.component';

describe('DataTreatmentComponent', () => {
  let component: DataTreatmentComponent;
  let fixture: ComponentFixture<DataTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

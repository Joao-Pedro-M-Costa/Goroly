import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSideOptionsComponent } from './admin-side-options.component';

describe('AdminSideOptionsComponent', () => {
  let component: AdminSideOptionsComponent;
  let fixture: ComponentFixture<AdminSideOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSideOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSideOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

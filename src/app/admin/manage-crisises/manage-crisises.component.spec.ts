import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCrisisesComponent } from './manage-crisises.component';

describe('ManageCrisisesComponent', () => {
  let component: ManageCrisisesComponent;
  let fixture: ComponentFixture<ManageCrisisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCrisisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCrisisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

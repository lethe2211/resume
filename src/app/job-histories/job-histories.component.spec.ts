import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobHistoriesComponent } from './job-histories.component';

describe('JobHistoriesComponent', () => {
  let component: JobHistoriesComponent;
  let fixture: ComponentFixture<JobHistoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobHistoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobHistoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

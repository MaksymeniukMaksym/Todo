import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkstageComponent } from './workstage.component';

describe('WorkstageComponent', () => {
  let component: WorkstageComponent;
  let fixture: ComponentFixture<WorkstageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkstageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

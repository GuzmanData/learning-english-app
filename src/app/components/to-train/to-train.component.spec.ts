import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToTrainComponent } from './to-train.component';

describe('ToTrainComponent', () => {
  let component: ToTrainComponent;
  let fixture: ComponentFixture<ToTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToTrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

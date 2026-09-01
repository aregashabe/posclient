import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWaiterComponent } from './view-waiter.component';

describe('ViewWaiterComponent', () => {
  let component: ViewWaiterComponent;
  let fixture: ComponentFixture<ViewWaiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewWaiterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewWaiterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

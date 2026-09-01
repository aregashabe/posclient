import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWaiterComponent } from './add-waiter.component';

describe('AddWaiterComponent', () => {
  let component: AddWaiterComponent;
  let fixture: ComponentFixture<AddWaiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWaiterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddWaiterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

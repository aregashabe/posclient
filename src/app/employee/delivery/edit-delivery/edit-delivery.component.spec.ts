import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeliveryComponent } from './edit-delivery.component';

describe('EditDeliveryComponent', () => {
  let component: EditDeliveryComponent;
  let fixture: ComponentFixture<EditDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDeliveryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditDeliveryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

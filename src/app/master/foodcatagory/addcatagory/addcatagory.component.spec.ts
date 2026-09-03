import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcatagoryComponent } from './addcatagory.component';

describe('AddcatagoryComponent', () => {
  let component: AddcatagoryComponent;
  let fixture: ComponentFixture<AddcatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddcatagoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddcatagoryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

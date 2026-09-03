import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcatagoryComponent } from './editcatagory.component';

describe('EditcatagoryComponent', () => {
  let component: EditcatagoryComponent;
  let fixture: ComponentFixture<EditcatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditcatagoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditcatagoryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

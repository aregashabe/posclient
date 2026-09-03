import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCategoryComponent } from './view-category.component';

describe('ViewCategoryComponent', () => {
  let component: ViewCategoryComponent;
  let fixture: ComponentFixture<ViewCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCategoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewCategoryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

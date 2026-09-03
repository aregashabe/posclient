import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfoodmenuComponent } from './viewfoodmenu.component';

describe('ViewfoodmenuComponent', () => {
  let component: ViewfoodmenuComponent;
  let fixture: ComponentFixture<ViewfoodmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewfoodmenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewfoodmenuComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

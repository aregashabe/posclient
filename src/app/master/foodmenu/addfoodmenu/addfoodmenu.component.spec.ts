import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfoodmenuComponent } from './addfoodmenu.component';

describe('AddfoodmenuComponent', () => {
  let component: AddfoodmenuComponent;
  let fixture: ComponentFixture<AddfoodmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddfoodmenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddfoodmenuComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

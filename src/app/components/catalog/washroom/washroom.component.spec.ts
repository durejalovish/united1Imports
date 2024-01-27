import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashroomComponent } from './washroom.component';

describe('WashroomComponent', () => {
  let component: WashroomComponent;
  let fixture: ComponentFixture<WashroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WashroomComponent]
    });
    fixture = TestBed.createComponent(WashroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

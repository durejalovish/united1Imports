import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCart } from './addToCart.component';

describe('AddToCart', () => {
  let component: AddToCart;
  let fixture: ComponentFixture<AddToCart>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddToCart]
    });
    fixture = TestBed.createComponent(AddToCart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemComponent } from './product-item.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;
  let debugElement : DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the title', function() {
    expect(component.title).toBe('Welcome to Product Item');
  });

  it('should render the title on html', function() {
    let titleEl = debugElement.query(By.css('#prod-title'));
    expect(component.title).toBe(titleEl.nativeElement.textContent);
  });

  it('should render the image on the screen ', function() {
    let imageEl = debugElement.query(By.css('#prod-img'));
    expect(component.product.image).toBe(imageEl.nativeElement.src);
  });

  it('should incr the Qty for Incr button click', function() {
    let qtyEl = debugElement.query(By.css('#prod-qty'));
    let plusSymbol = debugElement.query(By.css('.fa-plus-circle'));
    plusSymbol.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.product.qty).toBe(Number(qtyEl.nativeElement.textContent));
  });

  it('should decr the Qty for Decr button click', function() {
    let qtyEl = debugElement.query(By.css('#prod-qty'));
    let minusSymbol = debugElement.query(By.css('.fa-minus-circle'));
    minusSymbol.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.product.qty).toBe(Number(qtyEl.nativeElement.textContent));
  });

  it('should render  the total', function() {
    let totalEl = debugElement.query(By.css('#prod-total'));
    expect(component.product.qty * component.product.price).toBe(Number(totalEl.nativeElement.textContent));
  });

});

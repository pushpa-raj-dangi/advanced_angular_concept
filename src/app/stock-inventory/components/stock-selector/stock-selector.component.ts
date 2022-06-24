import { Product } from './../../models/product.interface';
import { FormGroup } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'stock-selector',
  template: `
    <div class="stock-selector" [formGroup]="parent">
      <div formGroupName="selector">
        <select formControlName="product_id">
          <option value="">Select Stock</option>
          <option *ngFor="let product of products" [value]="product.id">
            {{ product.name }}
          </option>
        </select>
        <!-- <input
          formControlName="quantity"
          min="10"
          step="10"
          max="1000"
          type="number"
        /> -->
        <stock-counter
          [step]="10"
          [min]="10"
          [max]="100"
          formControlName="quantity"
        ></stock-counter>
        <button
          type="button"
          (click)="onAdd()"
          [disabled]="stockExists || notSelected"
        >
          Add Stock
        </button>
        <div class="alert alert-danger" *ngIf="stockExists">
          Item already exists in the stock
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./stock-selector.component.scss'],
})
export class StockSelectorComponent {
  @Output()
  added = new EventEmitter<any>();
  @Input()
  parent!: FormGroup;

  get notSelected() {
    return !this.parent.get('selector.product_id')?.value;
  }
  @Input()
  products!: Product[];

  get stockExists() {
    return (
      this.parent.hasError('stockExists') &&
      this.parent.get('selector.product_id')?.dirty
    );
  }

  onAdd() {
    this.added.emit(this.parent.get('selector')?.value);
    this.parent.get('selector')?.reset({
      product_id: '',
      quantity: 10,
    });
  }
}

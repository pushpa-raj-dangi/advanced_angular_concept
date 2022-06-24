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
        <button type="button" (click)="onAdd()">Add Stock</button>
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

  @Input()
  products!: Product[];

  onAdd() {
    this.added.emit(this.parent.get('selector')?.value);
    this.parent.get('selector')?.reset({
      product_id: '',
      quantity: 10,
    });
  }
}

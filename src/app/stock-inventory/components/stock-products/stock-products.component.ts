import { Product } from './../../models/product.interface';
import { FormGroup, FormArray } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'stock-products',
  template: `<div [formGroup]="parent">
    <div formArrayName="stock">
      <div *ngFor="let item of stocks; let i = index">
        <div class="stock-product__content" [formGroupName]="i">
          <div class="d-flex" style="align-items: center;">
            <div class="stock-product__name">
              {{ getProduct(item.value.product_id)?.name }}
            </div>
            <div class="stock-product__name">
              {{ getProduct(item.value.product_id)?.price | currency }}
            </div>
            <input
              type="number"
              step="10"
              min="10"
              max="1000"
              formControlName="quantity"
            />
            <button
              class="btn-danger"
              type="button"
              (click)="onRemove(item, i)"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`,
  styleUrls: ['./stock-products.component.scss'],
})
export class StockProductsComponent {
  @Input()
  parent!: FormGroup;

  @Input()
  map!: Map<number, Product>;

  @Output()
  removed = new EventEmitter<any>();

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }

  getProduct(id: number) {
    return this.map.get(id);
  }

  onRemove(group: any, index: any) {
    this.removed.emit({ group, index });
  }
}

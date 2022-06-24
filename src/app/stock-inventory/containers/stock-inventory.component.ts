import { Item } from './../models/product.interface';
import { forkJoin, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  AsyncValidator,
  AsyncValidatorFn,
} from '@angular/forms';
import { Product } from '../models/product.interface';
import { StockInventoryService } from '../services/stock-inventory.service';
import { StockValidators } from './stock-inventory.validators';

@Component({
  selector: 'stock-inventory',
  template: `<div>
    <div class="stock-inventory">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <stock-branch [parent]="form"> </stock-branch>

        <stock-selector
          [parent]="form"
          [products]="products"
          (added)="addStock($event)"
        >
        </stock-selector>

        <stock-products
          [parent]="form"
          [map]="productMap"
          (removed)="removeStock($event)"
        >
        </stock-products>
        <h5>Total : {{ total | currency }}</h5>

        <button [disabled]="form.invalid" type="submit">Order Stock</button>
        <pre>
          {{ form.value | json }}
        </pre
        >
      </form>
    </div>
  </div>`,
  styleUrls: ['./stock-inventory.component.scss'],
})
export class StockInventoryComponent implements OnInit {
  products!: Product[];

  productMap!: Map<number, Product>;

  form = this.fb.group(
    {
      store: this.fb.group({
        branch: [
          '',
          [Validators.required, StockValidators.checkBranch],
          [this.validateBranch.bind(this)],
        ],
        code: ['', Validators.required],
      }),
      selector: this.createStock({}),

      stock: this.fb.array([]),
    },
    { validators: StockValidators.checkStockExists }
  );
  total!: number;

  constructor(
    private fb: FormBuilder,
    private stockService: StockInventoryService
  ) {}

  ngOnInit(): void {
    const cart = this.stockService.getCartItems();
    const products = this.stockService.getProducts();
    forkJoin(cart, products).subscribe(
      ([cart, products]: [Item[], Product[]]) => {
        const myMap = products.map<[number, Product]>((product) => [
          product.id,
          product,
        ]);
        this.productMap = new Map<number, Product>(myMap);
        this.products = products;
        cart.forEach((item) => this.addStock(item));
      }
    );
    this.form.get('stock')?.valueChanges.subscribe((value) => {
      this.calculateTotal(value);
    });
  }

  calculateTotal(vlaue: Item[]) {
    const total = vlaue.reduce((prev: any, next: any) => {
      return prev + next.quantity * this.productMap.get(next.product_id)!.price;
    }, 0);
    this.total = total;
  }

  createStock(stock: any) {
    return this.fb.group({
      product_id: parseInt(stock.product_id, 10) || '',
      quantity: stock.quantity || 10,
    });
  }

  validateBranch(control: AbstractControl) {
    console.log(control.value);

    return this.stockService.checkBranchId(control.value).pipe(
      map((x: any) => {
        return x ? null : { unknownBranch: true };
      })
    );
  }

  addStock(stock: any) {
    const control = this.form.get('stock') as FormArray;
    console.log(stock);

    control.push(this.createStock(stock));
  }

  onSubmit() {
    console.log('submit', this.form.value);
  }

  removeStock({ group, index }: { group: FormGroup; index: number }) {
    const controls = this.form.get('stock') as FormArray;
    controls.removeAt(index);
  }
}

import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'stock-branch',
  template: `<div [formGroup]="parent">
    <div formGroupName="store">
      <input type="text" placeholder="Brand Id" formControlName="branch" />
      <div *ngIf="required('branch')" class="alert alert-danger">
        Branch Id is requred.
      </div>
      <div *ngIf="unknown" class="alert alert-danger">Unknown branch</div>

      <div *ngIf="invalid" class="alert alert-danger">
        Invalid branch code:1 letter and 3 numbers
      </div>
      <input type="text" placeholder="Manager Code" formControlName="code" />
      <div *ngIf="required('code')" class="alert alert-danger">
        Branch code is required.
      </div>
    </div>
  </div>`,
  styleUrls: ['./stock-branch.component.scss'],
})
export class StockBranchComponent {
  @Input()
  parent!: FormGroup;

  get invalid() {
    return (
      this.parent.get('store.branch')?.hasError('invalidBranch') &&
      this.parent.get('store.branch')?.dirty &&
      !this.required('branch')
    );
  }

  get unknown() {
    return (
      this.parent.get('store.branch')?.hasError('unknownBranch') &&
      this.parent.get('store.branch')?.dirty
    );
  }

  required(name: string) {
    return (
      this.parent.get(`store.${name}`)?.hasError('required') &&
      this.parent.get(`store.${name}`)?.touched
    );
  }
}

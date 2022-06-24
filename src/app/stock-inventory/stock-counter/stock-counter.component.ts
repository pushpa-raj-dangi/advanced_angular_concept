import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StockCounterComponent),
  multi: true,
};

@Component({
  selector: 'stock-counter',
  providers: [COUNTER_CONTROL_ACCESSOR],
  template: `<div [class.focused]="focus">
    <div
      tabindex="0"
      class="wrapper"
      (keydown)="onKeyDown($event)"
      (keyup)="onKeyUp($event)"
      (focus)="onFocus($event)"
      (blur)="onBlur($event)"
    >
      <p>{{ value }}</p>
      <div>
        <button type="button" (click)="increment()" [disabled]="value === max">
          +
        </button>
        <button type="button" (click)="decrement()" [disabled]="value === min">
          -
        </button>
      </div>
    </div>
  </div>`,
  styleUrls: ['stock-counter.component.scss'],
})
export class StockCounterComponent implements ControlValueAccessor {
  private onTouch!: Function;
  private onModelChange!: Function;

  writeValue(obj: any): void {
    this.value = obj || 0;
  }
  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  focus!: boolean;

  @Input() step: number = 10;
  @Input() min: number = 10;
  @Input() max: number = 1000;

  onKeyDown(event: KeyboardEvent) {
    const handlers: any = {
      ArrowDown: () => this.decrement(),
      ArrowUp: () => this.increment(),
    };

    if (handlers[event.code]) {
      handlers[event.code]();
      event.preventDefault();
      event.stopPropagation();
    }

    this.onTouch();
  }

  onKeyUp(event: KeyboardEvent) {}
  onBlur(event: FocusEvent) {
    this.focus = false;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }
  onFocus(event: FocusEvent) {
    this.focus = true;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }

  increment() {
    if (this.value < this.max) {
      this.value = this.value + this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }

  decrement() {
    if (this.value > this.min) {
      this.value = this.value - this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }

  value: number = 0;
}

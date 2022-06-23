import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[credit-card]',
})
export class CreditCardDirective {
  constructor(private element: ElementRef) {}

  @HostBinding('style.border')
  border!: string;

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let trim = input.value.replace(/\s+/g, '');

    if (trim.length > 16) {
      trim = trim.substr(0, 16);
    }

    let numbers = [];

    for (let i = 0; i < trim.length; i += 4) {
      numbers.push(trim.substr(i, 4));
    }

    input.value = numbers.join(' ');
    this.border = '';

    if (/[^\d]+/.test(trim)) {
      this.border = '1px solid red';
    }
  }
}

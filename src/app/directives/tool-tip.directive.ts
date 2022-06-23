import {
  Directive,
  Input,
  OnInit,
  ElementRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[tooltip]',
  exportAs: 'tooltip',
})
export class ToolTipDirective implements OnInit {
  tooltipElement = document.createElement('div');
  visible = false;

  @Input()
  set tooltip(value: any) {
    this.tooltipElement.textContent = value;
  }
  constructor(private element: ElementRef, private view: ViewContainerRef) {}

  hide() {
    this.tooltipElement.classList.remove('tooltip-active');
  }

  show() {
    this.tooltipElement.classList.add('tooltip-active');
  }

  ngOnInit(): void {
    this.tooltipElement.className = 'tooltip';
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add('tooltip-container');
  }
}

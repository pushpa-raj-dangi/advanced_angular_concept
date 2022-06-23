import { AuthMessageComponent } from './auth-message/auth-message.component';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';
import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit, AfterViewInit {
  title = 'login';

  @ViewChildren(AuthMessageComponent) message!: QueryList<AuthMessageComponent>;

  @Output() user: EventEmitter<any> = new EventEmitter();

  showMessage: boolean = false;

  @ViewChild('email') email!: ElementRef;

  constructor(private cd: ChangeDetectorRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.setAttribute(
      this.email.nativeElement,
      'placeholder',
      'Enter your email'
    );

    this.renderer.addClass(this.email.nativeElement, 'form-control');
    this.renderer.setValue(this.email.nativeElement, 'hello@gmail.com');
    this.renderer.listen(this.email.nativeElement, 'focus', () => {
      console.log('focused');
    });
    this.renderer.selectRootElement(this.email.nativeElement).focus();
    this.renderer.selectRootElement(this.email.nativeElement).blur();
  }

  ngOnInit(): void {}

  onSubmit(form: any) {
    this.user.emit(form);
  }
}

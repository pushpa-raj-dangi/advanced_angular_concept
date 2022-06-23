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
export class AuthFormComponent implements OnInit {
  title = 'login';

  @ViewChildren(AuthMessageComponent) message!: QueryList<AuthMessageComponent>;

  @Output() user: EventEmitter<any> = new EventEmitter();

  showMessage: boolean = false;

  @ViewChild('email') email!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  onSubmit(form: any) {
    this.user.emit(form);
  }
}

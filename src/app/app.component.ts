import { AuthFormComponent } from './auth-form/auth-form.component';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'login';
  user: any;

  component!: ComponentRef<AuthFormComponent>;

  @ViewChild('entry', { read: ViewContainerRef }) entry!: ViewContainerRef;
  @ViewChild('tmpl') tmpl!: TemplateRef<any>;

  constructor() {}

  ngAfterViewInit(): void {
    this.entry.createEmbeddedView(this.tmpl, {
      $implicit: 'Pushpa Raj Dangi',
      location: 'Kathmandu Nepal',
    });
  }

  login(user: any) {
    console.log(this.user);
    this.user = user;
  }
}

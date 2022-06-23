import { AuthFormComponent } from './auth-form/auth-form.component';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
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

  @ViewChild('entry', { read: ViewContainerRef }) entry!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    const authFormFactory =
      this.resolver.resolveComponentFactory(AuthFormComponent);
    const component = this.entry.createComponent(authFormFactory);
    component.instance.title = 'Create Account';
  }

  rememberUser(e: any) {
    console.log(e);
  }

  createUser(user: any) {
    this.user = user;
  }

  login(user: any) {
    this.user = user;
  }
}

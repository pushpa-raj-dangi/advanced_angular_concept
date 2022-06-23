import { AuthFormComponent } from './auth-form/auth-form.component';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
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

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    const authFormFactory =
      this.resolver.resolveComponentFactory(AuthFormComponent);
    this.component = this.entry.createComponent(authFormFactory);
    this.component.instance.title = 'Create Account';
    this.component.instance.user.subscribe(this.login);
  }

  rememberUser(e: any) {
    console.log(e);
  }

  destroyComponent() {
    this.component.destroy();
  }

  createUser(user: any) {
    console.log(this.user);
    this.user = user;
  }

  login(user: any) {
    console.log(this.user);

    this.user = user;
  }
}

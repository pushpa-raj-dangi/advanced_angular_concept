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
  title = 'content-projection';
  user: any;

  @ViewChild('entry', { read: ViewContainerRef }) entry!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    const authFormFactory =
      this.resolver.resolveComponentFactory(AuthFormComponent);
    const component = this.entry.createComponent(authFormFactory);
    //we can create multiple component like this
    const component1 = this.entry.createComponent(authFormFactory);
    const component2 = this.entry.createComponent(authFormFactory);
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

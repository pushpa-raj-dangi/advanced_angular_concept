import {
  AfterContentInit,
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
export class AppComponent implements AfterContentInit {
  title = 'content-projection';
  user: any;

  @ViewChild('entry', { read: ViewContainerRef }) entry!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}
  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
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

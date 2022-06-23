import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  items = [{ name: 'hari' }, { name: 'gopal' }];
  files = [{ name: 'logo.svg', size: 12343434 }];

  constructor() {
    setTimeout(() => {
      this.items = [...this.items, { name: 'ramit' }];
    }, 2000);
  }
}

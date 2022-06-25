import { MailViewComponent } from './mail-view.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class MailviewGuard implements CanDeactivate<MailViewComponent> {
  canDeactivate(component: MailViewComponent) {
    console.log(component);
    if (component.hasUnSaved) {
      return window.confirm(
        'You have unsaved changes. Are you sure you want to leave?'
      );
    }
    return true;
  }
}

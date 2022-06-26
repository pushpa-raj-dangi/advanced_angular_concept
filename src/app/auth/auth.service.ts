import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  user = { isAdmin: true };

  checkPersmission() {
    return of(this.user.isAdmin);
  }

  isLoggedIn() {
    return of(true);
  }
  constructor() {}
}
